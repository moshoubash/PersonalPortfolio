import React, { useState } from 'react';

const Navbar = () => {
  const [menuMaxHeight, setMenuMaxHeight] = useState('0px');

  function toggleMenu() {
    setMenuMaxHeight(prevHeight => (prevHeight === '0px' ? '300px' : '0px'));
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <a href='/'>
          <img src='/src/assets/logo.png' alt='Mohammad Shoubash' />
        </a>
      </div>

      <ul id="menu-list" style={{ maxHeight: menuMaxHeight }}>
        <li><a href="/#about">About</a></li>
        <li><a href="/#skills">Skills</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>

      <a href='https://drive.google.com/file/d/1dN1FoVFnYfrikFeRkcADo0ypIIDhAKzg/view?usp=drive_link' className="cv-btn-nav">
        <i className="fa-solid fa-download download-icon"></i> Download CV
      </a>

      <button className="responsive-btn" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;