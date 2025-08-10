export default function Heading6({ children, className }) {
  return (
    <div className="font-poppins leading-[120%] text-lg">
      <h6 className={className}>{children}</h6>
    </div>
  );
}
