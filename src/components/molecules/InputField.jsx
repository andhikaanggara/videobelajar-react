import Input from "../atoms/Input";
import LabelReq from "../atoms/LabelReq";

export default function InputField({ id, type = "text", label, value, onChange }) {
  return (
    <div>
      <LabelReq htmlFor={id}>{label}</LabelReq>
      <Input 
      type={type} 
      id={id} 
      value={value}
      onChange={onChange}/>
    </div>
  );
}
