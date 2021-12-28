import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';
import Navbar from './Navbar';

const AppRouter = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route exact path="/about" element={<AboutScreen />} />
          <Route exact path='/login' element={<LoginScreen />} />
          <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
      </>
    </Router>
  )
}

export default AppRouter;
