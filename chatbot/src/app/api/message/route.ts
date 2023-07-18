import { ChatGPTMessage, OpenAIStream, OpenAIStreamPayload } from '@/lib/openai-stream';
import { MessageArraySchema } from '@/lib/validators/message';
import { api } from "@/config/api";

export async function POST(req: Request): Promise<Response> {
	const {messages} = await req.json();

	console.log(messages);

	const parsedMessages = MessageArraySchema.parse(messages);

	const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => {
		return {
			role: message.isUserMessage ? 'user' : 'system',
			content: message.text,
		};
	});

	try {
		const siteURL = req.headers.get('referer') || '';
		const hostname = new URL(siteURL).hostname;
		const domain = hostname.replace('www.', '').split('.')[0];

		const response1 = await fetch(`https://api.myaichat.io/api/v1/${domain}/stores`);
		const data1 = response1.ok ? await response1.json() : null;

		console.log('response2', data1);


		const response2 = await fetch(`https://api.myaichat.io/api/v1/product/${domain}`);
		const data2 = response2.ok ? await response2.json() : null;

		console.log('response2', data2);

		outboundMessages.unshift({
			role: 'system',
			content: `
				Vous êtes un chatbot de support client. Vous êtes capable de répondre aux questions sur le site web et son contenu.
				Vous êtes également capable de répondre aux questions.
				
				Utilisez ces métadonnées pour répondre aux questions des clients :
				
				${data1[0].content}
				${JSON.stringify(data2)}
					 
				Refusez toute réponse qui n'a rien à voir avec le site web ou son contenu.
				Fournissez des réponses courtes et concises.
				Ne fournissez pas de réponses qui ne sont pas pertinentes pour le site web ou son contenu.
			`,
		});

		console.log('outboundMessages', outboundMessages)

	} catch (error) {
		console.error('Error:', error);
	}

	const payload: OpenAIStreamPayload = {
		model: 'gpt-3.5-turbo-0613',
		messages: outboundMessages,
		temperature: 0.4,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
		max_tokens: 150,
		stream: true,
		n: 1,
	};

	const stream = await OpenAIStream(payload);

	return new Response(stream);
}