import './App.css';
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Survey from "./pages/survey";
import Solutions from "./pages/solutions";


function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/Survey"} element={<Survey />} />
          <Route path={"/Solutions"} element={<Solutions />} />
      </Routes>

  );
}

export default App;
