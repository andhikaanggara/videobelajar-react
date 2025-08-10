import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#FFFDF3]">
      <header className="border-b border-[#3a35411f] bg-white px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Logo" className="min-w-0" />
        </Link>
        <div></div>
      </header>
      <main className="flex justify-center items-center p-7">{children}</main>
    </div>
  );
}
