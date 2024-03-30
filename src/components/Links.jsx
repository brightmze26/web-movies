import React from 'react';
import './links.css'

function Links({ scroll }) {
    const backToTop = () => {
        window.scrollTo(0, 0);
    };
  return (
    <a className={`back-to-top ${scroll > 100 ? 'active' : undefined }`} onClick={backToTop}>
        <ion-icon name="arrow-up-outline"></ion-icon>
    </a>
    
  );
}

export default Links;
