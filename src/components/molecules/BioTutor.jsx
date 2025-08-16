import BodyMedium from "../atoms/BodyMedium";
import BodySmall from "../atoms/BodySmall";

export default function BioTutor({
  tutorImg,
  tutorName,
  tutorTitle,
  tutorSubTitle,
}) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={tutorImg}
        alt=""
        className="w-[36px] h-[36px] object-cover rounded-lg"
      />
      <div>
        <BodyMedium className="font-medium md:text-base h-[20px] text-textDark-primary">
          {tutorName}
        </BodyMedium>
        <BodySmall className="font-normal md:font-medium text-textDark-secondary">
          {tutorTitle}
          <span></span>
          <span className="max-md:hidden">
            <span> </span>
            {`di `}
            <span className="font-bold"> {tutorSubTitle} </span>
          </span>
        </BodySmall>
      </div>
    </div>
  );
}
