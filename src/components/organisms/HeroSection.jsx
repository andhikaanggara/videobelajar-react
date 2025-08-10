import HeroImage from "../../assets/images/hero.jpg";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

export default function HeroSection({}) {
  return (
    <section
      className="rounded-lg px-5 py-[37px] text-white text-center mb-6 flex flex-col items-center gap-6"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), URL(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="font-poppins font-bold text-2xl md:text-4xl leading-tight">
        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
        Interaktif!
      </h1>
      <p className="text-sm md:text-base leading-relaxed max-w-2xl">
        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
        pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
        berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman
        Anda.
      </p>
      <Link to="/">
        <Button type="button" className="text-sm max-w-[369px] max-h-[42px]">
          Temukan Video Course untuk Dipelajari!
        </Button>
      </Link>
    </section>
  );
}
