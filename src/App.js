import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./Component/navbar";
import MainRoutes from "./routes";
import { Banner } from "./Component/banner";
import Footer from "./Component/footer";
import "./styles/App.css";
function App() {
  return (
    <Router>
      <NavBar />
      <Banner />
      <MainRoutes />
      <Footer />
    </Router>
  );
}

export default App;
