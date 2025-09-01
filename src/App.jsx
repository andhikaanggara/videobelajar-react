import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SemuaProduk from "./pages/SemuaProduk";
import DetailProduk from "./pages/DetailProduk";
import Admin from "./pages/Admin";
import { getCourses } from "./sevices/api";

import ApiDemo from "./pages/ApiDemo";
import ScrollToTop from "./components/atoms/ScrollToTop";

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // data course from api
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCourses();
        setCourses(res.data);
      } catch (err) {
        console.log("Gagal fetch courses:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/apidemo" element={<ApiDemo />} />
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              courses={courses}
            />
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
              courses={courses}
            />
          }
        />
        <Route
          path="/detail/:id"
          element={
            <DetailProduk
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              courses={courses}
            />
          }
        />
        <Route
          path="/admin"
          element={<Admin courses={courses} setCourses={setCourses} />}
        />
      </Routes>
    </Router>
  );
}
