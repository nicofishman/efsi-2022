import { createTheme } from "@mui/material/styles";
import { ThemeProvider as MuiThemeContext } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import React, { createContext } from 'react';


function makeTheme() {
    return (createTheme({
        typography: {
            fontFamily: "lato, sans-serif"
        },
        palette: {
            success: {
                main: '#3fd7ad'
            },
            warning: {
                main: '#d2d531',
            }
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    "&::-webkit-scrollbar": {
                        width: 10,
                    },
                    "&::-webkit-scrollbar-track": {
                        background: "transparent"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#032541",
                        borderRadius: 50,
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#063e6b"
                    }
                }
            }
        }
    })
    );
}

const ThemeContext = createContext(undefined);

export default function ThemeProvider({ children }) {
    const theme = makeTheme();

    return (
        <ThemeContext.Provider value={{}}>
            <MuiThemeContext theme={theme}><CssBaseline />{children}</MuiThemeContext>
        </ThemeContext.Provider >);
}