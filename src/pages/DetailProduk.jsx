import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "../components/templates/Navbar";
import Footer from "../components/templates/Footer";
import BodyMedium from "../components/atoms/BodyMedium";
import RatingField from "../components/atoms/Rating";
import Heading4 from "../components/atoms/Heading4";
import Heading6 from "../components/atoms/Heading6";
import BodySmall from "../components/atoms/BodySmall";
import Button from "../components/atoms/Button";
import Book2 from "../assets/icons/book-2.png";
import FileCheck from "../assets/icons/File_Check.png";
import FileEdit from "../assets/icons/File_Edit.png";
import FileCerti from "../assets/icons/file-certificate.png";
import Video from "../assets/icons/video.png";
import World from "../assets/icons/world.png";
import BioTutor from "../components/molecules/BioTutor";
import ChevronDown from "../assets/icons/Chevron_Down.png";
import Rating from "../components/atoms/Rating";
import Card from "../components/molecules/Card";

export default function DetailProduk({ isLoggedIn, setIsLoggedIn, courses }) {
  const { id } = useParams();
  const product = courses.find((c) => c.id === parseInt(id));
  const related = courses.filter(
    (c) => c.category === product.category && c.id !== product.id
  );

  return (
    <div className="flex flex-col items-center gap-7">
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        showProfile
      />

      <div className="max-w-[1242px] w-full px-5 py-7 flex flex-col gap-6 ">
        <BodyMedium>
          {`Beranda / ${product.category} / `}{" "}
          <b className="text-textDark-primary">{product.title}</b>
        </BodyMedium>
        <div
          className="rounded-xl p-4 flex flex-col gap-6 md:h-[400px] md:px-25 md:pt-20 md:pb-16"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), URL(${product.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col gap-3">
            <Heading4
              className={"text-textLight-primary font-poppins md:text-5xl"}
            >{`Gapai Karier Impianmu sebagai ${product.title}`}</Heading4>
            <BodySmall className={"text-textLight-primary md:text-base"}>
              Belajar bersama tutor profesional di Video Course. Kapanpun, di
              manapun.
            </BodySmall>
          </div>
          <RatingField
            rating={product.rating}
            ratingCount={product.ratingCount}
            className={"text-textLight-secondary md:"}
          />
        </div>

        <div className="flex flex-col gap-6 md:flex-row-reverse">
          {/* frame 1 */}
          <div className="rounded-xl bg-other-primarybg border-other-border border p-4 gap-4 flex flex-col md:max-w-[366px] md:h-fit">
            {/* gapai karier */}
            <div className="flex flex-col gap-3">
              <Heading6
                className={"font-semibold text-lg"}
              >{`Gapai Karier Impianmu sebagai ${product.title}`}</Heading6>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Heading6
                    className={"font-semibold text-main-primary text-lg"}
                  >
                    {product.price}
                  </Heading6>
                  <p className="font-medium text-base text-textDark-disabled line-through">
                    Rp 500K
                  </p>
                </div>
                <p className="rounded-lg bg-main-secondary py-1 px-3 text-sm text-textLight-primary">
                  Diskon 50%
                </p>
              </div>
              <BodySmall
                variant="medium"
                className={"text-sm text-info-default"}
              >
                Penawaran spesial tersisa 2 hari lagi!
              </BodySmall>
            </div>

            {/* tombol */}
            <div className="flex flex-col gap-4">
              <Button>Beli Sekarang</Button>
              <Button variant="outlined">Bagikan Kelas</Button>
            </div>

            {/* kelas ini sudah termasuk */}
            <div className="flex flex-col gap-3">
              <Heading4
                className={"font-semibold text-sm text-textDark-primary"}
              >
                Kelas Ini Sudah Termasuk
              </Heading4>
              <div className="flex gap-12 ">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <img src={FileCheck} alt="File Check" className="size-6" />
                    <BodySmall
                      variant="regular"
                      className={"text-sm text-textDark-secondary"}
                    >
                      Ujian Akhir
                    </BodySmall>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={Book2} alt="Book 2" className="size-6" />
                    <BodySmall
                      variant="regular"
                      className={"text-sm text-textDark-secondary"}
                    >
                      7 Dokumen
                    </BodySmall>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={FileEdit} alt="FileEdit" className="size-6" />
                    <BodySmall
                      variant="regular"
                      className={"text-sm text-textDark-secondary"}
                    >
                      Pretest
                    </BodySmall>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <img src={Video} alt="Video" className="size-6" />
                    <BodySmall
                      variant="regular"
                      className={"text-sm text-textDark-secondary"}
                    >
                      49 Video
                    </BodySmall>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={FileCerti} alt="FileCerti" className="size-6" />
                    <BodySmall
                      variant="regular"
                      className={"text-sm text-textDark-secondary"}
                    >
                      Sertifikat
                    </BodySmall>
                  </div>
                </div>
              </div>
            </div>

            {/* bahasa pengantar */}
            <div className="flex flex-col gap-3">
              <Heading4 className={"font-semibold text-sm"}>
                Bahasa Pengantar
              </Heading4>
              <div className="flex items-center gap-2">
                <img src={World} alt="World" />
                <BodySmall className={"text-sm text-textDark-secondary"}>
                  Bahasa Indonesia
                </BodySmall>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 flex-1">
            {/* frame 2 */}
            <div className="flex flex-col gap-6">
              {/* deskripsi */}
              <div className="rounded-xl bg-other-primarybg border-other-border border p-4 gap-4 flex flex-col">
                <Heading6 className={"font-semibold text-lg"}>
                  Deskripsi
                </Heading6>
                <p className="font-regular text-sm text-textDark-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                  dignissim mattis tristique elementum. Sit consequat turpis
                  orci vel. Diam aenean mattis hac vitae, orci sed pretium
                  pretium. Sit ut cursus adipiscing vestibulum, ac nibh. Viverra
                  quis at quis suscipit. Fermentum duis duis porttitor amet diam
                  sed ultrices condimentum dolor. Imperdiet dictum sapien porta
                  faucibus viverra cum massa nec. Eget risus turpis viverra
                  massa ullamcorper.
                </p>
              </div>

              {/* Belajar Bersama  */}
              <div className="rounded-xl bg-other-primarybg border-other-border border p-4 gap-4 flex flex-col">
                <Heading6 className={"font-semibold text-lg"}>
                  Belajar bersama Tutor Profesional
                </Heading6>
                <div className="border rounded-xl border-other-border p-4 flex flex-col gap-3">
                  <div>
                    <BioTutor
                      tutorImg={product.tutorImg}
                      tutorName={product.tutorName}
                      tutorTitle={product.tutorTitle}
                      tutorSubTitle={product.tutorSubTitle}
                    />
                  </div>
                  <p className="text-sm text-textDark-primary">
                    Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini
                    bekerja sebagai Senior Talent Acquisition Specialist di
                    Wings Group Indonesia (Sayap Mas Utama) selama hampir 1
                    tahun.
                  </p>
                </div>
                <div className="border rounded-xl border-other-border p-4 flex flex-col gap-3">
                  <div>
                    <BioTutor
                      tutorImg={product.tutorImg}
                      tutorName={product.tutorName}
                      tutorTitle={product.tutorTitle}
                      tutorSubTitle={product.tutorSubTitle}
                    />
                  </div>
                  <p className="text-sm text-textDark-primary">
                    Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini
                    bekerja sebagai Senior Talent Acquisition Specialist di
                    Wings Group Indonesia (Sayap Mas Utama) selama hampir 1
                    tahun.
                  </p>
                </div>
              </div>

              {/* Kamu akan mempelajari */}
              <div className="rounded-xl bg-other-primarybg border-other-border border p-4 gap-4 flex flex-col">
                <Heading6 className={"font-semibold text-lg"}>
                  Kamu akan mempelajari
                </Heading6>
                {/* acordion */}
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between">
                    <Heading6
                      className={"font-semibold text-lg text-main-primary"}
                    >
                      Introduction to ...
                    </Heading6>
                    <img src={ChevronDown} alt="ChevronDown" />
                  </div>
                  <div className="flex justify-between">
                    <Heading6
                      className={"font-semibold text-lg text-main-primary"}
                    >
                      Introduction to ...
                    </Heading6>
                    <img src={ChevronDown} alt="ChevronDown" />
                  </div>
                  <div className="flex justify-between">
                    <Heading6
                      className={"font-semibold text-lg text-main-primary"}
                    >
                      Introduction to ...
                    </Heading6>
                    <img src={ChevronDown} alt="ChevronDown" />
                  </div>
                  <div className="flex justify-between">
                    <Heading6
                      className={"font-semibold text-lg text-main-primary"}
                    >
                      Introduction to ...
                    </Heading6>
                    <img src={ChevronDown} alt="ChevronDown" />
                  </div>
                </div>
              </div>
            </div>
            {/* Rating dan riview */}
            <div className="rounded-xl bg-other-primarybg border-other-border border p-4 gap-4 flex flex-col">
              <Heading6 className={"font-semibold text-lg"}>
                Belajar bersama Tutor Profesional
              </Heading6>
              <div className="border rounded-xl border-other-border p-4 flex flex-col gap-3">
                <div>
                  <BioTutor
                    tutorImg={product.tutorImg}
                    tutorName="Ujang Kenyot"
                    tutorTitle="Alumni batch 2"
                  />
                </div>
                <p className="text-sm text-textDark-primary">
                  Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini
                  bekerja sebagai Senior Talent Acquisition Specialist di Wings
                  Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
                </p>
                <Rating ratingCount={4.9} />
              </div>
              <div className="border rounded-xl border-other-border p-4 flex flex-col gap-3">
                <div>
                  <BioTutor
                    tutorImg={product.tutorImg}
                    tutorName="Ujang Kenyot"
                    tutorTitle="Alumni batch 3"
                  />
                </div>
                <p className="text-sm text-textDark-primary">
                  Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini
                  bekerja sebagai Senior Talent Acquisition Specialist di Wings
                  Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
                </p>
                <Rating ratingCount={4.8} />
              </div>
            </div>
          </div>
        </div>
        {/* Video lainnya */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Heading6 className={"font-semibold text-lg"}>
              Video Pembelajaran Terkait Lainnya
            </Heading6>
            <p className="text-sm text-textDark-primary">
              Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!Ekspansi
              Pengetahuan Anda dengan Rekomendasi Spesial Kami!
            </p>
          </div>
          {/* card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {related.length > 0 ? (
              related.map((item) => (
                <Link key={item.id} to={`/detail/${item.id}`}>
                  <Card
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    tutorImg={item.tutorImg}
                    tutorName={item.tutorName}
                    tutorTitle={item.tutorTitle}
                    tutorSubTitle={item.tutorSubTitle}
                    price={item.price}
                    discount={item.discount}
                    rating={item.rating}
                    ratingCount={item.ratingCount}
                  />
                </Link>
              ))
            ) : (
              <p className="text-sm text-gray-500">Tidak ada video terkait.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
