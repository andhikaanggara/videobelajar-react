import Button from "../atoms/Button"
import Input from "../atoms/Input"

export default function InputSubcribe(){
    return(
        <div className="sm:relative flex flex-col gap-4">
            <Input type="email" id="email" placeholder={"Masukan Emailmu"} className={"rounded-xl max-sm:text-center max-sm:text-sm"}/>
            <Button className="bg-main-secondary sm:absolute sm:bottom-4 sm:right-1 font-bold sm:w-33">Subscribe</Button>
        </div>        
    )
}