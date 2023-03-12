import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Alert, Container, Grid, IconButton, InputAdornment, Typography, useTheme } from "@mui/material";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { TextfieldElement } from "../../../components/FormElements/TextFieldElement";
import { signup } from "../AuthSlice";
import { ErrorMessage, FormWrapper, SignupWrapper, SuccessMessage, TitleWrapper } from "./Signup.styled";
import * as Yup from "yup";
import { validations } from "../../../validations/validations";
import { StyledPaper } from "../../../styles/globalStyles.styled";

const Signup = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const theme = useTheme();

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            navigate("/");
        }
    }, [navigate]);

    const SignupSchema = Yup.object().shape({
        name: validations.textValidate,
        email: validations.emailValidate,
        password: validations.passwordValidate
    });

    return (
        <Container maxWidth="xl">
            <StyledPaper variant="outlined">
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password: ""
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={async (values, actions) => {
                        dispatch(signup(values)).then((res) => {
                            if (res.payload.response.code === 200) {
                                setSuccessMessage(res.payload.response.message);
                                actions.resetForm();
                            } else {
                                setErrorMessage(res.payload.data.response.message);
                                actions.resetForm();
                            }
                        });
                    }}
                >
                    <Form>
                        <SignupWrapper theme={theme}>
                            <TitleWrapper theme={theme}>
                                <Typography variant="h4" className="title" component="h4">
                                    Sign up
                                </Typography>
                            </TitleWrapper>
                            <FormWrapper theme={theme}>
                                <Grid container spacing={{ xs: 0, sm: 2 }}>
                                    <Grid item md={12}>
                                        <TextfieldElement name="name" label="Name" placeholder="Enter Name" type="text" />
                                    </Grid>
                                    <Grid item md={12}>
                                        <TextfieldElement name="email" label="Email" placeholder="Enter Email" type="email" />
                                    </Grid>
                                    <Grid item md={12}>
                                        <TextfieldElement
                                            name="password"
                                            label="Password"
                                            placeholder="Enter Password"
                                            type={showPassword ? "text" : "password"}
                                            endadornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() => {
                                                            setShowPassword(!showPassword);
                                                        }}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </Grid>
                                    {errorMessage && (
                                        <ErrorMessage>
                                            <Alert severity="error">{errorMessage}</Alert>
                                        </ErrorMessage>
                                    )}
                                    {successMessage && (
                                        <SuccessMessage>
                                            <Alert severity="success">{successMessage}</Alert>
                                        </SuccessMessage>
                                    )}
                                    <Grid item md={12}>
                                        <CustomButton buttonLabel={"Sign up"} buttonVariant="contained" click={() => {}} />
                                    </Grid>
                                </Grid>
                            </FormWrapper>
                        </SignupWrapper>
                    </Form>
                </Formik>
                <Typography component={"p"}>
                    Already have an account? <Link to={"/login"}>Login</Link>
                </Typography>
            </StyledPaper>
        </Container>
    );
};

export default Signup;
