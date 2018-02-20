import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Containers/Profile/Profile';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Containers/Layout/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Profile />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
