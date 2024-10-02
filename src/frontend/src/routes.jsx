import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Partner from "./pages/Partner";
import Page from "./components/page";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Events from "./pages/Events";
import AboutEvent from "./pages/AboutEvent";
import EventRegistration from "./pages/EventRegistration";
import MembershipPlan from "./pages/MembershipPlan";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page backgroundColorHeader={'#D80101'} backgroundMenuHeader={'purple'}><Home /></Page>} />
        <Route path="/parceiros" element={<Page backgroundColorHeader={'#fff'} backgroundMenuHeader={'purple'}><Partner /></Page>} />
        <Route path="/produtos/:id" element={<Page backgroundColorHeader={'#fff'} backgroundMenuHeader={'purple'}><Product /></Page>} />
        <Route path="/produtos" element={<Page backgroundColorHeader={'#fff'} backgroundMenuHeader={'purple'}><Products /></Page>} />
        <Route path="/eventos" element={<Page backgroundColorHeader={'#fff'} backgroundMenuHeader={'purple'}><Events /></Page>} />
        <Route path="/eventos/:id" element={<Page backgroundColorHeader={'#fff'} backgroundMenuHeader={'purple'}><AboutEvent /></Page>} />
        <Route path="/eventos/:id/inscricao" element={<Page backgroundColorHeader={'#fff'} backgroundMenuHeader={'purple'}><EventRegistration /></Page>} />
        <Route path="/planos-de-socio" element={<Page backgroundColorHeader={'#fff'} backgroundMenuHeader={'purple'}><MembershipPlan /></Page>} />
      </Routes>
    </Router>
  );
}