import "./App.css";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/Theme";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import ProjectDetails from "./Pages/ProjectDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ProjectDetails" component={ProjectDetails} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
          </Switch>
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
