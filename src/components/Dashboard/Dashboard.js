import React from "react";
import "./Dashboard.css";
import { Box } from "@chakra-ui/core";

const Dashboard = () => {
  return (
    <div className="home">
      <Box
        bg="teal"
        width="90%"
        height="85%"
        display="flex"
        alignItems="center"
      >
        <Box
          border="2px solid black"
          height="80%"
          width="40%"
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
        <Box border="2px solid black" height="80%" width="60%" margin="2rem">
          Chat Box
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
