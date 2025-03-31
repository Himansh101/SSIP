import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import MultiStepForm from "./pages/MultiStepForm";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar.jsx";
import Sidebar from "./scenes/global/Sidebar.jsx";
import Dashboard from "./scenes/dashboard";
import Line from "./scenes/line";
import Calendar from "./scenes/calendar/calendar";

const App = () => {
  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="app">
            
            <main className="content">
              
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/question" element={<MultiStepForm />} />
                <Route path="/login" element={<AuthPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/line" element={<Line />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
