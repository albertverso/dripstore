import ProductCard from "./ProductCard";
import React, { useState, useEffect } from 'react';
import { GetProduct } from "../services/productService";
import SkeletonLoading from "./SkeletonLoading";
import { useLocation } from "react-router-dom";

export default function ProductListing() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const loadingProducts = location.pathname === '/Lista-Produtos'

    const calcularPorcentagemDesconto = (valorNormal, valorComDesconto) => {
        if(valorComDesconto === 0){
            return null
        }
        const desconto = valorNormal - valorComDesconto;
        const porcentagem = (desconto / valorNormal) * 100;
        return porcentagem.toFixed(0); // Retorna com duas casas decimais
    };

    useEffect(() => {
        const loadProducts = async () => {
        try {
            const data = await GetProduct();
            setProducts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        };

        loadProducts();
    }, []);
    
    if (loading) return SkeletonLoading()
    if (error) return <div>Erro: {error}</div>;
    return(
        <div className={`grid grid-cols-2 gap-5 ${loadingProducts ? 'md:grid-cols-2 xl:grid-cols-3' : ' md:grid-cols-3 xl:grid-cols-4'}`}>
            {products.data.map((product) => (
                <ProductCard desconto={calcularPorcentagemDesconto(product.price, product.price_with_discount)} img={product.images[0].path} preco={product.price} precoDesconto={product.price_with_discount} marca={product.name} categoria={product.categories[0].name} genero={product.categories[1].name}/>
            ))}
        </div>
    )
}