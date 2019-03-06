import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './menu.css';

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        NOTÍCIAS EM DESTAQUE
      </a>

      <a className="menu-item" href="/Brasil">
        NOTÍCIAS DO BRASIL
      </a>

      <a className="menu-item" href="/Eua">
        NOTÍCIAS DO EUA
      </a>

      <a className="menu-item" href="/Argentina">
        NOTÍCIAS DA ARGENTINA
      </a>

      <a className="menu-item" href="/Franca">
        NOTÍCIAS DA FRANÇA
      </a>
    </Menu>
  );
};
