import CardImg from "../atoms/CardImg";
import BodyMedium from "../atoms/BodyMedium";
import Rating from "../atoms/Rating";
import BioTutor from "./Biotutor";

export default function Card({
  image,
  title,
  description,
  tutorImg,
  tutorName,
  tutorTitle,
  tutorSubTitle,
  price,
  discount,
  rating = "0.0",
  ratingCount = 0,
}) {
  return (
    <div className="flex flex-col md:w-[384px] p-4 rounded-xl bg-[#FFFFFF] border border-[#3A35411F] gap-2">
      <div className="flex gap-3 items-center md:flex-col md:gap-4">
        <CardImg src={image} />
        <div className=" flex-col flex md:gap-2">
          {/* judul & subjudul */}
          <div className="flex flex-col gap-2 w-[194px] md:w-[344px]">
            <BodyMedium className="font-poppins font-semibold md:font-bold md:text-lg">
              {title}
            </BodyMedium>
            <BodyMedium className="text-[#333333AD] line-clamp-2 max-md:hidden">
              {description}
            </BodyMedium>
          </div>
          {/* bio tutor */}
          <BioTutor
            tutorImg={tutorImg}
            tutorName={tutorName}
            tutorTitle={tutorTitle}
            tutorSubTitle={tutorSubTitle}
          />
        </div>
      </div>
      <div className="flex place-content-between">
        <Rating rating={rating} ratingCount={ratingCount} />
        <div className="flex items-center gap-1">
          <p className="text-xs font-normal leading-5 tracking-wide text-[#F64920] line-through">
            {discount}
          </p>
          <h6 className="font-poppins font-semibold leading-[120%] text-[#3ECF4C]">
            {price}
          </h6>
        </div>
      </div>
    </div>
  );
}
