import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Messages from './components/Messages.js';
import Notfound from './components/Notfound.js';
import { Route, Link, Routes } from 'react-router-dom';
import Message from './components/Message.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='menu'>

          <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/messages">Messages</Link> </li>

          </ul>
        </div>
        <div className='App-intro'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='*' element={<Notfound />} />

            <Route path='/messages/:id' element={<Message />} />

          </Routes>
        </div>
      </div>
    );
  }
}
export default App;
