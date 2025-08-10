import Heading4 from "../atoms/Heading4";
import BodySmall from "../atoms/BodySmall";

export default function CardTitle() {
  return (
    <div className="flex flex-col gap-2 text-left w-full">
      <Heading4 className={"text-2xl"}>
        Koleksi Video Pembelajaran Unggulan
      </Heading4>
      <BodySmall className={"text-sm"}>
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
      </BodySmall>
    </div>
  );
}
