import React from 'react';
import Logo from '../images/quell_logos/QUELL-long.svg';

function smoothScroll(element) {
  document.getElementById(element).scrollIntoView({ behavior: 'smooth' });
}

const Header = () => {
  return (
    <header>
      <div id='logo-main-container'>
        <img id='logo-main' src={Logo}></img>
      </div>

      <ul className='header-links'>
        <li>
          <a href='#info'>INFO</a>
        </li>
        <li>
          <a href='#demo'>DEMO</a>
        </li>
        <li>
          <a href='#team'>TEAM</a>
        </li>
        <li>
          <a href='https://github.com/oslabs-beta/Quell' target='_blank'>
            GITHUB
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
