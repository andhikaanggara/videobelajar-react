import { useState } from "react";

import Navbar from "../components/templates/Navbar";
import CardSection from "../components/organisms/CardSection";
import HeroSection from "../components/organisms/HeroSection";
import BannerCTA from "../components/organisms/BannerCTA";
import Footer from "../components/templates/Footer";
import CardTitle from "../components/molecules/CardTitle";
import TabMenu from "../components/molecules/TabMenu";

export default function Home({ isLoggedIn, setIsLoggedIn, courses }) {
  // State actif category
  const [activeCategory, setActiveCategory] = useState("Semua Kelas");

  // Filter
  const filterCourses =
    activeCategory === "Semua Kelas"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <div className="flex flex-col items-center gap-7 ">
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
          <CardSection courses={filterCourses} />
        </div>

        <BannerCTA />
      </div>

      <Footer />
    </div>
  );
}
