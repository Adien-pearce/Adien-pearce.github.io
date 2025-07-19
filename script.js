document.addEventListener('DOMContentLoaded', () => {
    // Add glitch effect to logo
    const logo = document.querySelector('.logo');
    if (logo) {
        setInterval(() => {
            logo.style.opacity = Math.random() < 0.1 ? '0.5' : '1';
            logo.style.transform = Math.random() < 0.1 ? 'translateX(2px)' : 'none';
            setTimeout(() => {
                logo.style.opacity = '1';
                logo.style.transform = 'none';
            }, 50);
        }, 2000);
    }

    // Initialize AI Chat functionality
    initializeChat();

    // Add hover sound effect to grid items
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const audio = new Audio('data:audio/wav;base64,...'); // shorten for readability
            audio.volume = 0.2;
            audio.play();
        });
    });
});

// Function to initialize AI Chat functionality
function initializeChat() {
    const chatContainer = document.querySelector('.chat-container');
    if (!chatContainer) return;

    const chatMessages = document.querySelector('.chat-messages');
    const userInput = document.getElementById('user-message');
    const sendButton = document.getElementById('send-button');
    const chatStatus = document.getElementById('chat-status');

    // API configuration
    const API_URL = 'https://dynaspark.onrender.com/api/generate_response';
    const API_KEY = 'TH3_API_KEY'; // Replace this with your actual API key in production

    // Function to add a message to the chat
    function addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender === 'YOU' ? 'sent' : 'received'}`;

        const senderSpan = document.createElement('span');
        senderSpan.className = 'message-sender';
        senderSpan.textContent = sender;

        const messagePara = document.createElement('p');
        messagePara.textContent = message;

        messageDiv.appendChild(senderSpan);
        messageDiv.appendChild(messagePara);

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Glitch effect
        setTimeout(() => {
            messageDiv.style.opacity = Math.random() < 0.1 ? '0.8' : '1';
            setTimeout(() => {
                messageDiv.style.opacity = '1';
            }, 50);
        }, 100);
    }

    function showTypingIndicator() {
        chatStatus.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
    }

    function hideTypingIndicator() {
        chatStatus.innerHTML = '';
    }

    // ✅ FIXED: Function to get AI response (text response)
    async function getAIResponse(userInput) {
        showTypingIndicator();

        try {
            const response = await fetch(`${API_URL}?user_input=${encodeURIComponent(userInput)}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${API_KEY}`
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.text(); // Use .json() if API returns JSON
            hideTypingIndicator();

            return data || 'I apologize, but I am unable to process your request at this time.';
        } catch (error) {
            console.error('Error fetching AI response:', error);
            hideTypingIndicator();
            return 'Connection error. Please try again later.';
        }
    }

    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;

        userInput.value = '';
        addMessage(message, 'YOU');

        const aiResponse = await getAIResponse(message);

        setTimeout(() => {
            addMessage(aiResponse, 'SYSTEM');

            const audio = new Audio('data:audio/wav;base64,...'); // shorten for brevity
            audio.volume = 0.2;
            audio.play();
        }, 500);
    }

    sendButton.addEventListener('click', sendMessage);

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}
