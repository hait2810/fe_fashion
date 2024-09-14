import { Autocomplete, CircularProgress, FormHelperText, TextField } from "@mui/material";
import { Controller, FieldError, useFormContext } from "react-hook-form";

interface OptionType {
  label: string;
  code: number | string;
}

interface AutoCompleteProps {
  options: OptionType[];
  label: string;
  name: string;
  defaultValue?: string | number;
  className?: string;
  size?: "small" | "medium";
  loading?: boolean
}

export const FormAutoComplete = ({ options, label, name, defaultValue, className, size, loading }: AutoCompleteProps) => {
  const { control, formState: { errors } } = useFormContext();
  const errorMessage = errors[name] && (errors[name] as FieldError).message;
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Autocomplete
            {...field}
            className={className}
            options={options}
            value={options.find(option => option.code === field.value) || null}
            getOptionLabel={(option: OptionType) => option?.label || ""}
            onChange={(_, data) => field.onChange(data?.code || "")} 
            loading={loading}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label || ""}
                size={size}
                error={!!errors[name]}
                InputLabelProps={{
                  shrink: field.value !== undefined && field.value !== "", 
                }}
                InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
              />
            )}
          />
        )}
      />
      {errorMessage && <FormHelperText sx={{ color: 'red' }}>{errorMessage}</FormHelperText>}
    </>
  );
};
