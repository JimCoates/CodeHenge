import React from "react"

const Navbar = () => {
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <h1 className="title is-1 has-text-green"> Codehenge</h1>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Projects</a>
            <a className="navbar-item">Topics</a>
            <a className="navbar-item">About</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
