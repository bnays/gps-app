import { Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
    link?: string;
    buttonLabel: string | JSX.Element;
    buttonVariant: "outlined" | "contained";
    click: Function;
}

interface StyleProps {
    theme: any;
}

const ButtonWrapper = styled.div<StyleProps>`
    .MuiButton-contained {
        background-color: ${(props) => props.theme.palette.primary.main};
        border: 0;
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        color: ${(props) => props.theme.palette.primary.contrastText};
        height: 52px;
        padding: 0 50px;
        font-weight: 700;
        text-transform: capitalize;
        width: 100%;
        max-width: 350px;
        &:hover {
            background-color: ${(props) => props.theme.palette.primary.light};
            box-shadow: 0 3px 5px 2px rgb(176 159 227 / 22%);
        }
    }
    .MuiButton-outlined {
        background-color: ${(props) => props.theme.palette.primary.contrastText};
        border-radius: 10px;
        border: 1px solid ${(props) => props.theme.palette.primary.main};
        box-shadow: none;
        color: ${(props) => props.theme.palette.primary.main};
        height: 52px;
        padding: 0 50px;
        font-weight: 700;
        text-transform: capitalize;
        &:hover {
            background-color: ${(props) => props.theme.palette.primary.light};
            color: ${(props) => props.theme.palette.primary.contrastText};
            box-shadow: 0 3px 5px 2px rgb(176 159 227 / 22%);
        }
    }
`;

const CustomButton: React.FC<ButtonProps> = ({ link, buttonLabel, buttonVariant, click }: ButtonProps) => {
    const theme = useTheme();

    return (
        <ButtonWrapper theme={theme}>
            {link ? (
                <Button component={Link} to={link} variant={buttonVariant} color="primary" onClick={() => click()}>
                    {buttonLabel}
                </Button>
            ) : (
                <Button variant={buttonVariant} color="primary" onClick={() => click()} type="submit">
                    {buttonLabel}
                </Button>
            )}
        </ButtonWrapper>
    );
};

export default CustomButton;
