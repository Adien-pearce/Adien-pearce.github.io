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
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZRA0PVqzn77BdGAg+ltryxnMpBSl+zPLaizsIGGS57OihUBELTKXh8bllHgU2jdXzzn0vBSF1xe/glEILElyx6OyrWBUIQ5zd8sFuJAUuhM/z1YU2Bhxqvu7mnEYODlOq5O+zYBoGPJPY88p2KwUme8rx3I4+CRZiturqpVITC0mi4PK8aB8GM4nU8tGAMQYfcsLu45ZFDBFYr+ftrVoXCECY3PLEcSYELIHO8diJOQgZaLvt559NEAxPqOPwtmMcBjiP1/PMeS0GI3fH8N2RQAoUXrTp66hVFApGnt/yvmwhBTCG0fPTgjQGHW/A7eSaRQ0PVqzl77BeGQc9ltvyxnUoBSh+zPDaizsIGGS56+mjTxELTKXh8bllHgU1jdT0z3wvBSJ1xe/glEILElyx6OyrWRUIRJve8sFuJAUug8/z1oU2Bhxqvu3mnEYODlOq5O+zYRsGPJPY88p3KgUme8rx3I4+CRVht+rqpVMSC0mh4PK8aiAFM4nU8tGAMQYfccPu45ZFDBFYr+ftrVwWCECY3PLEcSYGK4DN8tiIOQgZZ7zs56BODwxPpuPxtmQcBjiP1/PMeywGI3fH8N+RQAoUXrTp66hWEwlGnt/yv2wiBDCG0fPTgzQHHG/A7eSaSw0PVqzl77BeGQc9ltrzxnUoBSh9y/HajDsIF2W56+mjUREKTKPi8blnHgU1jdTy0HwvBSJ0xe/glEQKElux6eyrWRUJQ5vd88FwJAQug8/z1oU3Bhxqvu3mnEcND1Sp5e+zYRsGOpPX88p3KgUmecnw3Y4/CBVht+rqpVMSC0mh4PK8aiAFM4nU8tGAMQYfccLv45dGCxFYrufur1sXCECY3PLEcSYGK4DN8tiIOQgZZ7vt56BODwxPpuPxtmQdBTiP1/PMeywGI3bH8d+RQQkUXrTp66hWEwlGnt/yv2wiBDCG0fPTgzQHHG3A7eSaSw0PVqzl77BeGQc9ltrzxnUoBSh9y/HajDwIF2S56+mjUREKTKPi8blnHwU1jdTy0H4wBSF0xe/glEQKElux5+2sWBUJQ5vd88FwJAUtg87y1oY4Bhxqvu3mnEcND1Op5e+zYRsGOpLX88p3LAUlecnw3Y8+CBVht+rqpVMSC0mh4PK8aiAFM4nU8tGAMQYfccLv45dGDRBYrufur1sXCECX2/PEcicFKoDN8tiKOQgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQsUXbPq66hWEwlGnt/yv2wiBDCG0fPTgzUGHG3A7eSaSw0PVqzl77BeGQc9lNryxnUoBSh9y/HajDwIF2S56+mjUhEKTKPi8blnHwU1jdTy0H4wBSF0xe/glEQKElux5+2sWhQJQ5vd88FwJAUtg87y1oY4Bhxqvu3mnEcND1Op5e+zYRsGOpLX88p3LAUlecnw3Y8+CBVht+rqpVMSC0mh4PK8aiAFMojT89KAMQYfccLv45dGDRBYrufur1wWCECX2/PEcicFKoDN8tiKOQgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQsUXbPq66hWFAlFnt/yv2wiBDCG0fPTgzUGHG3A7eSaSw0PVKzl77BeGQc9lNryxnUqBSd9y/HajDwIF2S56+mjUhEKTKPi8blnHwU1jdTy0H4wBSF0xe/glEQKElux5+2sWhQJQ5vd88FwJAUtg87y1oY4Bhxqvu3mnEcND1Op5e+zYRsGOpLX88p3LAUlecnw3Y8+CBVht+rqpVMSC0mh4PK8aiAFMojT89KAMQYfccLv45dGDRBXr+fur1wWCECX2/PEcicFKoDN8tiKOQgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQsUXbPq66hWFAlFnt/yv2wiBDCF0fPThDUGHG3A7eSaSw0PVKzl77BeGQc9lNryxnUqBSd9y/HajDwIF2S56+mjUhEKTKPi8blnHwU1jdTy0H4wBSF0xe/glEQKElux5+2sWhQJQ5vd88FwJAUtg87y1oY4Bhxqvu3mnEcND1Op5e+zYRsGOpLX88p3LAUlecnw3Y8+CBVht+rqpVMSC0mh4PK8aiAFMojT89KAMQYfccLv45dG');
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
    const API_KEY = 'TH3_API_KEY'; // Replace with your actual API key when in production
    
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
        
        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Add glitch effect to the new message
        setTimeout(() => {
            messageDiv.style.opacity = Math.random() < 0.1 ? '0.8' : '1';
            setTimeout(() => {
                messageDiv.style.opacity = '1';
            }, 50);
        }, 100);
    }
    
    // Function to show typing indicator
    function showTypingIndicator() {
        chatStatus.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
    }
    
    // Function to hide typing indicator
    function hideTypingIndicator() {
        chatStatus.innerHTML = '';
    }
    
    // Function to get AI response
    async function getAIResponse(userInput) {
        showTypingIndicator();
        
        try {
            const response = await fetch(`${API_URL}?user_input=${encodeURIComponent(userInput)}`);
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response();
            hideTypingIndicator();
            
            return data || 'I apologize, but I am unable to process your request at this time.';
        } catch (error) {
            console.error('Error fetching AI response:', error);
            hideTypingIndicator();
            return 'Connection error. Please try again later.';
        }
    }
    
    // Function to handle sending a message
    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;
        
        // Clear input field
        userInput.value = '';
        
        // Add user message to chat
        addMessage(message, 'YOU');
        
        // Get AI response
        const aiResponse = await getAIResponse(message);
        
        // Add AI response to chat with a slight delay for realism
        setTimeout(() => {
            addMessage(aiResponse, 'SYSTEM');
            
            // Add glitch sound effect
            const audio = new Audio('data:audio/wav;base64,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');
            audio.volume = 0.2;
            audio.play();
        }, 500);
    };
    
    // Add event listener for send button
    sendButton.addEventListener('click', sendMessage);
    
    // Add event listener for Enter key press in input field
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
};
