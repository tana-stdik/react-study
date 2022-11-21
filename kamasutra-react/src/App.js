import React from 'react';
import './App.css';
import Messages from './components/Messages/Messages';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';

const App = () => {
  return (
    <BrowserRouter>
      <div className='grid__wrapper'>
        <Header/>
        <Navbar/>
        <div className='grid__main'>
          <Routes>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/dialogs" element={<Messages/>}></Route>
            <Route path="/news" element={<News/>}></Route>
            <Route path="/music" element={<Music/>}></Route>
            <Route path="/setting" element={<Setting/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
