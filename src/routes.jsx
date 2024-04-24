import { Home } from "@mui/icons-material";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const router = [
  {
    name: "Hom",
    path: "/hom",
    component: <Home />,
  },
  {
    name: "About",
    path: "/about",
    component: <About />,
  },
  {
    name: "Contact",
    path: "/contact",
    component: <Contact />,
  },
];
