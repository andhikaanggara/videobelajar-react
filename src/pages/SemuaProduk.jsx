import Navbar from "../components/templates/Navbar";
import Footer from "../components/templates/Footer";
import CardTitle from "../components/molecules/CardTitle";
import Filter from "../components/organisms/Filter";
import DropdownMenu from "../components/organisms/DropdownMenu";
import InputField from "../components/organisms/InputField";
import IconSearch from "../assets/icons/Search.png"
import CardSection from "../components/organisms/CardSection"
import Pagination from "../components/organisms/Pagination";

export default function Home() {
  const data = ["Harga Rendah", "Harga Tingga", "A to Z", "Z to A", "Rating Tertinggi", "Rating Terendah"]

  return (
    <div className="flex flex-col items-center gap-7">
      <Navbar showProfile />
      <div className=" max-w-[1242px] px-5 flex flex-col gap-11 sm:gap-11">
        <CardTitle/>
        <div className="flex items-center gap-6
        max-md:flex-col
        md:items-start
        md:gap-11">
            <Filter/>
            <div className="w-full flex flex-col gap-6
            md:gap-8
            md:items-end">
                {/* urutkan & cari kelas */}
                <div className="flex items-center gap-4 justify-end w-full ">
                  <DropdownMenu
                  label="Urutkan"
                  data={data}
                  className={"max-w-[156px] rounded-xl "}
                  />
                  <div>
                    <InputField 
                    id="text"
                    placeholder="Cari Kelas"
                    icon={IconSearch}/>
                  </div>
                </div>
                
                <CardSection className={"md:max-h-[1230px] overflow-hidden"}/>
                
                <Pagination/>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
