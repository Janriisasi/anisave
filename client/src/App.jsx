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
import SellingCategory from "./pages/sellingCaterogry";
import SellingProduct from "./pages/sellingProduct";
import CustomerSupport from  "./pages/customerSup";
import TermsAndConditions from "./pages/termsandcon";

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
        <Route path="/infoProduct/:vegetableName" element={<InfoProduct />} />
        <Route path="/sellingCategory" element={<SellingCategory/>} />
        <Route path="/sellingProduct" element={<SellingProduct/>} />
        <Route path="/customersupport" element={<CustomerSupport />} />
        <Route path="/termsandcon" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
