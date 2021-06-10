import { InputBase } from "@material-ui/core";

interface Props {
  placeholder: string;
  borderBottomColor: string;
  borderSize?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

function CustomTextfield({
  placeholder,
  borderBottomColor,
  borderSize,
  onChange,
  value,
}: Props) {
  return (
    <div
      style={{
        height: 35,
        width: "100%",
        borderBottom: `${borderSize ?? "1px"} solid ${borderBottomColor}`,
      }}
    >
      <InputBase
        inputRef={(input) => input?.focus()}
        placeholder={placeholder}
        style={{ width: "100%" }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CustomTextfield;
