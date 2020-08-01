import React from "react"
import { Box, Button, Flex, Textarea } from "@chakra-ui/core"
import "./ChatBox.css"
import { IoIosRocket } from "react-icons/io"

const ChatBox = () => {
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
        <Textarea
          placeholder="Say Hello!"
          width="50vw"
          className="chatText"
        ></Textarea>
        <Button
          variantColor="beige "
          color="white"
          height="32%"
          width="100%"
          position="relative"
          bottom="5px"
          backgroundColor="#00b280"
          className="button"
        >
          Send
          <IoIosRocket className="logoShip" />
        </Button>
      </Box>
    </Box>
  )
}

export default ChatBox
