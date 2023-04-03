import ITextInput from "@/domain/components/inputs/text-input";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { inputStyles } from "./styles";

const InputTextField = ({ label, name, control }: ITextInput): JSX.Element => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          variant="outlined"
          color="secondary"
          sx={inputStyles}
          inputProps={{
            autoComplete: "new-password",
          }}
          onChange={onChange}
          value={value}
          label={label}
        />
      )}
    />
  );
};

export default InputTextField;
