import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import Layout from "./Layout";
import ContactPage from "./pages/contact-page";
import AIHomeWorkPage from "./pages/ai-homework-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/ai-homework" element={<AIHomeWorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
