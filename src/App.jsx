import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SemuaProduk from "./pages/SemuaProduk";
import DetailProduk from "./pages/DetailProduk";
import Admin from "./pages/Admin";
import ScrollToTop from "./components/atoms/ScrollToTop";
import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} users={users} />}
        />
        <Route
          path="/register"
          element={
            <Register
              setIsLoggedIn={setIsLoggedIn}
              setUsers={setUsers}
              users={users}
            />
          }
        />
        <Route
          path="/semua-produk"
          element={
            <SemuaProduk
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          path="/detail/:id"
          element={
            <DetailProduk
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
