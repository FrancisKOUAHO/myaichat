import { ChatGPTMessage, OpenAIStream, OpenAIStreamPayload } from '@/lib/openai-stream';
import { MessageArraySchema } from '@/lib/validators/message';
import { cookies } from 'next/headers';

export async function POST(req: Request): Promise<Response> {
	const {messages} = await req.json();
	const nextCookies = cookies(); // Get cookies object

	//console.log(messages);

	const parsedMessages = MessageArraySchema.parse(messages);

	const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => {
		return {
			role: message.isUserMessage ? 'user' : 'system',
			content: message.text,
		};
	});

	console.log(nextCookies.get('data2'));
	console.log(nextCookies.get('data1'));


	outboundMessages.unshift({
		role: 'system',
		content: `
      Vous êtes un chatbot de support client. Votre principale fonction est de répondre de manière efficace et précise aux questions des clients concernant le site web et son contenu.
      
      Les métadonnées sont structurées comme suit :
     
      ${nextCookies.get('data1')}
      ${nextCookies.get('data2')}
      
      Exemple : "Vous pouvez consulter [ici] (dans data2 full_url)".
      En dehors des liens, utilisez du texte normal.
      
      Examinez attentivement ces métadonnées pour élaborer vos réponses. Si une question ou une requête correspond à un contenu spécifique du site que vous pouvez identifier dans les métadonnées fournies, n'hésitez pas à fournir l'URL appropriée. Ces URL doivent être extraites directement des métadonnées et non générées par vos soins.
      
      Assurez-vous de ne répondre qu'aux questions pertinentes liées directement au site web, à ses produits, services ou contenus. Ne fournissez pas d'informations ou de liens non pertinents ou hors sujet.
      
      Visez à fournir des réponses claires, précises et concises, tout en assurant la satisfaction et la compréhension du client. Votre objectif ultime est de fournir une expérience client positive et d'améliorer la fidélisation des clients grâce à un service client de haute qualité.
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
}
