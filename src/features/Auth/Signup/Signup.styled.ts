import { Paper } from "@mui/material";
import styled from "styled-components";
export const SignupWrapper = styled.div`
    margin-bottom: 20px;
    border-radius: 10px;
    h4 {
        margin-bottom: 20px;
        font-weight: 700;
    }
    .input_text,
    .input_text input,
    .input_text > .MuiInputBase-input,
    .MuiInputBase-root {
        width: 100%;
        max-width: 365px;
        font-weight: 700;
    }
    .MuiOutlinedInput-root {
        background-color: #ffffff;
    }
    .MuiInputAdornment-root .MuiIconButton-root {
        svg {
            font-size: 20px;
        }
    }
    .input_text input,
    .input_text > .MuiInputBase-input {
        background: #ffffff;
        height: 17px;
    }
    .input_text {
        margin-bottom: 22px;
        margin-top: 18px;
    }
    legend {
        width: 0px;
    }
    .MuiInputLabel-root {
        font-size: 20px;
        top: -22px;
        left: -14px;
        border-radius: 10px;
        color: #000000;
    }
    .MuiButton-containedPrimary {
        margin-top: 5px;
        font-size: 16px;
    }
    @media only screen and (max-width: 600px) {
        .input_text,
        .input_text input,
        .input_text > div {
            width: 100%;
        }
    }
    @media only screen and (max-width: 600px) {
        .MuiGrid-container {
            display: block;
        }
        .input_text {
            margin-bottom: 30px;
            margin-top: 25px;
        }
    }
`;

export const TitleWrapper = styled.div`
    h4 {
        margin-bottom: 0px;
    }
`;

export const FormWrapper = styled.div`
    max-width: 529px;
    margin: auto;
    border-radius: 10px;
    justify-content: center;
    padding: 50px 0 0;
    box-sizing: border-box;
`;

export const ErrorMessage = styled.div`
    margin-top: 30px;
    max-width: 550px;
    padding: 2px;
    margin: auto;
    margin-bottom: 25px;
    transition: all 0.5s ease-in-out;
    background: rgba(255, 0, 0, 0.1);
    border: 0.5px solid rgba(255, 0, 0, 0.8);
    border-radius: 10px;
`;

export const SuccessMessage = styled.div`
    margin-top: 30px;
    max-width: 550px;
    padding: 2px;
    margin: auto;
    margin-bottom: 25px;
    transition: all 0.5s ease-in-out;
    background: rgba(31, 219, 71, 0.1);
    border: 0.5px solid rgba(31, 219, 71, 0.8);
    border-radius: 10px;
`;
