import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/Stonehenge1.png"

const Navbar = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <h1 className="title is-1 has-text-green"> Codehenge</h1>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-start">
            <a class="navbar-item">Home</a>

            <a class="navbar-item">Projects</a>
            <a class="navbar-item">Topics</a>
            <a class="navbar-item">About</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
