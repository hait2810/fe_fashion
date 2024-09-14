import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";
interface FormInputProps {
  name: string,
  label: string,
  className?: string
}
export const FormInputText = ({ name, label, className }: FormInputProps) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          className={className}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};