import React from "react";
import { Box } from "@chakra-ui/core";

const VideoBox = () => {
  return (
    <Box
      height="80%"
      width="80%"
      margin="2rem"
      alignItems="space-between"
      justifyContent="center"
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
          height="40%"
          width="45%"
          bottom="0"
          right="0"
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
