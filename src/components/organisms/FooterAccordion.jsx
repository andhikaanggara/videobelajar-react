import BodyMedium from "../atoms/BodyMedium"
import ArrowRight from "../../assets/icons/KeyboardArrowRight.png";
import ArrowDown from "../../assets/icons/keyboard_arrow_down.png";
import { useState } from "react";

export default function FooterAccordion({title, data}){
    const [isOpen, setIsOpen] = useState(false);

    return(
    <div>
        <div className="flex max-sm:justify-between sm:flex-col sm:gap-4">
        <BodyMedium 
        className={"font-bold text-textDark-primary"}>
          {title}
        </BodyMedium>

        <button 
        onClick={()=> setIsOpen(!isOpen)}
        className="cursor-pointer">
            <img 
            src={isOpen ? ArrowDown : ArrowRight} 
            alt="toggle" 
            className="sm:hidden"/>
        </button>
        </div>

        <ul className={`flex flex-col gap-3 mt-2 overflow-hidden transition-all duration-500 ${isOpen ? "max-h-full opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
        sm:max-h-full 
        sm:opacity-100
        `}>
        {data.map((item)=>(
          <li key={item}>
          <a href="#">
          <BodyMedium className={"text-textDark-secondary"}>
            {item}
          </BodyMedium>
        </a>
        </li>
        ))}
        </ul>

      </div>
      )
}