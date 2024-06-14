import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Page from "./components/page";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page backgroundHeader={'#D80101'}><Home /></Page>} />
      </Routes>
    </Router>
  );
}