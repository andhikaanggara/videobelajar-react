import Rating from "../../assets/images/Rating.png";

export default function RatingField({ rating, ratingCount, className }) {
  const styleBase = "text-xs font-normal leading-5 tracking-wide text-[#333333AD] underline underline-offset-3"

    return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={Rating} alt="" className="h-5" />
      <div className={`${styleBase} ${className}`}>
        {rating} ({ratingCount})
      </div>
    </div>
  );
}
