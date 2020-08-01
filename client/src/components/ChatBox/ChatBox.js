import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/core";
import "./ChatBox.css";
import Input from "./Input";

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
        Chat Box
      </Box>
      <Input props={props} />
    </Box>
  );
};

export default ChatBox;
