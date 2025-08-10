import React, { useState } from "react";
import InputField from "../molecules/InputField";
import InputTelField from "../molecules/PhoneInput";
import PasswordField from "../molecules/PasswordField";
import Button from "../atoms/Button";
import GoogleLoginButton from "../molecules/GoogleLoginButton";
import DropdownMenu from "../molecules/DropdownMenu";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function RegisterForm({users, setUsers}) {
  const [gender, setGender] = useState("");
  const [noTelf, setNoTelf] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // cek jika imput kosong
    if (!email || !password) {
      alert("Harap isi semua data")
      return;
    }
    
    // cek jika email sudah terdaftar
    const existing = users.find((u)=> u.email === email);
    if (existing) {
      alert("email sudah terdaftar!, Silahkan Masuk");
      Navigate("/login")
      return;
    }
      
    // tambah ke array
    setUsers([...users, {email,password}])
    alert("Registrasi Berhasil!, Silahkan Masuk")
    Navigate("/login")
  };

  return (
    <form 
    onSubmit={handleRegister}
    className="bg-white border border-[#f1f1f1] rounded-md p-5 flex flex-col w-full max-w-[590px]">
      <h3 className="text-center text-2xl font-normal font-poppins text-[#222325] py-2">
        Pendaftaran akun
      </h3>
      <p className="text-center text-sm text-[#333333ad] mb-5">
        Yuk, daftarkan akunmu sekarang juga!
      </p>

      {/* Nama Lengkap */}
      <InputField id="name" type="text" label="Nama Lengkap" />

      {/* Email */}
      <InputField 
      id="email" 
      type="email" 
      label="E-mail"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      required />

      {/* Jenis Kelamin */}
      <DropdownMenu
        label="Jenis Kelamin"
        options={["Wanita", "Laki-laki", "Lainnya"]}
        onSelect={setGender}
      />

      {/* Nomor Telepon */}
      <InputTelField
        type="tel"
        label="No. Hp"
        options={["+62", "+1", "+99", "+41"]}
        onSelect={setNoTelf}
      />

      {/* Kata Sandi */}
      <PasswordField 
      id="kata-sandi1" 
      label="Kata Sandi" 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />

      {/* Konfirmasi Kata Sandi */}
      <PasswordField id="kata-sandi2" label="Konfirmasi Kata Sandi" />

      {/* Lupa Password */}
      <a href="#" className="text-right text-sm mb-6 text-[#333333ad]">
        Lupa Password?
      </a>

      {/* Tombol Daftar */}
      <Button type="submit" className="font-bold">Daftar</Button>

      {/* Tombol Masuk */}
      <Link to="/login" className="mt-4">
        <Button type="button" variant="secondary"className="font-bold">
          Masuk
        </Button>
      </Link>

      {/* Pembatas */}
      <div className="relative text-center h-6 mb-3 mt-5">
        <div className="absolute top-1/2 left-0 w-full border-t border-[#f1f1f1] -translate-y-1/2"></div>
        <span className="relative bg-white px-3 text-sm text-[#333333ad] font-medium">
          atau
        </span>
      </div>

      {/* Tombol Google Login */}
      <GoogleLoginButton />
    </form>
  );
}
