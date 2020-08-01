import React from "react";
import "./Dashboard.css";
import { Box, Flex } from "@chakra-ui/core";
import ChatBox from "../ChatBox/ChatBox";

const Dashboard = () => {
  return (
    <div className="home">
      <Flex bg="teal" width="100%" height="85%" alignItems="center">
        <Box
          border="2px solid black"
          height="80%"
          width="60%"
          margin="2rem"
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
        <ChatBox />
      </Flex>
    </div>
  );
};

export default Dashboard;
