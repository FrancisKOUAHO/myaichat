import { ChatGPTMessage, OpenAIStream, OpenAIStreamPayload, } from '@/lib/openai-stream'
import { MessageArraySchema } from '@/lib/validators/message'
import { getServerSideProps, data1, data2 } from "@/helpers/constants/result";



export async function POST(req: Request): Promise<Response> {
	const {messages} = await req.json()
  console.log(messages)

	const parsedMessages = MessageArraySchema.parse(messages)

	const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => {
		return {
			role: message.isUserMessage ? 'user' : 'system',
			content: message.text,
		}
	})

	outboundMessages.unshift({
		role: 'system',
		content: '',
	})

	const payload: OpenAIStreamPayload = {
		model: 'gpt-3.5-turbo',
		messages: outboundMessages,
		temperature: 0.4,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
		max_tokens: 150,
		stream: true,
		n: 1,
	}

	const stream = await OpenAIStream(payload)

	console.log('Thomas:', data1);
	console.log('Zola:', data2);

	return new Response(stream)
}
