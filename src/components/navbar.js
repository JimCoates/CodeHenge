import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Menubar } from "primereact/menubar"
import "../styles/navbar.css"
import logo from "../images/Stonehenge1.png"

const Navbar = () => {
  const items = [
    {
      label: "Home",
    },
    {
      label: "Projects",
    },
    {
      label: "Topics",
    },
    {
      label: "About",
    },
  ]

  return (
    <div className="nav">
      <img className="logo" src={logo}></img>
      <Menubar model={items}></Menubar>
    </div>
  )
}

export default Navbar
