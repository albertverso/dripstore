import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Produto from "./Produtos";
import Categoria from "./Categoria";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductListingPage from "./ProductListingPage";

function Rotas() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/Home" element={<Home></Home>}></Route>
                <Route path="/Produtos" element={<Produto></Produto>}></Route>
                <Route path="/Categoria" element={<Categoria></Categoria>}></Route>
                <Route path="/Lista-Produtos" element={<ProductListingPage/>} ></Route>
                <Route path="*" component={() => <h1>404 Not Found</h1>} />
            </Routes>
            <Footer />
        </>
    )

}
export default Rotas