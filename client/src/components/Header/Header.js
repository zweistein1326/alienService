import React from "react"
import "./Header.css"
import "../../fonts/Aquire-BW0ox.otf"
import { GiCrackedAlienSkull } from "react-icons/gi"

const Header = ({ room }) => {
  return (
    <div className="App-header">
      <GiCrackedAlienSkull className="logo" size="40" />
      <h1>Alien8</h1>
    </div>
  )
}

export default Header
