import React from "react";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
function Input({ value, setValue }: Props) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
