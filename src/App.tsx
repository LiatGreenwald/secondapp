import React, { useState } from 'react';

import './App.css';
import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
import Main from './Components/Layout/Main/Main';
import Menu from './Components/Layout/Menu/Menu';

type Theme = 'light' |'dark';
function App() {
  const[theme,setTheme]=useState<Theme>('light');
  const changeTheme =()=>{
    if(theme==='light'){
      setTheme('dark');
          }
          else{
            setTheme('light');
          }
  }
  return (
    <div className= {`App ${theme}`}>
    <button onClick={changeTheme}>{theme==='dark'?'🌕 ' :'🌚'}</button>
     
      <Header/>
      <Menu/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
