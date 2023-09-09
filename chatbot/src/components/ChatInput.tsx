import React, { useContext, useRef, useState } from 'react'
import { nanoid } from 'nanoid'
import { Message } from '@/lib/validators/message'
import { useMutation } from '@tanstack/react-query'
import { CornerDownLeft, Loader2 } from 'lucide-react'
import { MessagesContext } from '@/context/messages'
import { toast } from 'react-hot-toast'
import { cn } from '@/lib/utils'
import axios from 'axios'

interface ChatInputProps extends React.HTMLAttributes<HTMLDivElement> {}

const ChatInput: React.FC<ChatInputProps> = ({ className, ...props }) => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [input, setInput] = useState<string>('')
    const {
        messages,
        domain,
        allowedResponses,
        addMessage,
        removeMessage,
        updateMessage,
        setIsMessageUpdating,
    } = useContext(MessagesContext)

    const { mutate: sendMessage, isLoading } = useMutation({
        mutationKey: ['sendMessage'],

        mutationFn: async (_message: Message) => {
            const test = await axios.post('/api/message', {
                messages,
                domain,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                console.log("response", response)
            })

            console.log("test", test)


            const response = await fetch('/api/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ messages, domain }),
            })

            console.log("response")

            return response.body
        },
        onMutate(message) {
            addMessage(message)
        },
        onSuccess: async (stream) => {
            console.log("stream")

            if (allowedResponses !== null && messages.filter((message) => !message.isUserMessage).length >= allowedResponses) {
                console.log('Nombre de réponses autorisées dépassé.')
                return
            }

            if (!stream) throw new Error('Pas de flux disponible')

            const id = nanoid()
            const responseMessage: Message = {
                id,
                isUserMessage: false,
                text: '',
            }

            addMessage(responseMessage)

            console.log('responseMessage', responseMessage)

            setIsMessageUpdating(true)

            const reader = stream.getReader()
            const decoder = new TextDecoder()
            let done = false

            while (!done) {
                console.log("TOTO")
                const { value, done: doneReading } = await reader.read()
                done = doneReading
                const chunkValue = decoder.decode(value)
                updateMessage(id, (prev) => prev + chunkValue)
            }

            setIsMessageUpdating(false)
            setInput('')

            setTimeout(() => {
                inputRef.current?.focus()
            }, 10)
        },
        onError: (_, message) => {
            console.log('VERT')
            toast.error('Quelque chose s\'est mal passé. Veuillez réessayer.')
            removeMessage(message.id)
            inputRef.current?.focus()
        },
    })

    return (
      <div {...props} className={cn('border-t border-zinc-300 p-2 container-ui-input', className)}>
          <div className='relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none'>
              <input
                ref={inputRef}
                onClick={() => {
                    if (!input) {
                        inputRef.current?.focus()
                    }
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()

                        const message: Message = {
                            id: nanoid(),
                            isUserMessage: true,
                            text: input,
                        }

                        sendMessage(message)
                    }
                }}
                value={input}
                disabled={isLoading}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Écrire un message...'
                className='peer disabled:opacity-50 pr-14 block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6'
                style={{ padding: '8px' }}
              />

              <div className='absolute inset-y-0 right-0 flex py-1.5 pr-1.5'>
                  <kbd
                    className='inline-flex items-center rounded border bg-white border-gray-200 px-1 font-sans text-xs text-gray-400'>
                      {isLoading ? (
                        <Loader2 className='w-3 h-3 animate-spin' />
                      ) : (
                        <CornerDownLeft
                          className='w-3 h-3'
                          onClick={() => {
                              const message: Message = {
                                  id: nanoid(),
                                  isUserMessage: true,
                                  text: input,
                              }
                              sendMessage(message)
                          }}
                        />
                      )}
                  </kbd>
              </div>

              <div
                className='absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600'
                aria-hidden='true' />
          </div>
      </div>
    )
}

export default ChatInput