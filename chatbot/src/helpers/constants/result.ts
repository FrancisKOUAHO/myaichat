import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

let data1: any = null;
let data2: any = null;

let data1Content: any = null;
let data2Content: any = null;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<{
	[key: string]: any;
}>> => {
	/*  const {req} = context;
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

		// Utilisez les propriétés data1 et data2
		data1Content = data1;
		data2Content = data2;

		console.log("data1Content", data1Content);
		console.log("data2Content", data2Content);

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

export { data1, data2 };
