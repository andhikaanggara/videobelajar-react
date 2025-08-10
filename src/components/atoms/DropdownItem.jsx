import BodySmall from "./BodySmall";

export default function DropdownItem({ children, onClick }) {
  return (
    <li
      onClick={onClick}
      className="px-4 py-2 cursor-pointer text-textDark-secondary 
      hover:bg-other-basebg"
    >
      <BodySmall className={"font-medium hover:text-textDark-primary"}>
        {children}
      </BodySmall>
    </li>
  );
}
