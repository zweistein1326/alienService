import React, { useState, useEffect } from "react";
// import queryString from "query-string";
// import io from 'socket.io-client'
import Header from "../Header/Header";
import "./Chat.css";
import "../ChatBox/ChatBox.css";
import VideoBox from "../VideoBox/VideoBox";
import { Flex, Box } from "@chakra-ui/core";
import InputColumn from "../ChatBox/Input";

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const ENDPOINT = "localhost:5000";
  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});
    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, window.location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  console.log(message, messages);

  return (
    <div>
      <Header room={room} />
      <Flex>
        <VideoBox />
        <Box
          height="80vh"
          width="100%"
          margin="2rem"
          alignItems="space-between"
          justifyContent="center"
          className="outer"
        >
          <Box height="70%" width="100%" className="chat">
            Chat Box
          </Box>
          <InputColumn
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </Box>
      </Flex>
    </div>
  );
};

export default Chat;
