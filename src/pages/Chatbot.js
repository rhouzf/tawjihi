import React, { useState } from 'react';
import '../styles/Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [searchType, setSearchType] = useState('ecole');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;

    // Ajouter le message de l'utilisateur
    const userMessage = {
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages([...messages, userMessage]);
    setInputMessage('');

    // Simuler une réponse du bot
    setTimeout(() => {
      const botMessage = {
        text: "Je suis en train d'analyser votre question. Veuillez patienter...",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <div className="chatbot-container modern-chatbot">
      <div className="chat-header">
        <h2>TawjihiBot Assistant</h2>
        <p>Posez vos questions sur l'orientation scolaire</p>
      </div>

      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-bubble ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            <div className="message-content">
              <p>{message.text}</p>
              <span className="message-timestamp">{message.timestamp}</span>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="chat-input-form">
        <select
          className="chat-select"
          value={searchType}
          onChange={e => setSearchType(e.target.value)}
        >
          <option value="ecole">Recherche par école</option>
          <option value="ecole_filiere">Recherche par école et filière</option>
          <option value="limite">Recherche par limite</option>
          <option value="conseil">Conseil</option>
        </select>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Posez votre question..."
          className="chat-input"
        />
        <button type="submit" className="send-button modern-btn">
          <i className="fas fa-paper-plane"></i> Envoyer
        </button>
      </form>
    </div>
  );
};

export default Chatbot; 