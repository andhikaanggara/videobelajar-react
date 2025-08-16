import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import BodyMedium from "../atoms/BodyMedium";
import HamMenu from "../organisms/HamMenu";
import Button from "../atoms/Button";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const data = [
    !isLoggedIn ? "Kategori" : "Kategori",
    "Profil Saya",
    "Kelas Saya",
    "Pesanan Saya",
  ];

  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md">
      <div className="max-w-[1242px] mx-auto px-5 flex gap-11 sm:gap-11 justify-between">
        {/* Logo */}
        <Link to="/">
          <Logo className={"max-sm:h-10"} />
        </Link>

        {/* Menu Section */}
        <div className="flex items-center gap-9">
          {/* Kategori butten for desktop*/}
          <Link to="/semua-produk">
            <button className="cursor-pointer max-md:hidden">
              <BodyMedium className={"text-[#333333AD] font-medium"}>
                Kategori
              </BodyMedium>
            </button>
          </Link>

          {/* right menu */}
          {isLoggedIn ? (
            // for logged in user
            <div className="max-md:hidden">
              <HamMenu
                data={data}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            </div>
          ) : (
            // for not logged in user
            <div className="flex gap-4 max-md:hidden">
              <Link to="/login">
                <Button variant="primary" className="px-6">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outlined" className="px-6">
                  Register
                </Button>
              </Link>
            </div>
          )}

          {/* Ham Button for mobile*/}
          <div className="md:hidden">
            <HamMenu
              data={data}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
