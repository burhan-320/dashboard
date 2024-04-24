import { Box, Drawer, Toolbar, Typography } from "@mui/material";
import PrimarySearchAppBar from "./components/Header";
import Sidebar from "./components/Sidebar";
import RouterComponent from "./components/Router.Component";
const drawerWidth = 240;

function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      <Box className="flex">
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <Sidebar />
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 9 }}>
          <RouterComponent />
        </Box>
      </Box>
    </div>
  );
}

export default App;
