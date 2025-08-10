import { useState } from "react";

const tabData = [
  "Semua Kelas",
  "Pemasaran",
  "Desain",
  "Pengembangan Diri",
  "Soft Bisnis",
];

export default function TabMenu() {
  const [activeTab, setActiveTab] = useState("Semua Kelas");

  return (
    <div className=" overflow-x-auto max-w-full self-start">
      <div className=" flex place-content-start gap-4 w-max px-2">
        {tabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`flex flex-col text-nowrap pl-0 pr-6 p-3 ${
              activeTab === tab ? "text-red-500 " : "text-[#333333AD] "
            }`}
          >
            {tab}
            <span
              className={`mt-3 w-[52px] h-[6px] rounded-lg  ${
                activeTab === tab ? "bg-main-ternary" : "bg-white"
              }`}
            ></span>
          </button>
        ))}
      </div>
    </div>
  );
}
