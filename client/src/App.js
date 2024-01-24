import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dogs from "./Dogs/Dogs";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Playdates from "./Playdates/Playdates";
import Profile from "./Profile/Profile";

const theme = createTheme({
  palette: {
    background: {
      default: "#E9EBF1",
    },
  },
  typography: {
    fontFamily: [
      "Nunito",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const BodyContent = () => {
  // const { isAuthed } = useAuthContext();

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isAuthed) {
  //     navigate("/");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isAuthed]);

  return (
    <>
      <Box sx={{ height: "100vh" }}>
        <Routes>
          <Route path="/" Component={Login} exact />
          <Route path="/home" Component={Home} exact />
          <Route path="/playdates" Component={Playdates} />
          <Route path="/profile" Component={Profile} />
          <Route path="/dogs" Component={Dogs} />
          {/* {!isAuthed && (
            <Route path="/*" element={<Navigate to="/" replace />} />
          )} */}
        </Routes>
      </Box>
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        {/* <AuthProvider> */}
        <BodyContent />
        {/* </AuthProvider> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
