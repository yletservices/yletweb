import { Route, Routes } from "react-router-dom";
import { ToastProvider } from "./components/ui/Toast";
import PromoBar from "./components/layout/PromoBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import StartProject from "./pages/StartProject";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <ToastProvider>
      <PromoBar />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start-project" element={<StartProject />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </ToastProvider>
  );
}
