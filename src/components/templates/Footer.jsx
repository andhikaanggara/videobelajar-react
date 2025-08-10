import BodySmall from "../atoms/BodySmall";
import BodyMedium from "../atoms/BodyMedium";
import Logo from "../atoms/Logo";
import ArrowRight from "../../assets/icons/KeyboardArrowRight.png";
import IconLn from "../../assets/icons/icon-linkdin.png";
import IconFb from "../../assets/icons/icon-fb.png";
import IconIg from "../../assets/icons/icon-ig.png";
import IconTweet from "../../assets/icons/icon-tweeter.png";
import FooterAccordion from "../organisms/FooterAccordion";

export default function Footer() {
const dataKategori = ["Digital & Teknologi", 
  "Pemasaran", 
  "Manajemen Bisnis",
  "Pengembangan Diri", 
  "Desain"]
const dataPerusahaan = ["Tentang Kami", "FAQ", "Kebijakan Privasi", "Ketentuan Layanan","Bantuan"]
const dataKomunitas = ["Tips Sukses","Blog"]

  return (
    <div className="p-5 border-t-1 border-other-border flex flex-col gap-4 w-full sm:px-30">
      {/* upper */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        {/* logo / alamat / no hp */}
        <div className="flex flex-col gap-4">
          <Logo className={"w-44"} />
          <div className="flex flex-col gap-2">
            <BodySmall className={"font-bold text-black"}>
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </BodySmall>
            <BodySmall>Jl. Usman Effendi No. 50 Lowokwaru, Malang</BodySmall>
            <BodySmall>+62-877-7123-1234</BodySmall>
          </div>
        </div>
        {/* company detail */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-12">
          <FooterAccordion 
          title={"Kategori"}
          data={dataKategori}/>
          <FooterAccordion 
          title={"Perusahaan"}
          data={dataPerusahaan}/>
          <FooterAccordion 
          title={"Komunitas"}
          data={dataKomunitas}/>
        </div>
      </div>
      {/* divider */}
      <span className="border-b-[1px] border-other-border sm:h-8"></span>
      {/* downer */}
      <div className="flex flex-col gap-3 sm:flex-row-reverse sm:justify-between">
        {/* icon */}
        <div className="flex gap-3.5">
          <a href="#">
            <img src={IconLn} alt="Icon linkdin" />
          </a>
          <a href="#">
            <img src={IconFb} alt="Icon Facebook" />
          </a>
          <a href="#">
            <img src={IconIg} alt="Icon Instagram" />
          </a>
          <a href="#">
            <img src={IconTweet} alt="Icon Tweeter" />
          </a>
        </div>
        <BodySmall>@2023 Gerobak Sayur All Rights Reserved.</BodySmall>
      </div>
    </div>
  );
}
