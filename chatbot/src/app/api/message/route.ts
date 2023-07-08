import { ChatGPTMessage, OpenAIStream, OpenAIStreamPayload } from '@/lib/openai-stream';
import { MessageArraySchema } from '@/lib/validators/message';
import { cookies } from 'next/headers';

export async function POST(req: Request): Promise<Response> {
	const {messages} = await req.json();
	const nextCookies = cookies(); // Get cookies object

	console.log(messages);

	const parsedMessages = MessageArraySchema.parse(messages);

	const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => {
		return {
			role: message.isUserMessage ? 'user' : 'system',
			content: message.text,
		};
	});

	let content = nextCookies.get('data1')?.value

	const content2 = nextCookies.get('data2')?.value;

	let fullUrls = [];

	if (content2) {
		try {
			const parsedContent2 = JSON.parse(content2);
			fullUrls = parsedContent2.map((item: any) => item.full_url);
		} catch (error) {
			console.error('Error parsing content2:', error);
		}
	}

	outboundMessages.unshift({
		role: 'system',
		content: `
		
		Vous êtes un chatbot de support client. Vous êtes capable de répondre aux questions sur le site web et son contenu.
          Vous êtes également capable de répondre aux questions.
          
          Utilisez ces métadonnées pour répondre aux questions des clients :
          
         ${content}
     		 ${content2}
     		 ${fullUrls}
          
          Refusez toute réponse qui n'a rien à voir avec le site web ou son contenu.
          Fournissez des réponses courtes et concises.
          Ne fournissez pas de réponses qui ne sont pas pertinentes pour le site web ou son contenu.
		    `,
	});

	const payload: OpenAIStreamPayload = {
		model: 'gpt-4-0613',
		messages: outboundMessages,
		temperature: 0.4,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
		max_tokens: 32000,
		stream: true,
		n: 1,
	};

	const stream = await OpenAIStream(payload);

	return new Response(stream);
}
