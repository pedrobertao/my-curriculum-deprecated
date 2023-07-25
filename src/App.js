import React, { Component } from 'react';
import './App.css';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Layout from './Containers/Layout/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/about-me" component={About}></Route>
            <Route path="/" component={Profile}></Route>
            <Redirect to="/" />
          </Switch>
        </Layout>
      </BrowserRouter >
    );
  }
}

export default App;
