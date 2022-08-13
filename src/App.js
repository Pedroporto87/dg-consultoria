import React from "react";
import { BrowserRouter as Router} from 'react-router-dom'
import { NavBar } from "./Component/navbar";
import MainRoutes from './routes'
import { Banner } from "./Component/Banner";
function App() {
  return (
    <Router>
      <NavBar />
      <Banner />
      <MainRoutes />
    </Router>
  );
}

export default App;
