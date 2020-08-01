import React from "react";
import "./Dashboard.css";
import { Box, Flex } from "@chakra-ui/core";
import ChatBox from "../ChatBox/ChatBox";
import VideoBox from "../VideoBox/VideoBox";

const Dashboard = () => {
  return (
    <div className="home">
      <Flex bg="teal" width="100%" height="85%" alignItems="center">
        <VideoBox />
        <ChatBox />
      </Flex>
    </div>
  );
};

export default Dashboard;
