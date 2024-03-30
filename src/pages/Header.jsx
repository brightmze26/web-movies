import React from 'react';
import './header.css';
import NavListItem from '../components/NavListItem';
import navListData from '../data/navListData';
import Search from '../components/Search';
import Button from '../components/Button';


function Header({ scroll }) {
  return (
    <header className={`${scroll > 100 ? 'scrolled' : undefined}`}>
        <a href="/" className="logo">
            Biflix
        </a>
        <ul className="nav">
            {
                navListData.map(nav=> (
                    <NavListItem key={nav._id} nav={nav} />
                ))
            }
        </ul>
        <Search />
        <Button icon={<ion-icon name="person-outline"></ion-icon>} name='Sign in' />
    </header>
  );
}

export default Header;
