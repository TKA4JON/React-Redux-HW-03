import React from 'react';
import Header from './Components/Header/header';
import Layout from './Components/Main/layout';
import Menu from './Components/Menu/menu';

import './App.css'

const App: React.FC = () => {
  

  return (
    
      <div className='wrapper'>
          <Header />
          <div className='content'>
            <Menu />
            <Layout />
          </div>
      </div>
    
  
  )
}

export default App
