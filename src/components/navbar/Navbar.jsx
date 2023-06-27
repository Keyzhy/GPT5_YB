import React from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className='gpt5__navbar'>
      <div className='gpt5__navbar-links'>
        <div className='gpt5__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt5__navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt5">What is GPT5?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className='gpt5__navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar