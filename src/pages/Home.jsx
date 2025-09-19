import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../store/redux/courseSlice";

import Navbar from "../components/templates/Navbar";
import CardSection from "../components/organisms/CardSection";
import HeroSection from "../components/organisms/HeroSection";
import BannerCTA from "../components/organisms/BannerCTA";
import Footer from "../components/templates/Footer";
import CardTitle from "../components/molecules/CardTitle";
import TabMenu from "../components/molecules/TabMenu";

export default function Home({ isLoggedIn, setIsLoggedIn }) {
  const dispatch = useDispatch();
  const {
    data: courses,
    loading,
    error,
  } = useSelector((state) => state.courses);

  // State actif category
  const [activeCategory, setActiveCategory] = useState("Semua Kelas");

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Filter
  const filteredCourses =
    activeCategory === "Semua Kelas"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  console.log("courses di Admin.jsx:", courses);

  return (
    <div className="flex flex-col items-center gap-7">
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        showProfile
      />

      <div className="max-w-[1242px] px-5 flex flex-col gap-11 sm:gap-11">
        <HeroSection />

        <div className="flex flex-col items-center gap-6 max-w-[459px] sm:max-w-full">
          <CardTitle />
          <TabMenu
            activeCategory={activeCategory}
            onChangeCategory={setActiveCategory}
          />
          <CardSection courses={filteredCourses} />
        </div>

        <BannerCTA />
      </div>

      <Footer />
    </div>
  );
}
