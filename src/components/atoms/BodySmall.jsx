export default function BodySmall({ children, className, variant="bold" }) {
  const style = {
    bold: "font-bold",
    semibold: "font-semibold",
    medium: "font-medium",
    regular: "font-normal",
  };

  return (
    <div className="text-sm  leading-5 tracking-wide">
      <p className={`${className} ${variant[style]}`}>{children}</p>
    </div>
  );
}
