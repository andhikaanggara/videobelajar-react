export default function LabelReq({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="text-sm text-[#333333ad] mb-1">
      {children}
      <span className="text-[#FF5C2B] px-1">*</span>
    </label>
  );
}
