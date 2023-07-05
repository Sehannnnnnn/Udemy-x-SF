import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // 서버의 URL에 맞게 변경

function Chat() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      //훅 내의 cleanup function
      //컴포넌트가 언마운트될때 실행된다.
      //의존성 배열이 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출됩니다.
      //의존성 배열에 특정 값이 있는 경우 언마운트 될 때, 지정한 값이 바뀌기 직전에도 호출이 된다.
      socket.off("message", handleMessage);
    };
  }, []);

  const handleMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleMessageSend = () => {
    if (inputValue.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString();
      socket.emit("message", {
        username,
        content: inputValue,
        time: currentTime,
      });
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="사용자 이름"
      />

      <h2>채팅</h2>
      <div>
        {messages.map((message, index) => (
          <p key={index} style={{ color: message.color }}>
            {message.username}: {message.content} - {message.time}
          </p>
        ))}
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleMessageSend}>전송</button>
    </div>
  );
}

export default Chat;
