import BodyMedium from "../atoms/BodyMedium"
import ArrowUp from "../../assets/icons/KeyboardArrowUp.png";
import ArrowDown from "../../assets/icons/KeyboardArrowDown.png";
import { useState } from "react";

export default function FilterAccordion({title, data, img, rounded}){
    const [isOpen, setIsOpen] = useState(false);

    return(
    <div className={`border border-other-border rounded-lg py-4 px-4 gap-4 pt-4 transition-all duration-500 ${isOpen ? "max-h-full" : "max-h-[58px]"}
    md:max-h-full`}>
        <div className="flex max-md-items-center 
        max-md:justify-between md:flex-col md:gap-3">
           <button className="flex items-center gap-4">
                <img src={img} alt={img} />
                
                <BodyMedium 
                className={"font-semibold text-main-primary"}>
                    {title}
                </BodyMedium>
           </button>

            <button 
            onClick={()=> setIsOpen(!isOpen)}
            className="cursor-pointer">
                <img 
                src={isOpen ? ArrowUp : ArrowDown} 
                alt="toggle" 
                className="md:hidden"/>
            </button>
        </div>

        <ul className={`flex flex-col gap-3 pt-4 pl-1 overflow-hidden transition-all duration-500 ${isOpen ? "max-h-full opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
        md:max-h-full 
        md:opacity-100
        `}>
        {data.map((item, index)=>(
          <div className="flex gap-4 items-center" key={index}>
            <button className={`size-5 bg-main-primary/20 border-2 border-main-primary cursor-pointer ${rounded}`}></button>
            <a href="#" >
                <BodyMedium className={"text-textDark-secondary"}>
                    {item}
                </BodyMedium>
            </a>
          </div>
        ))}
        </ul>

      </div>
      )
}