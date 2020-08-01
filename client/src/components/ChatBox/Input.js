import React from "react";
import { IoIosRocket } from "react-icons/io";
import { Box, Button, FormControl, Input, Flex } from "@chakra-ui/core";

const InputColumn = ({ message, setMessage, sendMessage }) => {
  console.log(message);
  return (
    // <FormControl className="form">
    //   <Input
    //     width="96%"
    //     className="input"
    //     type="text"
    //     placeholder="Type a message..."
    //     value={message}
    //     onChange={(event) => setMessage(event.target.value)}
    //     onKeyPress={(event) =>
    //       event.key === "Enter" ? sendMessage(event) : null
    //     }
    //   />
    //   <Button className="sendButton" onClick={(event) => sendMessage(event)}>
    //     Send
    //   </Button>
    // </FormControl>
    <Box height="30%" position="relative">
      <Input
        value={message}
        placeholder="Say Hello!"
        className="chatText"
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
  );
};

export default InputColumn;
