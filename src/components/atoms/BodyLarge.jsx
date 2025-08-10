export default function BodyLarge({ children, className }) {
    return (
      <div className="leading-5 tracking-wide text-[#212121] text-lg">
        <p className={className}>
          {children}
        </p>
      </div>
    );
  }
  