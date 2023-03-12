import { InputAdornment, TextField } from "@mui/material";
import { useField } from "formik";
import { useState } from "react";

interface TProps {
    [x: string]: any;
    name: any;
}

export const TextfieldElement: React.FC<TProps> = ({ name, onInputChange, endadornment, ...otherProps }) => {
    const [field, mata] = useField(name);
    const [label] = useState(otherProps.label ? otherProps.label : "");

    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        error: mata.touched && mata.error ? true : false,
        helperText: mata.touched && mata.error ? mata.error : ""
    };

    return (
        <TextField
            className="input_text"
            {...configTextfield}
            value={field.value || ""}
            label={label}
            onChange={onInputChange ? onInputChange : field.onChange}
            InputLabelProps={{ shrink: true, style: { pointerEvents: "auto" } }}
            InputProps={{
                endAdornment: endadornment ? <InputAdornment position="end">{endadornment}</InputAdornment> : null
            }}
        />
    );
};
