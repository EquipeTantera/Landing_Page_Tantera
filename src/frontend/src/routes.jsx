import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Parceiros from "./pages/Parceiros";
import Page from "./components/page";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page backgroundColorHeader={'#D80101'} backgroundMenuHeader={'purple'}><Home /></Page>} />
        <Route path="/Parceiros" element={<Page backgroundColorHeader={'#fff'} backgroundMenuHeader={'purple'}><Parceiros /></Page>} />
      </Routes>
    </Router>
  );
}