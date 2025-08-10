import { useState } from "react"
import { useMediaQuery } from "react-responsive";
import DropdownToggle from "../atoms/DropdownToggle"
import Dropdown from "../molecules/Dropdown";
import Ham from "../../assets/icons/Hamburger.png";
import Avatar from "../../assets/images/Avatar.png";


export default function HamMenu({data, isLoggedIn, setIsLoggedIn}){
    const [open, setOpen] = useState(false)
    const isMediumUp = useMediaQuery({minWidth: 768})
    
    return(
        <div className="md:relative static ">
            <DropdownToggle 
            className={"size-11"}
            icon={isMediumUp ? Avatar : Ham}
            onClick={()=>setOpen(!open)}/>
            {open && <Dropdown items={data} className="text-left w-full right-0 md:w-50" showKeluar showLogin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
        </div>
    )
}