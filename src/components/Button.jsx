import React from 'react';
import './button.css';

function Button({icon, name, color = '#ffffff' , bgColor ='#f30000' }) {
  return (
    <a href="#" className="mainBtn" style={{color: color, background: bgColor}}>
       {icon} {name}
    </a>
  );
}

export default Button;
