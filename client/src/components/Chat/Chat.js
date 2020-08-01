import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import "./Chat.css";

let socket;

const Chat = () => {
  return (
    <div>
      <Header />
      <Dashboard />
      {/* <div className="outerContainer">
        <div className="innerContainer">
          <input
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={(event) =>
              event.key === "Enter" ? sendMessage(event) : null
            }
          />
        </div>
      </div> */}
    </div>
  );
};

export default Chat;
