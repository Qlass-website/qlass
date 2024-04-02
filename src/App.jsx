import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import Layout from "./Layout";
import ContactPage from "./pages/contact-page";
import AIHomeWorkPage from "./pages/ai-homework-page";
import GallaryPage from "./pages/gallary-page";
import NotFoundPage from "./pages/not-found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/ai-tutor" element={<AIHomeWorkPage />} />
        <Route path="/our-work" element={<GallaryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
