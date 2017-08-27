const FACEBOOK_ACCESS_TOKEN = 'EAAEwTZCgjnLIBAIZCXTZCvGPi4cWKheIAf5IATHh518ltKK3GY4ViNYum8tiajCZA361U8O0FQJnbAZBIiZCQqzB7cqLridcb2FHURIcWZCZAp5j2tNRyWTofNSnUXamTRHjZBbS6u5ZCPtu6OThYK5QcvfQeaXjUMet9uJuMwD8Fe5QZDZD';

const request = require('request');

module.exports = (event) => {
    const senderId = event.sender.id;
    const message = event.message.text;

    var welcomeMessage = 'Welcome to Ask Toni!';
    
    sendMessage(senderId, welcomeMessage);
};

const sendMessage = (senderId, text) => {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: FACEBOOK_ACCESS_TOKEN },
        method: 'POST',
        json: {
            recipient: { id: senderId },
            message: { text }
        }
    });
}