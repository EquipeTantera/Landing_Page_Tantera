import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Partner from "./pages/Partner";
import Page from "./components/page";
import Product from "./pages/Product";
import Products from "./pages/Products";
import AboutUs from "./pages/About-us";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page backgroundColorHeader={'#D80101'} backgroundMenuHeader={'purple'}><Home /></Page>} />
        <Route path="/parceiros" element={<Page backgroundColorHeader={'#fff'} backgroundMenuHeader={'purple'}><Partner /></Page>} />
        <Route path="/produtos/:id" element={<Page backgroundColorHeader={'#fff'} backgroundMenuHeader={'purple'}><Product /></Page>} />
        <Route path="/produtos" element={<Page backgroundColorHeader={'#fff'} backgroundMenuHeader={'purple'}><Products /></Page>} />
        <Route path="/About-us" element={<Page backgroundColorHeader={'#fff'} backgroundMenuHeader={'purple'}><AboutUs /></Page>} />
      </Routes>
    </Router>
  );
}