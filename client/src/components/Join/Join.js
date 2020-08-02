import React, { useState } from "react"
import { Link } from "react-router-dom"
import { GiSpaceship } from "react-icons/gi"
import "./Join.css"
import { Button } from "@chakra-ui/core"

const Join = () => {
  const [name, setName] = useState("")
  const [room, setRoom] = useState("")

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <GiSpaceship className="join-logo" color="white" size="80" />
        <h1 className="join-heading">Prepare for TakeOff</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
            height="30%"
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
          className="join-link"
        >
          <Button
            className="signin-button mt-20"
            type="submit"
            backgroundColor="#00b280"
          >
            Initiate Liftoff
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Join
