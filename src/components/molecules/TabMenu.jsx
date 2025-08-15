const categories = [
  "Semua Kelas",
  "Pemasaran",
  "Desain",
  "Pengembangan Diri",
  "Bisnis",
];

export default function TabMenu({ activeCategory, onChangeCategory }) {
  return (
    <div className=" overflow-x-auto max-w-full self-start">
      <div className=" flex place-content-start gap-4 w-max px-2">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onChangeCategory(category)}
            className={`flex flex-col text-nowrap pl-0 pr-6 p-3 ${
              activeCategory === category
                ? "text-red-500 "
                : "text-[#333333AD] "
            }`}
          >
            {category}
            <span
              className={`mt-3 w-[52px] h-[6px] rounded-lg  ${
                activeCategory === category ? "bg-main-ternary" : "bg-white"
              }`}
            ></span>
          </button>
        ))}
      </div>
    </div>
  );
}
