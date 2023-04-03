import ISelectInput from "@/domain/components/inputs/select-input";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { selectLabelStyles, selectStyles } from "./styles";

const SelectField = ({
  control,
  name,
  label,
  options,
}: ISelectInput): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel sx={selectLabelStyles} id={label}>
            {label}
          </InputLabel>
          <Select
            sx={selectStyles}
            labelId={label}
            variant="outlined"
            label={label}
            color="secondary"
            {...field}
          >
            {options.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default SelectField;
