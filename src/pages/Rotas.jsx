import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductListingPage from "./ProductListingPage";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import SighUp from "./SighUp";

function Rotas() {
    const location = useLocation();
    // Definir o cabeçalho com base no caminho atual
    const isLoginPage = location.pathname === '/Login' || location.pathname === '/SighUp';
    
    return (
        <>
            <Header login={isLoginPage} />
                <Routes>
                    <Route path="/dripstore/" element={<Navigate to="/Home" />} />
                    <Route path="/" element={<Navigate to="/Home" />}></Route>
                    <Route path="/Home" element={<Home></Home>}></Route>
                    <Route path="/Lista-Produtos" element={<ProductListingPage/>}></Route>
                    <Route path="*" element={<PageNotFound></PageNotFound>} />
                    <Route path="/Login" element={<Login></Login>}></Route>
                    <Route path="/SighUp" element={<SighUp></SighUp>}></Route>
                </Routes>
            <Footer />
        </>
    )
}
export default Rotas
