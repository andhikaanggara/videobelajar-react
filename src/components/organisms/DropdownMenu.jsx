import { useState } from "react"
import DropdownToggle from "../atoms/DropdownToggle"
import ArrowDown from "../../assets/icons/keyboard_arrow_down.png";
import Dropdown from "../molecules/Dropdown";

export default function DropdownMenu({label, data, className}){
    const [open, setOpen] = useState(false)
    
    return(
        <div className="static">
            <DropdownToggle 
            label={label}
            icon={ArrowDown}
            onClick={()=>setOpen(!open)}
            className={" border-other-border border rounded-xl"}/>
            {open && <Dropdown items={data} className={className}/>}
        </div>
    )
}