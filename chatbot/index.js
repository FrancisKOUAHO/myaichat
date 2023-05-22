class Chatbox {
	constructor() {
		this.args = {
			openButton: document.querySelector('.chatbox__button'),
			chatBox: document.querySelector('.chatbox__support'),
			sendButton: document.querySelector('.send__button')
		}

		this.state = false;
		this.messages = [];
	}

	display() {
		const {openButton, chatBox, sendButton} = this.args;

		openButton.addEventListener('click', () => this.toggleState(chatBox))

		sendButton.addEventListener('click', () => this.onSendButton(chatBox))

		const node = chatBox.querySelector('input');
		node.addEventListener("keyup", ({key}) => {
			if (key === "Enter") {
				this.onSendButton(chatBox)
			}
		})
	}

	toggleState(chatbox) {
		this.state = !this.state;

		// show or hides the box
		if (this.state) {
			chatbox.classList.add('chatbox--active')
		} else {
			chatbox.classList.remove('chatbox--active')
		}
	}

	onSendButton(chatbox) {
		let textField = chatbox.querySelector('input');
		let text1 = textField.value;
		if (text1 === "") {
			return;
		}

		// Ajouter le message de l'utilisateur à `this.messages`
		let userMessage = {role: "user", content: text1};
		this.messages.push(userMessage);

		// Mettre à jour l'affichage du chat pour montrer le message de l'utilisateur
		this.updateChatText(chatbox);

		let outboundMessages = [...this.messages]; // Crée une copie de `this.messages`

		// Ajoutez le message du système au début de `outboundMessages`
		let chatbotPrompt = `
        Vous êtes un chatbot de support client utile intégré sur un site web de location de voitures. Vous êtes capable de répondre aux questions sur le site web et son contenu.
        Vous êtes également capable de répondre aux questions sur les voitures disponibles à la location.
        
        Utilisez ces métadonnées du service de location de voitures pour répondre aux questions des clients :
       
        
        Incluez uniquement les liens au format Markdown.
        Exemple : 'Vous pouvez consulter nos voitures disponibles ici'.
        En dehors des liens, utilisez du texte normal.
        
        Refusez toute réponse qui n'a rien à voir avec le service de location de voitures ou son contenu.
        Fournissez des réponses courtes et concises.
        `; // Votre prompt de chatbot ici

		outboundMessages.unshift({
			role: 'system',
			content: chatbotPrompt,
		});

		// Ajoutez votre clé d'API ici
		const apiKey = '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'; // Votre clé d'API OpenAI ici

		// Création de l'élément div avec la classe "loader"
		let loader = document.createElement('div');
		loader.className = 'loader';

// Création de l'élément div avec la classe "loader-text"
		let loaderText = document.createElement('div');
		loaderText.className = 'loader-text';
		loaderText.textContent = 'Chargement...';

// Ajout de l'élément loaderText à l'intérieur de l'élément loader
		loader.appendChild(loaderText);

// Sélection de l'élément parent
		let chatboxMessages = document.querySelector('.chatbox__messages');

// Sélection de la div vide dans chatboxMessages
		let emptyDiv = chatboxMessages.querySelector('div');

// Insertion de l'élément loader après emptyDiv
		chatboxMessages.insertBefore(loader, emptyDiv.nextSibling);

		fetch('https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				model: "gpt-3.5-turbo",  // Votre modèle OpenAI ici
				messages: outboundMessages
			}),
		})
			.then(response => response.json())
			.then(data => {
				// Ajouter le message de l'assistant à `this.messages`
				let botMessage = {role: "assistant", content: data.choices[0].message.content};
				this.messages.push(botMessage);

				// Mettre à jour l'affichage du chat pour montrer le message de l'assistant
				this.updateChatText(chatbox);

				// Supprimez l'indicateur de chargement
				loader.remove();
				textField.value = '';
			})
			.catch((error) => {
				console.error('Error:', error);
				this.updateChatText(chatbox);

				// Supprimez l'indicateur de chargement en cas d'erreur
				loader.remove();
				textField.value = '';
			});

		// Ici, nous réinitialisons la valeur de l'input à une chaîne vide
		textField.value = '';
	}


	updateChatText(chatbox) {
		let html = '';
		this.messages.slice().reverse().forEach(function (item, index) {
			if (item.role === "assistant") {
				html += '<div class="messages__item messages__item--visitor">' + item.content + '</div>'
			} else {
				html += '<div class="messages__item messages__item--operator">' + item.content + '</div>'
			}
		});

		const chatmessage = chatbox.querySelector('.chatbox__messages');
		chatmessage.innerHTML = html;
	}

	showMessage() {
		document.querySelector("loader");
		console.log(document.querySelector("loader"))
	}
}


const chatbox = new Chatbox();
chatbox.display();




