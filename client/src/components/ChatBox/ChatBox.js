import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/core";
import "./ChatBox.css";
import InputColumn from "./Input";
import Messages from "../Messages/Messages";

let socket;

const ChatBox = (props) => {
  return (
    <Box
      height="80vh"
      width="100%"
      margin="2rem"
      alignItems="space-between"
      justifyContent="center"
      className="outer"
    >
      <Box height="70%" width="100%" className="chat">
        <Messages messages={props.messages} name={props.name} />
      </Box>
      <InputColumn
        message={props.message}
        setMessage={props.setMessage}
        sendMessage={props.sendMessage}
      />
    </Box>
  );
};

export default ChatBox;
