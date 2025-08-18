import { use, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SemuaProduk from "./pages/SemuaProduk";
import DetailProduk from "./pages/DetailProduk";
import Admin from "./pages/Admin";

// assets - card
import Card1 from "./assets/images/card1.jpg";
import Card2 from "./assets/images/card2.png";
import Card3 from "./assets/images/card3.png";
import Card4 from "./assets/images/card4.png";
import Card5 from "./assets/images/card5.png";
import Card6 from "./assets/images/card6.png";
import Card7 from "./assets/images/card7.png";
import Card8 from "./assets/images/card8.png";
import Card9 from "./assets/images/card9.png";
import CardAvatar1 from "./assets/images/card-avatar1.png";
import CardAvatar2 from "./assets/images/card-avatar2.png";
import CardAvatar3 from "./assets/images/card-avatar3.png";
import CardAvatar4 from "./assets/images/card-avatar4.png";
import CardAvatar5 from "./assets/images/card-avatar5.png";
import CardAvatar6 from "./assets/images/card-avatar6.png";
import CardAvatar7 from "./assets/images/card-avatar7.png";
import CardAvatar8 from "./assets/images/card-avatar8.png";
import CardAvatar9 from "./assets/images/card-avatar9.png";

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // data course
  const defaultCourse = [
    {
      id: 1,
      category: "Pemasaran",
      image: Card1,
      title: "Strategi Pemasaran Digital",
      description:
        "Pelajari teknik pemasaran online yang terbukti efektif untuk meningkatkan penjualan.",
      tutorImg: CardAvatar1,
      tutorName: "Jenna Ortega",
      tutorTitle: "Digital Marketing Manager",
      tutorSubTitle: "Shopee",
      price: "Rp 350K",
      rating: "3.5",
      ratingCount: 86,
    },
    {
      id: 2,
      category: "Pemasaran",
      image: Card2,
      title: "Facebook & Instagram Ads Mastery",
      description:
        "Menguasai iklan berbayar di media sosial untuk memperluas jangkauan bisnis Anda.",
      tutorImg: CardAvatar2,
      tutorName: "Jenna Ortega",
      tutorTitle: "Social Media Specialist",
      tutorSubTitle: "Tokopedia",
      price: "Rp 400K",
      rating: "3.5",
      ratingCount: 86,
    },
    // Desain
    {
      id: 3,
      category: "Desain",
      image: Card3,
      title: "UI/UX Design untuk Pemula",
      description:
        "Belajar dasar desain antarmuka dan pengalaman pengguna yang menarik.",
      tutorImg: CardAvatar3,
      tutorName: "Jenna Ortega",
      tutorTitle: "Lead UI/UX Designer",
      tutorSubTitle: "Gojeg",
      price: "Rp 300K",
      rating: "3.5",
      ratingCount: 86,
    },
    {
      id: 4,
      category: "Desain",
      image: Card4,
      title: "Adobe Illustrator Dasar",
      description:
        "Pelajari cara membuat desain vektor profesional untuk berbagai kebutuhan.",
      tutorImg: CardAvatar4,
      tutorName: "Jenna Ortega",
      tutorTitle: "Graphic Designer",
      tutorSubTitle: "Bukalapak",
      price: "Rp 280K",
      rating: "3.5",
      ratingCount: 86,
    },
    {
      id: 5,
      category: "Desain",
      image: Card5,
      title: "Desain Grafis dengan Canva",
      description:
        "Buat desain menarik dengan mudah menggunakan Canva, tanpa skill desain khusus.",
      tutorImg: CardAvatar5,
      tutorName: "Jenna Ortega",
      tutorTitle: "Creative Content Designer",
      tutorSubTitle: "Traveloka",
      price: "Rp 300K",
      rating: "3.5",
      ratingCount: 86,
    },
    // Pengembangan Diri
    {
      id: 6,
      category: "Pengembangan Diri",
      image: Card6,
      title: "Public Speaking untuk Pemula",
      description:
        "Tingkatkan rasa percaya diri dan kemampuan berbicara di depan umum.",
      tutorImg: CardAvatar6,
      tutorName: "Jenna Ortega",
      tutorTitle: "Public Speaking Coach",
      tutorSubTitle: "Mana mana",
      price: "Rp 250K",
      rating: "3.5",
      ratingCount: 86,
    },
    {
      id: 7,
      category: "Pengembangan Diri",
      image: Card7,
      title: "Manajemen Waktu Efektif",
      description:
        "Pelajari teknik mengatur waktu agar produktivitas meningkat.",
      tutorImg: CardAvatar7,
      tutorName: "Jenna Ortega",
      tutorTitle: "Life Coach",
      tutorSubTitle: "Mana mana",
      price: "Rp 220K",
      rating: "3.5",
      ratingCount: 86,
    },
    // Bisnis
    {
      id: 8,
      category: "Bisnis",
      image: Card8,
      title: "Membangun Bisnis Online dari Nol",
      description:
        "Panduan lengkap memulai bisnis online, dari ide hingga penjualan.",
      tutorImg: CardAvatar8,
      tutorName: "Jenna Ortega",
      tutorTitle: "Founder & CEO",
      tutorSubTitle: "Startup Z",
      price: "Rp 500K",
      rating: "3.5",
      ratingCount: 86,
    },
    {
      id: 9,
      category: "Bisnis",
      image: Card9,
      title: "Strategi Branding untuk UKM",
      description:
        "Membangun identitas merek yang kuat untuk usaha kecil dan menengah.",
      tutorImg: CardAvatar9,
      tutorName: "Jenna Ortega",
      tutorTitle: "Brand Consultant",
      tutorSubTitle: "Creative Hub",
      price: "Rp 450K",
      rating: "3.5",
      ratingCount: 86,
    },
  ];

  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem("courses");
    return saved ? JSON.parse(saved) : defaultCourse;
  });

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  return (
    <Router>
      <Routes>
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
