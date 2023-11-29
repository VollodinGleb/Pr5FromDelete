// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import SideBar from './components/sidebar';
import './App.css';


const menuList = [
  { text: 'Menu 1', url: 'https://example.com/menu1' },
  { text: 'Menu 2', url: 'https://example.com/menu2' },
  { text: 'Menu 3' },
  { text: 'Menu 4', url: 'https://example.com/menu4' },
];

function App() {
  return (
    <div className="app">
      <Header title="H`eader" />
      <div className="main-content">
        <SideBar title="My Sidebar" menuList={menuList} />
        <Content title="Content" />
      </div>
      <Footer title="Footer" />
    </div>
  );
}

export default App;

