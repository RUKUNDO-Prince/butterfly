import React from 'react'
import logo from '../assets/img/logo.png'
import { Icon } from '@iconify/react';

const Header = () => {
    return ( 
    <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center justify-content-between">

      <a href="/" className="logo"><img src={logo} alt="" className="img-fluid" /></a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <Icon icon="memory:chevron-down" /></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <Icon icon="memory:chevron-right" /></a>
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
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
        <Icon icon="fluent-mdl2:breadcrumb" className='mobile-nav-toggle bi bi-list' />
        {/* <Icon icon="uil:x" className='mobile-nav-toggle bi bi-x' /> */}
      </nav>

    </div>
  </header>
  )
}

export default Header
