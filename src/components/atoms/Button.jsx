export default function Button({
  type = "Button",
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseClass = "h-10 py-2 rounded-[10px] w-full cursor-pointer px-6";

  const styles = {
    primary:
      "bg-[#3ECF4C] text-white border border-main-primary",
    secondary: "bg-[#e2fcd9cc] text-[#3ECF4C]",
    outlined:
      "bg-white border-1 border-main-primary text-main-primary",
  };

  return (
    <button
      type={type}
      className={`${baseClass} ${styles[variant]} ${className} `}
      {...props}
    >
      {children}
    </button>
  );
}
