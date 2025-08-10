import { useState } from "react"
import KeyboardArrowLeft from "../../assets/icons/KeyboardArrowLeft.png"
import KeyboardArrowRightpg from "../../assets/icons/KeyboardArrowRightpg.png"

export default function Pagination(){
    const number = [1,2,3,4,5]
    const [activeTab, setActiveTab] = useState(1)

    return(
        <div className="flex items-center max-md:justify-between gap-2">
            <button 
            className="size-10 rounded-sm p-2 bg-other-basebg cursor-pointer"
            onClick={() => setActiveTab((prev) => Math.max(prev - 1, 1))}>
                <img src={KeyboardArrowLeft} alt={KeyboardArrowLeft}/>
            </button>
            {number.map((item, index)=>(
                <button 
                key={index}
                onClick={()=>setActiveTab(item)}
                className={`cursor-pointer size-10 rounded-sm ${activeTab === item ? "bg-main-secondary" : ""}`}>
                    <p className={`p-2 font-semibold text-sm text-textDark-secondary ${activeTab === item ? "text-white":""}`}>
                        {item}
                    </p>
                </button>
            ))}
            <button 
            className="size-10 rounded-sm p-2 bg-other-basebg cursor-pointer"
            onClick={() => setActiveTab((prev) => Math.min(prev + 1, number.length))}>
                <img src={KeyboardArrowRightpg} alt={KeyboardArrowRightpg}/>
            </button>
        </div>
    )
}