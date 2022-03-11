import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotFoundPage from "./NotFoundPage";
import StyledFooter from "../Components/footer/Footer";
import Header from "../Components/header/Header";
import UploadArt from "./art/form/UploadArt";
import Perfil from "./perfil/Perfil";
import { Marketplace } from "./MarketPlace/Marketplace";
import SearchPage from "./search/SearchPage";
import ProductDetail from "../pages/MarketPlace/ProductDetail";

const HomePage = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/uploadart" element={<UploadArt />} />
                <Route path="/perfil/:userId" element={<Perfil />} />
                <Route path="/search/:param" element={<SearchPage />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/product-detail/:productID" element={<ProductDetail />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <StyledFooter />
        </>
    );
}

export default HomePage;
