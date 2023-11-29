import React from 'react';
import './style/sidebar.css';
import Menu from './menu';

const SideBar = ({ title, menuList }) => {
  return (
    <div className="sidenav">
      <h2>{title}</h2>
      <Menu list={menuList} />
    </div>
  );
};

export default SideBar;

