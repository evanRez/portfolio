import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/Theme";
// import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SkillDisplay from "../components/SkillDisplay/SkillDisplay";
// import Footer from "../components/Footer/Footer";

import { BrowserRouter as Router } from "react-router-dom";

function Home() {
  return (
    <Router>
      <div className="Home">
        <ThemeProvider theme={theme}>
          <Hero />
          <SkillDisplay />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default Home;
