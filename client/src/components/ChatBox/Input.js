import React from "react"
import { IoIosRocket } from "react-icons/io"
import { Box, Button, FormControl, Input, Flex } from "@chakra-ui/core"
import "./ChatBox.css"

const InputColumn = ({ message, setMessage, sendMessage }) => {
  return (
    <Box height="15%" position="relative">
      <Input
        value={message}
        placeholder="Say Hello!"
        id="chatText"
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
        minHeight="50%"
        width="96%"
      />
      <Button
        minHeight="50%"
        width="100%"
        position="relative"
        bottom="5px"
        backgroundColor="#00b280"
        className="button"
        onClick={(event) => sendMessage(event)}
      >
        Send
        <IoIosRocket className="logoShip" />
      </Button>
    </Box>
  )
}

export default InputColumn
