import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { ToastProvider } from "./context/ToastContext.jsx";

function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-gray-50">
        {/* navbar */}
        <Navbar />
        {/* main content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </ToastProvider>
  );
}

export default App;
