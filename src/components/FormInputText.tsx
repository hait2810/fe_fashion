import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";
interface FormInputProps {
  name: string,
  label: string,
  className?: string
  size?: "small" | "medium"
  type?: React.HTMLInputTypeAttribute
}
export const FormInputText = ({ name, label, className, size, type }: FormInputProps) => {
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
          size={size}
          error={!!error}
          type={type}
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