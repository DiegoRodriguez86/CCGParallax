import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Topbar } from "./global/Topbar";
import { Sidebarprop } from "./global/Sidebarprop";

export const Dashboard = () => {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebarprop />
                    <div className="content">
                        <Topbar />
                    </div>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
