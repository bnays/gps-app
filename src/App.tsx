import { Container, createTheme, ThemeProvider } from "@mui/material";
import Routing from "./router";
import GlobalStyle from "./styles/globalStyles.styled";

const theme = createTheme({
    typography: {
        fontFamily: "ProximaNova",
        allVariants: {
            color: "#333333"
        },
        h6: {
            fontSize: "20px",
            fontWeight: "bold"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "10px"
                },
                contained: {
                    fontWeight: "bold",
                    textTransform: "capitalize"
                },
                outlined: {
                    fontWeight: "bold",
                    textTransform: "capitalize"
                },
                text: {
                    textTransform: "capitalize"
                }
            }
        }
    },
    palette: {
        primary: {
            main: "#2196f3",
            contrastText: "#FFFFFF"
        },
        secondary: {
            main: "#FAF9FC"
        },
        text: {
            primary: "#333333",
            secondary: "#2196f3"
        },
        error: {
            main: "#E63030"
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <main>
                <Container maxWidth="xl">
                    <GlobalStyle theme={theme} />
                    <Routing />
                </Container>
            </main>
        </ThemeProvider>
    );
}

export default App;
