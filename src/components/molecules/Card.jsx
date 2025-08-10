import CardImg from "../atoms/CardImg";
import Rating from "../../assets/images/Rating.png";
import BodyMedium from "../atoms/BodyMedium";
import BodySmall from "../atoms/BodySmall";

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
    <div className="flex flex-col w-[320px] md:w-[384px] p-4 rounded-xl bg-[#FFFFFF] border border-[#3A35411F]">
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
          <div className="flex items-center gap-2">
            <img
              src={tutorImg}
              alt=""
              className="w-[36px] h-[36px] object-cover rounded-lg"
            />
            <div>
              <BodySmall className="font-medium md:text-base h-[20px]">
                {tutorName}
              </BodySmall>
              <BodySmall className="text-xs md:text-base font-normal md:font-medium text-[#333333AD]">
                {tutorTitle}
                <span></span>
                <span className="max-md:hidden">
                  <span> </span>di{" "}
                  <span className="font-bold"> {tutorSubTitle} </span>
                </span>
              </BodySmall>
            </div>
          </div>
        </div>
      </div>
      <div className="flex place-content-between">
        <div className="flex items-center gap-2">
          <img src={Rating} alt="" className="h-5" />
          <div className="text-xs font-normal leading-5 tracking-wide text-[#333333AD] underline underline-offset-3">
            {rating} ({ratingCount})
          </div>
        </div>
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
