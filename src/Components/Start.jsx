import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/login/register/RegisterPage";
import { Marketplace } from "../pages/MarketPlace/Marketplace";

const Start = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default Start;
