import React from "react";
import { Box } from "@chakra-ui/core";

const VideoBox = () => {
  return (
    <Box
      height="80vh"
      width="80%"
      margin="2rem"
      alignItems="space-between"
      justifyContent="center"
      backgroundColor="#f2f5f2"
      borderColor="green"
    >
      <Box
        border="2px solid black"
        height="90%"
        width="100%"
        marginBottom="0"
        position="relative"
      >
        User image goes here
        <Box
          border="2px solid black"
          height="28%"
          width="40%"
          bottom="7px"
          right="2"
          position="absolute"
        >
          User2 image goes here
        </Box>
      </Box>
      <Box
        border="2px solid black"
        height="10%"
        width="100%"
        position="relative"
      >
        Option buttons go here
      </Box>
    </Box>
  );
};

export default VideoBox;
