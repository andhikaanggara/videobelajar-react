export default function CardImg({ src }) {
  return (
    <div className="">
      <img
        alt={src}
        src={src}
        className=" h-[82px] w-[82px] object-cover rounded-lg md:h-[193px]  md:w-[344px]"
      />
    </div>
  );
}
