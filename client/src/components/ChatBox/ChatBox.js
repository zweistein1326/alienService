import React, { useState, useEffect } from "react";
import { Box, Button, Input } from "@chakra-ui/core";
import "./ChatBox.css";
import { IoIosRocket } from "react-icons/io";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const ChatBox = () => {
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
    <Box
      height="80%"
      width="100%"
      margin="2rem"
      alignItems="space-between"
      justifyContent="center"
      className="outer"
    >
      <Box height="70%" width="100%" className="chat">
        This is the chat box
      </Box>
      <Box height="30%" position="relative">
        <Input
          value={message}
          placeholder="Say Hello!"
          width="50vw"
          className="chatText"
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        ></Input>
        <Button
          height="32%"
          width="100%"
          position="relative"
          bottom="5px"
          backgroundColor="#00b280"
          className="button"
          // onClick={(event) => setMessage(message)}
        >
          Send
          <IoIosRocket className="logoShip" />
        </Button>
      </Box>
    </Box>
  );
};

export default ChatBox;
