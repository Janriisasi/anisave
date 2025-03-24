import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/home_page";
import Categories from "./pages/categories";
import Farmers from "./pages/farmers";
import ProfileNav from "./pages/profileNav";
import Vegetable from "./category/Vegetables";
import Fruit from "./category/Fruits";
import Grain from "./category/Grains";
import Herb from "./category/Herbs";
import InfoProduct from "./infoProduct/infoProduct";
import SellingProduct from "./pages/sellingProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home_page" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/farmers" element={<Farmers />} />
        <Route path="/profileNav" element={<ProfileNav />} />
        <Route path="/profileNav/:farmer_NameInfo" element={<ProfileNav />} />
        <Route path="/vegetables" element={<Vegetable />} />
        <Route path="/Fruits" element={<Fruit />} />
        <Route path="/Grains" element={<Grain />} />
        <Route path="/Herbs" element={<Herb />} />
        <Route path="/sellingProduct" element={<SellingProduct/>} />
        <Route path="/infoProduct/:vegetableName" element={<InfoProduct />} />
      </Routes>
    </Router>
  );
}

export default App;