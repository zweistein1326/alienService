import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Header from "../Header/Header";
import "./Chat.css";
import "../ChatBox/ChatBox.css";
import VideoBox from "../VideoBox/VideoBox";
import { Flex, Box } from "@chakra-ui/core";
import ChatBox from "../ChatBox/ChatBox";

let socket;

const Chat = () => {
  const [name, setName] = useState(""); //coming from join page
  const [room, setRoom] = useState(""); //j0in page
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const ENDPOINT = "https://alien8.herokuapp.com/";
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
    socket.on(
      "roomData",
      ({ users }) => {
        setUsers(users);
      },
      []
    );
  }, [messages]);

  navigator.getUserMedia(
    { video: true, audio: true },
    (stream) => {
      const localVideo = document.getElementById("local-video");
      // console.log(localVideo);
      if (localVideo) {
        localVideo.srcObject = stream;
      }
    },
    (error) => {
      console.warn(error.message);
    }
  );

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const sendVideo = (event) => {
    event.preventDefault();
    socket.emit("video");
  };
  console.log(message, messages);

  return (
    <div className="chat-home">
      <Header room={room} />
      <Flex>
        <VideoBox />
        <ChatBox
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          messages={messages}
          name={name}
          users={users}
        />
      </Flex>
    </div>
  );
};

export default Chat;
