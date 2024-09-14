import { Autocomplete, FormHelperText, TextField } from "@mui/material"
import { Controller, FieldError, useFormContext } from "react-hook-form"

export const FormAutoComplete = ({ options, label, name, defaultValue, className }: { options: { label: string, id: number | string }[], label: string, name: string, defaultValue?: string | number, className?: string }) => {
    const { control, formState: { errors } } = useFormContext();
    const errorMessage = errors[name] && (errors[name] as FieldError).message;
    return <>
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
                <Autocomplete
                    {...field}
                    className={className}
                    options={options}
                    getOptionLabel={(option) => option.label || ""}
                    onChange={(_, data) => field.onChange(data)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={label}
                            size="small"
                            error={!!errors[name]}
                        />
                    )}
                />
            )}
        />
        {errorMessage && <FormHelperText sx={{ color: 'red' }}>{errorMessage}</FormHelperText>}

    </>
}