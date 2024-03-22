import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ProductListingPage from "./Pages/ProductListingPage/ProductListingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<ProductListingPage />} />
      </Routes>
    </>
  );
}

export default App;
