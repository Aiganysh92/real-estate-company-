import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import PropertyDetails from "./pages/PropertyDetails.jsx";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
