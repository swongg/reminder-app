import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/:username" element={<Profile/>}  />
        <Route exact path="/" element={<Home/>}  />
      </Routes>
    </Router>
  );
}

export default App;
