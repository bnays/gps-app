import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Alert, Container, Grid, IconButton, InputAdornment, Typography, useTheme } from "@mui/material";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { TextfieldElement } from "../../../components/FormElements/TextFieldElement";
import { login } from "../AuthSlice";
import { ErrorMessage, FormWrapper, LoginWrapper, TitleWrapper } from "./Login.styled";
import * as Yup from "yup";
import { validations } from "../../../validations/validations";
import { StyledPaper } from "../../../styles/globalStyles.styled";
import { RootState } from "../../../app/store";

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const theme = useTheme();

    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { auth } = useAppSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            navigate("/");
        }
    }, [navigate]);

    const LoginSchema = Yup.object().shape({
        email: validations.emailValidate,
        password: Yup.string().required("Required")
    });

    return (
        <Container maxWidth="xl">
            <StyledPaper variant="outlined">
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={async (values) => {
                        dispatch(login(values)).then((res) => {
                            if (res.payload.response.code === 200) {
                                navigate("/");
                            }
                        });
                        setTimeout(() => {
                            if (Object.keys(auth).length === 0) {
                                setErrorMessage("Invalid Email or Password!");
                            }
                        }, 500);
                    }}
                >
                    <Form>
                        <LoginWrapper theme={theme}>
                            <TitleWrapper theme={theme}>
                                <Typography variant="h4" className="title" component="h4">
                                    Login
                                </Typography>
                            </TitleWrapper>
                            <FormWrapper theme={theme}>
                                <Grid container spacing={{ xs: 0, sm: 2 }}>
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
                                </Grid>
                            </FormWrapper>
                            {errorMessage && (
                                <ErrorMessage>
                                    <Alert severity="error">{errorMessage}</Alert>
                                </ErrorMessage>
                            )}
                            <Grid item md={12}>
                                <CustomButton buttonLabel={"Login"} buttonVariant="contained" click={() => {}} />
                            </Grid>
                        </LoginWrapper>
                    </Form>
                </Formik>
                <Typography component={"p"}>
                    New User? <Link to={"/signup"}>Sign up</Link>
                </Typography>
            </StyledPaper>
        </Container>
    );
};

export default Login;
