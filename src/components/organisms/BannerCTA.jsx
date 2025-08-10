import Heading3 from "../atoms/Heading3"
import BodyMedium from "../atoms/BodyMedium";
import BodyLarge from "../atoms/BodyLarge"
import BannerCta from "../../assets/images/banner-cta.jpg";
import InputSubcribe from "../molecules/InputSubcribe";

export default function BannerCTA (){
    return (
        <div 
        className="border rounded-sm p-5 shadow-lg flex flex-col items-center py-12 sm:py-23"
        style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), URL(${BannerCta})`, 
            backgroundSize: "cover", 
            backgroundPosition: "Center",
        }}>
            <div className="flex flex-col gap-10 sm:max-w-[525px]">
                <div className="flex flex-col gap-1 text-center">
                    <BodyLarge className={"text-textLight-secondary"}>
                        NEWSLETTER
                    </BodyLarge>
                    <div className="flex flex-col gap-3 text-center">
                        <Heading3 className={"text-textLight-primary font-semibold max-sm:text-2xl"}>
                            Mau Belajar Lebih Banyak?
                        </Heading3>
                        <BodyMedium className={"text-other-basebg max-sm:text-sm"}>
                            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id
                        </BodyMedium>
                    </div>
                </div>
                    <InputSubcribe/>
                </div>
            </div>
    )
}