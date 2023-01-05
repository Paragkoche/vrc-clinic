import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./Home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <NavBar />
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </Router>
);
