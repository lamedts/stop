import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Router from "./router/Router";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { RiSearch2Line, RiHome5Line } from "react-icons/ri";
import Paper from "@mui/material/Paper";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#ff5722",
    },
  },
  typography: {
    fontFamily:
      'system-ui, -apple-system, "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const App = () => {
  const [value, setValue] = React.useState("");
  const ref = React.useRef(null);
  const history = useHistory();

  // React.useEffect(() => {
  //   ref.current.ownerDocument.body.scrollTop = 0;
  // }, [value, setMessages]);
  const handleChange = (event: any, newValue: string) => {
    history.push(`/${newValue}`);
    setValue(newValue);
  };

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router />
        <Box sx={{ pb: 7 }} ref={ref}>
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNavigation
              value={value}
              onChange={handleChange}
              showLabels={false}
            >
              <BottomNavigationAction label="Home" icon={<RiHome5Line />} />
              <BottomNavigationAction label="Search" icon={<RiSearch2Line />} />
            </BottomNavigation>
          </Paper>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
