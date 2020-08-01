import React from "react";
import { Box, Button, Flex } from "@chakra-ui/core";

const ChatBox = () => {
  return (
    <Box
      border="2px solid black"
      height="80%"
      width="100%"
      margin="2rem"
      alignItems="space-between"
      justifyContent="center"
    >
      <Box height="80%" width="100%">
        This is the chat box
      </Box>
      <Box height="20%" width="100%">
        <Button color="teal" height="100%" width="100%">
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatBox;
