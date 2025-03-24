import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage"; 
import HomePage from "./pages/home_page";
import Categories from "./pages/categories";
import Farmers from "./pages/farmers";
import ProfileNav from "./pages/profileNav";
import CustomerSupport from "./pages/customerSup";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/customerSup" element={<CustomerSupport />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/home_page" element={<HomePage />} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/farmers" element={<Farmers/>} />
        <Route path="/profileNav" element={<ProfileNav/>} />
      </Routes>
    </Router>
  );
}

export default App;
