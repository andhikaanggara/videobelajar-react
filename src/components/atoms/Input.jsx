export default function Input({
  name,
  type = "text",
  id,
  placeholder,
  className,
  onChange,
  value,
}) {
  const baseClass =
    "w-full h-12 border bg-white border-[#3a35411f] rounded-md px-5 mb-3 focus:outline-none";

  return (
    <input
      name={name}
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseClass} ${className}`}
    />
  );
}
