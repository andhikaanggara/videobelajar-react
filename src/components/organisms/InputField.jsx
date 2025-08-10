const InputField = ({ label, type = "text", placeholder,icon }) => {
  return (
    <div className="bg-white">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="w-full border border-gray-300 rounded-lg flex justify-between items-center px-3">
      <input
        type={type}
        placeholder={placeholder}
        className="focus:outline-none focus:ring-none text-textDark-secondary w-full p-3"
      />
      <img src={icon} alt={icon}/>
      </div>
    </div>
  );
};
export default InputField;
