import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen.jsx";
import Index from "./pages/Index.jsx";
import DriverLogin from "./pages/DriverLogin.jsx";
import CustomerLogin from "./pages/CustomerLogin.jsx";
import DriverSignup from "./pages/DriverSignup.jsx";
import CustomerSignup from "./pages/CustomerSignup.jsx";
import Navbar from "./components/Navbar.jsx";
import MapView from "./pages/MapView.jsx";
import MainActivity from "./pages/MainActivity.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Display splash screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/driver-login" element={<DriverLogin />} />
        <Route exact path="/customer-login" element={<CustomerLogin />} />
        <Route exact path="/driver-signup" element={<DriverSignup />} />
        <Route exact path="/customer-signup" element={<CustomerSignup />} />
        <Route exact path="/map-view" element={<MapView />} />
        <Route exact path="/main-activity" element={<MainActivity />} />
      </Routes>
    </Router>
  );
}

export default App;