import * as Yup from "yup";

export const validations = {
    emailValidate: Yup.string().email("Invalid Email").required("Required"),
    textValidate: Yup.string().required("Required"),
    passwordValidate: Yup.string().required("Required").min(8, "Min 8 characters are required!").matches(/[a-z]/, "At least one lowercase is required!").matches(/[A-Z]/, "At least one uppercase is required!").matches(/[0-9]/, "At least one number is required!")
};
