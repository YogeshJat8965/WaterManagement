import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { UpdateStatus } from '@/sclice';
const WebSocketButton = () => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);

    const dispatch = useDispatch()

    useEffect(() => {
        if (socket) {
            socket.addEventListener('open', (event) => {
                console.log('WebSocket connection opened');
            });

            socket.addEventListener('message', (event) => {
                setMessages((prevMessages) => [...prevMessages, event.data]);
                console.log('Message from server ', event.data);
                dispatch(UpdateStatus(event.data))
            });

            socket.addEventListener('close', (event) => {
                console.log('WebSocket connection closed');
            });

            return () => {
                socket.close();
            };
        }
    }, [socket]);

    const startConnection = () => {
        if (!socket || socket.readyState === WebSocket.CLOSED) {
            const newSocket = new WebSocket('ws://localhost:3002');
            setSocket(newSocket);
            console.log('WebSocket connection started');
        } else {
            console.log('WebSocket connection is already open');
        }
    };
    let l = useSelector(state => state.data)

    return (
        <div>
            <button onClick={startConnection}>Start Connection</button>
            {/* <div>
                <h3>Messages:</h3>
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}>{message}</li>
                    ))}
                </ul>
            </div> */}
            {
              
              <li>{l}</li>
            }
        </div>
    );
};

export default WebSocketButton;