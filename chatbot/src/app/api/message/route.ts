import { ChatGPTMessage, OpenAIStream, OpenAIStreamPayload } from "@/lib/openai-stream";
import { MessageArraySchema } from "@/lib/validators/message";

export async function POST(req: Request): Promise<Response> {
	try {
		const { messages, domain } = await req.json();

		const parsedMessages = MessageArraySchema.parse(messages);

		const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => {
			return {
				role: message.isUserMessage ? 'user' : 'system',
				content: message.text,
			};
		});

		const [response1, response2] = await Promise.all([
			fetch(`https://api.myaichat.io/api/v1/${domain}/stores`),
			fetch(`https://api.myaichat.io/api/v1/product/${domain}`),
		]);

		const [data1, data2] = await Promise.all([response1.json(), response2.json()]);

		console.log('response1', data1);
		console.log('response2', data2);

		outboundMessages.unshift({
			role: 'system',
			content: `
        Vous êtes un chatbot de support client. Vous êtes capable de répondre aux questions sur le site web et son contenu.
        Vous êtes également capable de répondre aux questions.
        
        Utilisez ces métadonnées pour répondre aux questions des clients :
        
        ${JSON.stringify(data1)}
        ${JSON.stringify(data2)}
             
        Refusez toute réponse qui n'a rien à voir avec le site web ou son contenu.
        Fournissez des réponses courtes et concises.
        Ne fournissez pas de réponses qui ne sont pas pertinentes pour le site web ou son contenu.
      `,
		});

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
		};

		const stream = await OpenAIStream(payload);

		return new Response(stream);
	} catch (error) {
		console.error('Error:', error);
		return new Response('Une erreur s\'est produite.', { status: 500 });
	}
}
