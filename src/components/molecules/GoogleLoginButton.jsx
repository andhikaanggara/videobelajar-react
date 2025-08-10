import GoogleIcon from "../../assets/icons/logos_google-icon.png";

export default function GoogleLoginButton() {
  return (
    <button className="flex items-center justify-center gap-2 border border-[#f1f1f1] h-[42px] rounded-[10px] cursor-pointer w-full">
      <img src={GoogleIcon} alt="google-icon" />
      <span className="text-[#4A505C] text-base font-bold">
        Masuk dengan Google
      </span>
    </button>
  );
}
