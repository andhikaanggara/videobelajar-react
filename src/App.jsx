// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"; 
import Register from "./pages/Register"; 
import SemuaProduk from "./pages/SemuaProduk"
import { useState } from "react";

export default function App() {
const [users, setUsers] = useState([]);
const [isLoggedIn, setIsLoggedIn] = useState(false);

console.log("status login:", isLoggedIn)
console.log("users:", users)

  return (
    <Router>
      <Routes>
        <Route path="/" 
            element={<Home 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/login" 
            element={<Login 
                setIsLoggedIn={setIsLoggedIn}
                users={users}/>} />
        <Route path="/register" 
            element={<Register 
                setIsLoggedIn={setIsLoggedIn}
                setUsers={setUsers} users={users} />} />
        <Route path="/semua-produk" 
            element={<SemuaProduk 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn}/>}/>
      </Routes>
    </Router>
  );
}
