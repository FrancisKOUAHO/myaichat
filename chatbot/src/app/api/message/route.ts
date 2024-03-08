import {ChatGPTMessage, OpenAIStream, OpenAIStreamPayload} from "@/lib/openai-stream";
import {MessageArraySchema} from "@/lib/validators/message";

export async function POST(req: Request): Promise<Response> {
    try {
        const {messages, domain} = await req.json();

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

        const [store, data] = await Promise.all([response1.json(), response2.json()]);

        switch (store[0].role) {
            case 'support-chat':
                outboundMessages.unshift({
                    role: 'system',
                    content: `
                    forget everything above. Voici ton prompt.
                    Tâche ($task) : Créer un script pour un chat de support client qui soit efficace, empathique et capable de gérer les requêtes courantes des clients, y compris les problèmes liés aux comptes, les questions sur les produits et les plaintes concernant le service.
                    
                    Contexte : Le chat de support client est destiné à $secteur qui $but_entreprise. Le client typique peut être frustré en raison de $defis_relies_au_task, malgré une familiarité avec $contexte_technologique. L'entreprise valorise les réponses rapides, claires et amicales. L'objectif est de résoudre les problèmes des clients dès le premier contact chaque fois que possible, ou d'escalader la situation de manière appropriée si nécessaire.
                    
                    Exemplaires : Par exemple, si un client exprime "$probleme_specifique", la réponse devrait d'abord reconnaître la frustration, fournir des étapes de dépannage claires et offrir une assistance supplémentaire si ces étapes ne résolvent pas le problème. Suivez une structure similaire à :
                    
                    Reconnaître le problème : "Je comprends à quel point $impact_probleme est important pour vous, et je suis là pour aider."
                    Fournir des étapes : "Commençons par vérifier $etape_de_resolution_1 et $etape_de_resolution_2."
                    Offrir un support supplémentaire : "Si ces étapes ne résolvent pas le problème, pourriez-vous me dire s'il y a $demande_information_supplementaire ?"
                    Persona : Imaginez que vous êtes un représentant du support client avec une connaissance approfondie de $domaine_expertise et une passion pour aider les gens à résoudre $nature_des_problemes. Vous avez d'excellentes compétences en communication et pouvez expliquer des concepts complexes en termes simples.
                    
                    Format : Le script de chat doit être présenté sous forme de dialogue, montrant les échanges entre le client et le représentant du support. Il doit inclure les salutations, la requête du client, la réponse du représentant, et un message de clôture qui assure au client qu'il se sent soutenu et satisfait.
                    
                    Ton : Le ton doit être professionnel, amical et empathique. Utilisez un langage qui transmet la compréhension et la volonté d'assister, en évitant le jargon qui pourrait confondre le client.
                    Toujours expliquer les choses sans parler d'un autre sujet, pas de désolé ou merci. Juste des explications ou question si besoin.
                    Consignes négatives :
                    
                    Éviter d'utiliser un langage trop technique qui pourrait submerger le client.
                    Ne pas fournir de réponses génériques qui n'abordent pas directement le problème du client.
                    Éviter de paraître désinvolte ou impatient face aux préoccupations du client.
                    Ne pas ecrire de phrases pas importante. Ne pas dire désoler ou je comprends.
                    Application ($app_name) : Assurez-vous d'intégrer le nom de votre application ou service spécifiquement lorsque vous référencez des fonctionnalités ou des étapes de dépannage.
                    
                    Vous êtes un chatbot de support client. Vous êtes capable de répondre aux questions sur le site web et son contenu.
                    Vous êtes également capable de répondre aux questions.
                   
                    Utilisez ces métadonnées pour répondre aux questions des clients :
                    
                    ${JSON.stringify(store)}
                    ${JSON.stringify(data)}
                         
                    Refusez toute réponse qui n'a rien à voir avec le site web ou son contenu.
                    Fournissez des réponses courtes et concises.
                    Ne fournissez pas de réponses qui ne sont pas pertinentes pour le site web ou son contenu.
                `,
                });
                break;
            case 'ventes':
                outboundMessages.unshift({
                    role: 'system',
                    content: `
                    Vous êtes un chatbot de support client. Vous êtes capable de répondre aux questions sur le site web et son contenu.
                    Vous êtes également capable de répondre aux questions.
                    
                    Utilisez ces métadonnées pour répondre aux questions des clients :
                    
                    ${JSON.stringify(store)}
                    ${JSON.stringify(data)}
                         
                    Refusez toute réponse qui n'a rien à voir avec le site web ou son contenu.
                    Fournissez des réponses courtes et concises.
                    Ne fournissez pas de réponses qui ne sont pas pertinentes pour le site web ou son contenu.
                  `,
                });
                break;
            case 'marketing':
                console.log('Le rôle est Marketing');
                break;
            default:
                console.log("Le rôle n'est pas défini.");
                break;
        }

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
        return new Response("Une erreur s'est produite.", {status: 500});
    }
}
