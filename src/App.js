import React from "react";
import { BrowserRouter as Router} from 'react-router-dom'
import { NavBar } from "./Component/navbar";
import MainRoutes from './routes'
function App() {
  return (
    <Router>
      <NavBar />
      <MainRoutes />
    </Router>
  );
}

export default App;
