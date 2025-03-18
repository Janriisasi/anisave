import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/sign_up";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/home_page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
