import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage"; 
import HomePage from "./pages/home_page";
import Categories from "./pages/categories";
import Farmers from "./pages/categories";
import Menu from "./pages/menu";
import Profile from "./pages/profile";


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/farmers" element={<Farmers/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
