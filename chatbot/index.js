function initializeChatbox(containerId) {
	// Création des éléments HTML du chatbot
	var chatboxContainer = document.getElementById(containerId);
	var chatbox = document.createElement('div');
	chatbox.classList.add('chatbox');

	// Ajout du contenu du chatbot
	chatbox.innerHTML = `
				<style>
				* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 100%;
    background: #F1F1F1;
}

*, html {
    --primaryGradient: linear-gradient(93.12deg, #581B98 0.52%, #9C1DE7 100%);
    --secondaryGradient: linear-gradient(268.91deg, #581B98 -2.14%, #9C1DE7 99.69%);
    --primaryBoxShadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    --secondaryBoxShadow: 0px -10px 15px rgba(0, 0, 0, 0.1);
    --primary: #581B98;
}

/* CHATBOX
=============== */
.chatbox {
    position: fixed;
    bottom: 30px;
    right: 30px;
}

/* CONTENT IS CLOSE */
.chatbox__support {
    display: flex;
    flex-direction: column;
    background: #eee;
    width: 300px;
    height: 350px;
    z-index: -123456;
    opacity: 0;
    transition: all .5s ease-in-out;
}

/* CONTENT ISOPEN */
.chatbox--active {
    transform: translateY(-40px);
    z-index: 123456;
    opacity: 1;

}

/* BUTTON */
.chatbox__button {
    text-align: right;
}

.send__button {
    padding: 6px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
}


/* HEADER */
.chatbox__header {
    position: sticky;
    top: 0;
    background: orange;
}

/* MESSAGES */
.chatbox__messages {
    margin-top: auto;
    display: flex;
    overflow-y: scroll;
    flex-direction: column-reverse;
}

.messages__item {
    background: orange;
    max-width: 60.6%;
    width: fit-content;
}

.messages__item--operator {
    margin-left: auto;
    background: var(--primary);
}

.messages__item--visitor {
    margin-right: auto;
    background: #eee;
}

/* FOOTER */
.chatbox__footer {
    position: sticky;
    bottom: 0;
}

.chatbox__support {
    background: #f9f9f9;
    height: 450px;
    width: 350px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}

/* HEADER */
.chatbox__header {
    background: var(--primaryGradient);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    box-shadow: var(--primaryBoxShadow);
}

.chatbox__image--header {
    margin-right: 10px;
}

.chatbox__heading--header {
    font-size: 1.2rem;
    color: white;
}

.chatbox__description--header {
    margin-top: 5px;
    font-size: .9rem;
    color: white;
}

/* Messages */
.chatbox__messages {
    padding: 0 20px;
}

.messages__item {
    margin-top: 10px;
    background: #E0E0E0;
    padding: 8px 12px;
    max-width: 70%;
}

.messages__item--visitor,
.messages__item--typing {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background: #eee;
}

.message-item {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.message-container {
    animation: showMessages 0.5s forwards;
    animation-delay: 1s;
}

@keyframes showMessages {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.messages__item--operator {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    background: var(--primary);
    color: white;
}

/* FOOTER */
.chatbox__footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px;
    background: var(--secondaryGradient);
    box-shadow: var(--secondaryBoxShadow);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    margin-top: 20px;
}

.chatbox__footer input {
    width: 80%;
    border: none;
    padding: 10px 10px;
    border-radius: 6px;
    text-align: left;
}

.chatbox__send--footer {
    color: white;
}

.chatbox__button button,
.chatbox__button button:focus,
.chatbox__button button:visited {
    padding: 10px;
    background: white;
    border: none;
    outline: none;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.loader {
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}

.loader-text {
    color: #333;
    font-size: 14px;
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}
</style>
        <div class="chatbox__support">
            <div class="chatbox__header">
                <div class="chatbox__image--header">
                    <img alt="cerf-logo" src="https://i.goopics.net/e3tj02.jpg" style="border-radius: 999px;" width="50">
                </div>
                <div class="chatbox__content--header">
                    <h4 class="chatbox__heading--header">Chat support</h4>
                    <p class="chatbox__description--header">Je m'appelle Myaichat</p>
                </div>
            </div>
            <div class="chatbox__messages">
                <div class="messages__item messages__item--operator">
                    Bonjour, comment puis-je vous aider ?
                </div>
                <div></div>
            </div>
            <div class="chatbox__footer">
                <input placeholder="Ecrire un message..." type="text">
                <button class="chatbox__send--footer send__button">Envoyer</button>
            </div>
        </div>
        <div class="chatbox__button">
            <button><img alt="" src="https://i.goopics.net/hlalw3.jpg" width="50"/></button>
        </div>
    `;

	// Ajout du chatbot au conteneur spécifié
	chatboxContainer.appendChild(chatbox);

	// Code JavaScript du chatbot
	class Chatbox {
		constructor() {
			this.args = {
				openButton: chatbox.querySelector('.chatbox__button'),
				chatBox: chatbox.querySelector('.chatbox__support'),
				sendButton: chatbox.querySelector('.send__button')
			};

			this.state = false;
			this.messages = [];
		}

		display() {
			const {openButton, chatBox, sendButton} = this.args;

			openButton.addEventListener('click', () => this.toggleState(chatBox));

			sendButton.addEventListener('click', () => this.onSendButton(chatBox));

			const node = chatBox.querySelector('input');
			node.addEventListener("keyup", ({key}) => {
				if (key === "Enter") {
					this.onSendButton(chatBox);
				}
			});
		}

		toggleState(chatBox) {
			this.state = !this.state;

			if (this.state) {
				chatBox.classList.add('chatbox--active');
			} else {
				chatBox.classList.remove('chatbox--active');
			}
		}

		onSendButton(chatBox) {
			let textField = chatBox.querySelector('input');
			let text1 = textField.value;
			if (text1 === "") {
				return;
			}

			let userMessage = { role: "user", content: text1 };
			this.messages.push(userMessage);
			this.updateChatText(chatBox);

			let outboundMessages = [...this.messages];
			let chatbotPrompt = `
        
        Vous êtes un chatbot de support client utile intégré sur un site web de support client dédié à l'optimisation des ventes et à l'amélioration de l'expérience client. Je suis là pour répondre à vos questions et vous aider à booster vos ventes grâce à notre chatbot.

				Notre chatbot offre de nombreux avantages pour votre entreprise :
				
				Guide d'Achat Personnalisé: Notre chatbot est capable de comprendre vos clients et de recommander des produits pertinents en fonction de leurs besoins et préférences.
				
				Disponibilité 24/7: Notre chatbot est disponible à tout moment pour aider vos clients, que ce soit le jour ou la nuit.
				
				Gestion des commandes: En plus de gérer les commandes, notre chatbot interagit avec les clients en fournissant des informations de commande en temps réel et en facilitant les retours.
				
				Analyse de données: Notre chatbot collecte et analyse les données pour améliorer en permanence l'expérience utilisateur, vous aidant ainsi à optimiser vos ventes.
				
			Utilisez ces métadonnées du service de support client pour répondre aux questions des clients :
        
        Essayez n'importe quel plan gratuitement pendant 14 jours. Annulez à tout moment.

Starter
€39 /mois
Commencer 14 jours d'essai gratuit

500 réponses/mois

1 000 pages web stockées

2 Chatbots

Support standard

Formation à l'IA

Pro
€99 /mois
Commencer 14 jours d'essai gratuit

3,000 réponses/mois

15,000 pages web stockées

10 chatbots

Membres illimités

Support prioritaire

Formation à l'IA

Growth
€79 /mois
Commencer 14 jours d'essai gratuit

1,500 réponses/mois

5 000 pages web stockées

5 Chatbots

Membres illimités

Support prioritaire

Formation à l'IA
				
				Si vous souhaitez en savoir plus sur la manière dont notre chatbot peut vous aider à augmenter vos ventes et à offrir une expérience client personnalisée, n'hésitez pas à poser vos questions. Je suis là pour vous fournir des réponses claires et concises.
        `;

			outboundMessages.unshift({
				role: 'system',
				content: chatbotPrompt,
			});

			const apiKey = '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';

			let loader = document.createElement('div');
			loader.className = 'loader';

			let loaderText = document.createElement('div');
			loaderText.className = 'loader-text';
			loaderText.textContent = 'Chargement...';

			let chatboxMessages = chatBox.querySelector('.chatbox__messages');
			let emptyDiv = chatboxMessages.querySelector('div');
			chatboxMessages.insertBefore(loader, emptyDiv.nextSibling);

			fetch('https://api.openai.com/v1/chat/completions', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${apiKey}`
				},
				body: JSON.stringify({
					model: "gpt-3.5-turbo",
					messages: outboundMessages
				}),
			})
				.then(response => response.json())
				.then(data => {
					let botMessage = { role: "assistant", content: data.choices[0].message.content };
					this.messages.push(botMessage);
					this.updateChatText(chatBox);

					loader.remove();
					textField.value = '';
				})
				.catch((error) => {
					console.error('Error:', error);
					this.updateChatText(chatBox);

					loader.remove();
					textField.value = '';
				});

			textField.value = '';
		}

		updateChatText(chatBox) {
			let html = '';
			this.messages.slice().reverse().forEach(function (item) {
				if (item.role === "assistant") {
					html += '<div class="messages__item messages__item--visitor">' + item.content + '</div>';
				} else {
					html += '<div class="messages__item messages__item--operator">' + item.content + '</div>';
				}
			});

			const chatMessage = chatBox.querySelector('.chatbox__messages');
			chatMessage.innerHTML = html;
		}
	}

	const chatboxInstance = new Chatbox();
	chatboxInstance.display();

}