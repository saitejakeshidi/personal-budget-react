import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Menu from './Menu/Menu';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import PieChart from './PieChart/PieChart';
function App() {
  return (
    <Router >
      <Menu></Menu>
      <Header></Header>
      <div className="mainContainer"></div>
      <Switch>
        <Route path="/about">
        <AboutPage/>
        </Route>
        <Route path="/login">
        <LoginPage/>
        </Route>
        <Route path="/">
        <HomePage/>
        </Route>
      </Switch>
      <PieChart></PieChart>
      <Footer></Footer>
      
    </Router>
  );
}

export default App;
