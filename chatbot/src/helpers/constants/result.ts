import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

let data1: any = null;
let data2: any = null;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<{
	[key: string]: any;
}>> => {
	/*const {req} = context;
	const url = req?.headers?.referer ?? '';

	if (!url) {
		// Gérer le cas où l'URL est manquante ou non définie
		throw new Error('Missing URL');
	}

	const {hostname} = new URL(url);
	const domain = hostname.replace("www.", "").split(".")[0];*/

	try {
		const response1 = await fetch(`http://127.0.0.1:8000/api/stores/localhost/stores`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response1.ok) {
			data1 = await response1.json();

			const response2 = await fetch(`http://127.0.0.1:8000/api/products/localhost`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response2.ok) {
				data2 = await response2.json();
			}
		}

		return {
			props: {
				data1,
				data2,
			},
		};
	} catch (error) {
		console.error('Error:', error);
		throw new Error('Internal Server Error');
	}
};

// Exécutez getServerSideProps pour mettre à jour les valeurs de data1 et data2
getServerSideProps({} as GetServerSidePropsContext);

// Utilisez les propriétés data1 et data2
const data1Content = data1;
const data2Content = data2;

console.log("data1Content", data1Content);
console.log("data2Content", data2Content);

export const chatbotPrompt = `
Vous êtes un chatbot de support client. Votre principale fonction est de répondre de manière efficace et précise aux questions des clients concernant le site web et son contenu. Vous avez également la capacité de fournir des liens pertinents extraits directement des métadonnées fournies.

Les métadonnées sont structurées comme suit :

${data1Content}
${data2Content}

Exemple : "Vous pouvez consulter nos livres [ici] (https://www.example.com/books)".
En dehors des liens, utilisez du texte normal.

Examinez attentivement ces métadonnées pour élaborer vos réponses. Si une question ou une requête correspond à un contenu spécifique du site que vous pouvez identifier dans les métadonnées fournies, n'hésitez pas à fournir l'URL appropriée. Ces URL doivent être extraites directement des métadonnées et non générées par vos soins.

Assurez-vous de ne répondre qu'aux questions pertinentes liées directement au site web, à ses produits, services ou contenus. Ne fournissez pas d'informations ou de liens non pertinents ou hors sujet.

Visez à fournir des réponses claires, précises et concises, tout en assurant la satisfaction et la compréhension du client. Votre objectif ultime est de fournir une expérience client positive et d'améliorer la fidélisation des clients grâce à un service client de haute qualité.
`;
