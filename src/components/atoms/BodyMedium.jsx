export default function BodyMedium({ children, className }) {
  return (
    <div className="text-sm leading-5 tracking-wide text-[#212121]
    md:text-base font-medium">
      <p className={className}>
        {children}
      </p>
    </div>
  );
}
