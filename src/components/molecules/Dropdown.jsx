import DropdownItem from "../atoms/DropdownItem";
import BodySmall from "../atoms/BodySmall";
import Logout from "../../assets/icons/Logout.png";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

export default function Dropdown({
  isLoggedIn,
  setIsLoggedIn,
  items,
  className,
  showKeluar = false,
  showLogin = false,
}) {
  return (
    <ul className={`absolute bg-white shadow-2xl mt-3 ${className}`}>
      {!isLoggedIn ? (
        <>
          {showLogin && (
            <li
              className="py-3 px-5 cursor-pointer text-textDark-secondary 
         flex flex-col items-center gap-2"
            >
              <Link to="/semua-produk" className="w-full ">
                <button className="text-left cursor-pointer mb-3">
                  kategori
                </button>
              </Link>
              <Link to="/login" className="w-full text-center">
                <Button>Login</Button>
              </Link>
              <Link to="/regiser" className="w-full text-center">
                <Button variant="outlined">Register</Button>
              </Link>
            </li>
          )}
        </>
      ) : (
        <>
          {items.map((item, i) => (
            <DropdownItem key={i} onClick={item}>
              {item}
            </DropdownItem>
          ))}
          {showKeluar && (
            <li
              className="px-4 py-2 cursor-pointer text-textDark-secondary 
                hover:bg-other-basebg flex gap-1 items-center"
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              <BodySmall
                className={
                  "text-error-default font-medium hover:text-error-hover"
                }
              >
                Keluar
              </BodySmall>
              <img src={Logout} alt="" />
            </li>
          )}
        </>
      )}
    </ul>
  );
}
