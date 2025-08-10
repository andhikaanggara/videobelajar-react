export default function Heading4({ children, className }) {
    return (
      <div className="font-poppins font-bold leading-[120%] text-[#222325] text-4xl">
        <h3 className={className}>{children}</h3>
      </div>
    );
  }
  