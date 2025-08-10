export default function DropdownToggle({
  label,
  icon,
  onClick,
  className,
  classNameImg,
}) {
  return (
    <div
      onClick={onClick}
      className={`bg-white  p-3 flex justify-center gap-2 items-center w-full ${className}`}
    >
      <span className="text-textDark-secondary">{label}</span>
      <img src={icon} alt="icon" className={classNameImg} />
    </div>
  );
}
