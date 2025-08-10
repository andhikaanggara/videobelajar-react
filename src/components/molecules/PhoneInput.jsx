import { useState, useRef, useEffect } from "react";
import LabelReq from "../atoms/LabelReq";
import FlagID from "../../assets/icons/Indonesia(ID).png";
import ArrowDownIcon from "../../assets/icons/keyboard_arrow_down.png";
import DropdownItem from "../atoms/DropdownItem";

const InputTelField = ({
  id = "phone",
  label = "No. Hp",
  options = [],
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("+62");
  const dropdownRef = useRef(null);
  const toggle = () => setIsOpen(!isOpen);
  const handleSelect = (value) => {
    setSelected(value);
    onSelect(value);
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="w-full ">
      <LabelReq htmlFor={id}>{label}</LabelReq>
      <div className="flex justify- gap-3 mb-3">
        {/* country id */}
        <div className="relative mb-3" ref={dropdownRef}>
          <div
            onClick={toggle}
            className="border border-[#3a35411f] rounded-md h-12 bg-white text-gray-800 cursor-pointer flex justify-between items-center"
          >
            <span className="bg-[#F4F5FA] h-full p-2 rounded-l-md flex items-center">
              <img src={FlagID} alt="id" />
            </span>
            <span className="p-2">{selected}</span>
            <span>
              <img src={ArrowDownIcon} alt="Arrow-down-icon" />
            </span>
          </div>
          {isOpen && (
            <ul className="absolute z-10 mt-1 w-full  bg-white border border-[#3a35411f] rounded-md shadow-md flex justify-around">
              <div></div>
              <div>
                {options.map((item, idx) => (
                  <DropdownItem key={idx} onClick={() => handleSelect(item)}>
                    {item}
                  </DropdownItem>
                ))}
              </div>
            </ul>
          )}
        </div>
        {/* input telfon */}
        <div className="w-[420px]">
          <input
            id={id}
            type="tel"
            className="flex-1 h-12 border border-[#3a35411f] rounded-md px-4 w-full"
          />
        </div>
      </div>

      {/* Select Area */}
      <div className="flex items-center border-[#3a35411f] rounded-md"></div>

      {/* Input Field */}
    </div>
  );
};

export default InputTelField;
