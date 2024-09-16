import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Partner from "./pages/Partner";
import Page from "./components/page";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page backgroundColorHeader={'#D80101'} backgroundMenuHeader={'purple'}><Home /></Page>} />
        <Route path="/parceiros" element={<Page backgroundColorHeader={'#fff'} backgroundMenuHeader={'purple'}><Partner /></Page>} />
      </Routes>
    </Router>
  );
}