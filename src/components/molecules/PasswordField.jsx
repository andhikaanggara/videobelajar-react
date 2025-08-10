import { useState } from "react";
import Input from "../atoms/Input";
import LabelReq from "../atoms/LabelReq";
import eyeOff from "../../assets/icons/eye-off.png";

export default function PasswordField({ id, label, value, onChange }) {
  const [show, setShow] = useState(false);
  return (
    <div className="mb-3 relative">
      <LabelReq htmlFor={id}>{label}</LabelReq>
      <Input
        type={show ? "text" : "password"}
        id={id}
        value={value}
        onChange={onChange}
      />
      <img
        src={eyeOff}
        alt="toggle-passwor"
        className="absolute right-4 bottom-6.5 cursor-pointer"
        onClick={() => setShow(!show)}
      />
    </div>
  );
}
