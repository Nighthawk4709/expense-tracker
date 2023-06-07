import React from 'react';
import Content from './body/content';
import Navbar from './footer/NavBar';
import Header from './header/Header';

const App = () => {
  return (
    <div>
      <Header/>
      <Content/>
      <Navbar/>
    </div>
  );
};

export default App;