import BodyMedium from "../atoms/BodyMedium"
import Heading6 from "../atoms/Heading6"
import FilterAccordion from "../molecules/FilterAccordion"
import Notebook from "../../assets/icons/Notebook.png"

export default function Filter(){
const bidangStudi = [
    "Pemasaran",
    "Digital & Teknologi",
    "Pengembangan Diri",
    "Bisnis Manajemen"
]
const harga = [
    "Pemasaran",
    "Digital & Teknologi",
    "Pengembangan Diri",
    "Bisnis Manajemen"
]
const durasi = [
    "Kurang dari 4 Jam",
    "4 - 8 Jam",
    "Lebih dari 8 Jam",
]

    return (
        <div className="w-full bg-other-primarybg border-other-border border flex flex-col gap-3 p-4 rounded-xl
        md:max-w-[366px]">
            <div className="flex justify-between">
                <Heading6 className={"font-semibold text-textDark-secondary"}>Filter</Heading6>
                <BodyMedium className={"font-medium text-error-default"}>Reset</BodyMedium>
            </div>
            <FilterAccordion title={"Bidang Studi"} data={bidangStudi} img={Notebook} rounded={"rounded-sm"}/>
            <FilterAccordion title={"Harga"} data={harga} img={Notebook} rounded={"rounded-sm"}/>
            <FilterAccordion title={"Durasi"} data={durasi} img={Notebook} rounded={"rounded-full"}/>
        </div>
    )
}