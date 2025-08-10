import Input from "../atoms/Input";
import LabelReq from "../atoms/LabelReq";
import Button from "../atoms/Button";
import PasswordField from "../molecules/PasswordField";
import GoogleLoginButton from "../molecules/GoogleLoginButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ users, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const found = users.find((u) => u.email === email);

    if (!found) {
      alert("Email belum terdaftar!");
      return;
    }

    if (found.password !== password) {
      alert("Password salah!");
      return;
    }

    alert("Login Berhasil");
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white border border-[#f1f1f1] rounded-md p-5 flex flex-col w-full max-w-[590px]"
    >
      <h3 className="text-center text-2xl font-normal font-poppins text-[#222325] pb-2.5">
        Masuk ke akun
      </h3>
      <p className="text-center text-sm text-[#333333ad] mb-5">
        Yuk, lanjutin belajarmu di videobelajar.
      </p>

      {/* input-email */}
      <LabelReq htmlFor="email">E-mail</LabelReq>
      <Input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* input-password */}
      <PasswordField
        id="password"
        label="Kata Sandi"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex justify-end">
        <a href="#" className="text-sm mb-6 text-[#333333ad] hover:underline">
          Lupa Password?
        </a>
      </div>

      <Button type="submit" className="font-bold">
        Masuk
      </Button>

      <Link to="/register" className="mt-4">
        <Button type="button" variant="secondary" className="font-bold">
          Daftar
        </Button>
      </Link>

      <div className="relative text-center h-6 my-4">
        <div className="absolute top-1/2 left-0 w-full border-t border-[#f1f1f1] -translate-y-1/2"></div>
        <span className="relative bg-white px-3 text-sm text-[#333333ad] font-medium">
          atau
        </span>
      </div>

      <GoogleLoginButton />
    </form>
  );
}
