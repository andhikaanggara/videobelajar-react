export default function BodyMedium({ children, className }) {
  return (
    <div className="text-base leading-5 tracking-wide text-textDark-secondary font-medium">
      <p className={className}>
        {children}
      </p>
    </div>
  );
}
