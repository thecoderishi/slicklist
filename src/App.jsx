import Router from './components/router/router'
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#494c7d',
            dark: '#393964'
        },
        secondary: {
            main: '#2a9461',
            dark: '#006c27'
        },
        primaryLight: {
            main: '#dbece2',
            contrastText: "#616161"
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme} >
            <Router />
        </ThemeProvider>
    )
}

export default App
