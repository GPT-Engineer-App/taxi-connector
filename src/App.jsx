import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import DriverLogin from "./pages/DriverLogin.jsx";
import CustomerLogin from "./pages/CustomerLogin.jsx";
import DriverSignup from "./pages/DriverSignup.jsx";
import CustomerSignup from "./pages/CustomerSignup.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/driver-login" element={<DriverLogin />} />
        <Route exact path="/customer-login" element={<CustomerLogin />} />
        <Route exact path="/driver-signup" element={<DriverSignup />} />
        <Route exact path="/customer-signup" element={<CustomerSignup />} />
      </Routes>
    </Router>
  );
}

export default App;