import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Topbar } from "./global/Topbar";
import { Sidebarprop } from "./global/Sidebarprop";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Indexdash } from "./dashboard/Indexdash";
import { Team } from "./dashboard/Team";
import { Contacts } from "./dashboard/Contacts";
import { Invoices } from "./dashboard/Invoices";

export const Dashboard = () => {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebarprop isSidebar={isSidebar} />
                    <div className="content">
                        <Topbar setIsSidebar={setIsSidebar} />
                        <Routes>
                            <Route path="/" element={<Indexdash />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/invoices" element={<Invoices />} />
                        </Routes>
                    </div>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
