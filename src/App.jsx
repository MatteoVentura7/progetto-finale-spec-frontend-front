import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import DefaultLayout from "./layouts/DefaultLayout";
// Pages
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<ContactUs />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
