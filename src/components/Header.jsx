import React from 'react'
import logo from '../assets/img/logo.png'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const Header = () => {
    return (
      <header id="header" className="fixed-top">
        <div class="nav-container">

          <a href="index.html" className="logo"><img src={logo} alt="logo" className="img-fluid" /></a>
          {/* <h1 class="logo"><a href="index.html">Butterfly</a></h1>  */}

          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a class="nav-link scrollto" href="#about">About</a></li>
              <li><a class="nav-link scrollto" href="#services">Services</a></li>
              <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
              <li><a class="nav-link scrollto" href="#team">Team</a></li>
              <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"><FaChevronDown /></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"><FaChevronRight /></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li>
              <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle">
              <FaBarsStaggered />
            </i>
          </nav>

        </div>
    </header>
  )
}

export default Header
