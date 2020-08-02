import React from "react"
import ReactEmoji from "react-emoji"
import "./Message.css"

const Message = ({ message: { user, text }, name }) => {
  const trimmedName = name.trim().toLowerCase()
  let isSentByCurrentUser = user === trimmedName
  let isSentByAdmin = user === "admin"

  if (isSentByCurrentUser) {
    return (
      <div className="user">
        <p className="userName">{trimmedName}</p>
        <div>
          <p className="usermsg">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    )
  } else if (isSentByAdmin) {
    return (
      <div className="messageContainer">
        <p className="adminText">{ReactEmoji.emojify(text)}</p>
      </div>
    )
  }
  return (
    <div className="other">
      <p className="otherName">{user}</p>
      <div>
        <p className="othermsg">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  )
}

export default Message
