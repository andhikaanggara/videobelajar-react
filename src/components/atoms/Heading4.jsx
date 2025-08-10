export default function Heading4({ children, className }) {
  return (
    <div className="font-poppins font-bold leading-[120%] text-2xl text-[#222325]">
      <h4 className={className}>{children}</h4>
    </div>
  );
}
