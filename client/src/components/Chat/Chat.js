import React, { useState, useEffect } from "react";
// import queryString from "query-string";
// import io from 'socket.io-client'
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import "./Chat.css";

const Chat = () => {
  return (
    <div>
      <Header />
      <Dashboard />
    </div>
  );
};

export default Chat;
