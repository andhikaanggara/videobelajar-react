export default function BodyMedium({ children, className }) {
  return (
    <div className="leading-5 tracking-wide text-[#212121]">
      <p className={className}>
        {children}
      </p>
    </div>
  );
}
