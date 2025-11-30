import React, { useState, useEffect, useRef } from 'react';

const WebSocketComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const ws = useRef(null);

  useEffect(() => {
    // Connect to your WebSocket server (adjust URL if needed)
    ws.current = new WebSocket('ws://localhost:5000');

    ws.current.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    ws.current.onmessage = (event) => {
      setMessages(prev => [...prev, event.data]);
    };

    ws.current.onclose = () => {
      console.log('WebSocket Client Disconnected');
    };

    // Cleanup on component unmount
    return () => {
      ws.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(input);
      setInput('');
    } else {
      alert('WebSocket not connected.');
    }
  };

  return (
    <div>
      <h2>WebSocket Chat</h2>
      <div style={{ border: '1px solid black', height: '200px', overflowY: 'scroll', padding: '5px' }}>
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default WebSocketComponent;
