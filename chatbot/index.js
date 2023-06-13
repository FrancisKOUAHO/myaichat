function initializeChatbox(containerId) {
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
    --primaryGradient: linear-gradient(93.12deg, #000000 0.52%, #000000 100%);
    --secondaryGradient: linear-gradient(93.12deg, #000000 0.52%, #000000 100%);
    --primaryBoxShadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    --secondaryBoxShadow: 0px -10px 15px rgba(0, 0, 0, 0.1);
    --primary: #000000;
}

/* CHATBOX
=============== */
.chatbox {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 100000000000;
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

.messages__loading {
	background: transparent;
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

/* Loader */
.loader-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
}

.loader-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 2px;
  background-color: #000;
  border-radius: 50%;
  animation: loaderAnimation 1s infinite ease-in-out;
}

@keyframes loaderAnimation {
  0%, 100% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1); opacity: 1; }
}

.loader-text {
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #000;
}

anim-typewriter {
    animation: typewriter 1s steps(40) 1 normal both;
}

@keyframes typewriter {
    from {
        width: 0;
    }
    to {
        width: 100%;
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
            <div class="chatbox__messages"></div>
            <div class="chatbox__footer">
                <input placeholder="Ecrire un message..." type="text">
                <button class="chatbox__send--footer send__button">Envoyer</button>
            </div>
        </div>
        <div class="chatbox__button">
            <button><img alt="" src="https://i.goopics.net/hllj5f.jpg" width="50"/></button>
        </div>
    `;
	// Ajout du chatbot au conteneur spécifié
	chatboxContainer.appendChild(chatbox);

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

		async fetchChatbotPrompt() {

			const url = window.location.href;
			const hostname = new URL(url).hostname;
			const domain = hostname.replace("www.", "").split(".")[0];


			try {
				let response = await fetch(`https://api.myaichat.io/api/stores/${domain}/stores`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				});
				if (response.ok) {
					let data = await response.json();
					return `
								Vous êtes un chatbot de support client. Vous êtes capable de répondre aux questions sur le site web et son contenu.
								Vous êtes également capable de répondre aux questions.
								
								Utilisez ces métadonnées pour répondre aux questions des clients :
								
								${data[0].content}
							 
								Refusez toute réponse qui n'a rien à voir avec sur le site web ou son contenu.
								Fournissez des réponses courtes et concises.
				`;
				}
			} catch (error) {
				console.error('Error:', error);
			}
		}

		display() {
			const {openButton, chatBox, sendButton} = this.args;

			openButton.addEventListener('click', () => this.toggleState(chatBox));

			sendButton.addEventListener('click', () => this.onSendButton(chatBox));

			const node = chatBox.querySelector('input');
			node.addEventListener('keyup', ({key}) => {
				if (key === 'Enter') {
					this.onSendButton(chatBox);
				}
			});

			// Afficher le premier message
			this.updateChatText(chatBox);
		}

		toggleState(chatBox) {
			this.state = !this.state;

			if (this.state) {
				chatBox.classList.add('chatbox--active');
			} else {
				chatBox.classList.remove('chatbox--active');
			}
		}

		async onSendButton(chatBox) {
			let textField = chatBox.querySelector('input');
			let text1 = textField.value;
			if (text1 === '') {
				return;
			}

			let userMessage = { role: 'user', content: text1 };
			this.messages.push(userMessage);
			this.updateChatText(chatBox);

			let outboundMessages = [...this.messages];

			// Afficher le message de chargement
			let loadingMessage = document.createElement('div');
			loadingMessage.className = 'messages__item messages__item--loading messages__loading';

			let loaderContainer = document.createElement('div');
			loaderContainer.className = 'loader-container';

			let loader = document.createElement('div');
			loader.className = 'loader';

			for (let i = 0; i < 3; i++) {
				let dot = document.createElement('div');
				dot.className = 'loader-dot';
				loader.appendChild(dot);
			}

			loaderContainer.appendChild(loader);
			loadingMessage.appendChild(loaderContainer);

// Insérer le message de chargement après le dernier message de l'utilisateur
			let userMessageItems = chatBox.querySelectorAll('.messages__item.messages__item--visitor');
			if (userMessageItems.length > 0) {
				let lastUserMessageItem = userMessageItems[userMessageItems.length - 1];
				lastUserMessageItem.insertAdjacentElement('afterend', loadingMessage);
			} else {
				chatBox.querySelector('.chatbox__messages').appendChild(loadingMessage);
			}


			let chatboxMessages = chatBox.querySelector('.chatbox__messages');
			chatboxMessages.insertBefore(loadingMessage, chatboxMessages.firstChild);

			this.fetchChatbotPrompt().then(async (chatbotPrompt) => {
				outboundMessages.unshift({
					role: 'system',
					content: chatbotPrompt,
				});

				const apiKey = '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';

				try {
					const response = await fetch('https://api.openai.com/v1/chat/completions', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${apiKey}`,
						},
						body: JSON.stringify({
							model: 'gpt-3.5-turbo',
							messages: outboundMessages,
						}),
					});

					if (response.ok) {
						const data = await response.json();
						let botMessage = { role: 'assistant', content: data.choices[0].message.content };
						this.messages.push(botMessage);
						this.updateChatText(chatBox);
					} else {
						console.error('Error:', response.status);
						this.updateChatText(chatBox);
					}
				} catch (error) {
					console.error('Error:', error);
					this.updateChatText(chatBox);
				} finally {
					// Supprimer le message de chargement
					chatboxMessages.removeChild(loadingMessage);
					textField.value = '';
				}
			});

			// Effacer le champ de texte quel que soit le résultat de la requête fetch
			textField.value = '';
		}

		updateChatText(chatBox) {
			let html = '';
			this.messages.slice().reverse().forEach((item, index) => {
				let messageClass = item.role === 'assistant' ? 'messages__item messages__item--visitor' : 'messages__item messages__item--operator';
				let animationDelay = (index + 1) * 0.1 + 's'; // Délai d'animation

				let messageContent = item.content;
				if (item.role === 'assistant') {
					messageContent = '<span class="anim-typewriter" style="animation-delay: ' + animationDelay + '">' + messageContent + '</span>';
				}

				html += '<div class="' + messageClass + '">' + messageContent + '</div>';
			});

			const chatMessage = chatBox.querySelector('.chatbox__messages');
			chatMessage.innerHTML = html;
		}
	}

	const chatboxInstance = new Chatbox();

	// Ajoutez le message de bienvenue à this.messages
	const welcomeMessage = {
		role: 'assistant',
		content: 'Bienvenue ! Comment puis-je vous aider ?',
	};
	chatboxInstance.messages.push(welcomeMessage);

	chatboxInstance.display();
}
