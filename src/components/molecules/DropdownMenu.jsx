import { useState, useEffect, useRef } from "react";
import LabelReq from "../atoms/LabelReq";
import DropdownItem from "../atoms/DropdownItem";
import ArrowDownIcon from "../../assets/icons/keyboard_arrow_down.png";

const DropdownMenu = ({ label=(""), options = [], onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const dropdownRef = useRef(null); // ➤ referensi ke elemen dropdown

  const toggle = () => setIsOpen(!isOpen);

  const handleSelect = (value) => {
    setSelected(value);
    onSelect(value);
    setIsOpen(false);
  };

  // ➤ Tutup dropdown jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // ➤ Bersihkan event saat komponen di-unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mb-3" ref={dropdownRef}>
      <LabelReq htmlFor="dropdown">{label}</LabelReq>
      <div
        onClick={toggle}
        className="border border-[#3a35411f] rounded-md px-4 py-3 bg-white text-gray-800 cursor-pointer flex justify-between items-center"
      >
        <span>{selected}</span>
        <span>
          <img src={ArrowDownIcon} alt="Arrow-down-icon" />
        </span>
      </div>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-[#3a35411f] rounded-md shadow-md">
          {options.map((item, idx) => (
            <DropdownItem key={idx} onClick={() => handleSelect(item)}>
              {item}
            </DropdownItem>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
