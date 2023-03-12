import styled from "styled-components";

export const LoginWrapper = styled.div`
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
        margin-top: 15px;
        font-size: 16px;
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
        margin-bottom: 0;
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
    max-width: 365px;
    margin: auto;
    margin-bottom: 10px;
`;
