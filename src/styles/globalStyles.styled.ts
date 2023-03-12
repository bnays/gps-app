import { Paper } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";

interface StyleProps {
    theme: any;
}

const GlobalStyle = createGlobalStyle<StyleProps>`
a {
      color: ${(props) => props.theme.palette.primary.main};
      text-decoration: none;
      transition: all 0.2s ease-in-out;
      &:hover, &:focus {
         color: ${(props) => props.theme.palette.primary.light};
         text-decoration: none;
      }
   }
   input::placeholder, textarea::placeholder {
      color: ${(props) => props.theme.palette.secondary.dark} !important;
   }
   /* Change the white to any color */
   input:-webkit-autofill,
   input:-webkit-autofill:hover, 
   input:-webkit-autofill:focus, 
   input:-webkit-autofill:active{
      box-shadow: 0 0 0 30px white inset !important;
      -webkit-box-shadow: 0 0 0 30px white inset !important;
   }
   .input_text,
   .input_text input,
   .input_text > div,
   .input_text > .MuiInputBase-input,
   .MuiInputBase-root {
      font-size: 16px;
      border-radius: 10px;
      border: 0;
      text-align: left;
      color: #333333;
   }
   .input_text,
   .input_text input,
   .input_text > div {
      max-width: 350px;
      width: 100%;
      background: #ffffff;
      font-weight: 700;
      height: 50px;
   }
   .input_text {
      margin-bottom: 0px;
      margin-top: 20px;
   }
   legend {
      width: 0px;
   }
   .MuiInputLabel-root {
      font-size: 20px;
      top: -22px;
      left: -14px;
      color: #000000;
   }
   .MuiOutlinedInput-input {
      padding-left: 20px;
      padding-right: 20px;
   }
`;

export default GlobalStyle;

export const StyledPaper = styled(Paper)`
    margin-top: 100px;
    margin-bottom: 50px;
    padding: 50px 20px 60px;
    border-radius: 30px !important;
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 4px;
    background: rgb(250, 249, 252) !important;
    @media only screen and (max-width: 600px) {
        margin-top: 50px;
    }
`;
