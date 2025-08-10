const Button = ({ label, variant = "primary", onClick }) => {
  const variants = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-300 text-black",
    danger: "bg-red-500 text-white",
  };

  const style = variants[variant] || variants.primary;

  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-lg cursor-pointer ${style}`}>
      {label}
    </button>
  );
};

export default Button;
