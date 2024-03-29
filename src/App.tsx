import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/nieru-portfolio/" element={<Layout />}>
          <Route path="/nieru-portfolio/" element={<Home />} index />
          <Route path="/nieru-portfolio/portfolio" element={<Portfolio/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
