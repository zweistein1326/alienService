import React from "react";
import { Box, Button, Flex, Textarea } from "@chakra-ui/core";

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
      <Box height="60%" width="100%">
        This is the chat box
      </Box>
      <Box height="40%" position="relative">
        <Textarea placeholder="Say Hello" width="50vw"></Textarea>
        <Button
          variantColor="beige "
          color="black"
          height="50%"
          width="100%"
          position="absolute"
          bottom="0"
          left="0"
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatBox;
