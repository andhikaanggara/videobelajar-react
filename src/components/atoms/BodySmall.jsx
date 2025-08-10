export default function BodySmall({ children, className }) {
  return (
    <div className="text-sm leading-5 tracking-wide text-[#333333AD]">
      <p className={className}>
        {children}
      </p>
    </div>
  );
}
