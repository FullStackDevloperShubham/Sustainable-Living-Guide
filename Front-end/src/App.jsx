// import all components
import React from 'react'
import Home from './Components/Home/Home.jsx'
import LearnMore from './Components/LearnMore/LearnMore.jsx'
import LogIn from './Components/LogIn/LogIn.jsx';

// BrowserRouter
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      {/* <Home/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<LogIn/>} /> */}
          <Route path="/LearnMore" element={<LearnMore />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
