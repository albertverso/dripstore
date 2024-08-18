import ProductCard from "./ProductCard";
import tenis from '../assets/TenisProduto.png'
import React, { useState, useEffect } from 'react';
import { GetProduct } from "../services/productService";

export default function ProductListing({details}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const calcularPorcentagemDesconto = (valorNormal, valorComDesconto) => {
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

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;
    return(
        <div className={`grid grid-cols-2 gap-5 ${details ? 'md:grid-cols-2 xl:grid-cols-3' : ' md:grid-cols-3 xl:grid-cols-4'}`}>
            {console.log(products.data.map((product) => product.images[0].path))}
            {products.data.map((product) => (
                //<ProductCard desconto={calcularPorcentagemDesconto(product.price, product.price_with_discount)} img={product.image[0]} preco={product.price} precoDesconto={product.price_with_discount} marca={product.name} categoria={product.category_ids[0].name} genero="Masculino"/>
                <ProductCard desconto={calcularPorcentagemDesconto(product.price, product.price_with_discount)} img={product.images[0].path} preco={product.price} precoDesconto={product.price_with_discount} marca={product.name} categoria={'Tenis'} genero="Masculino"/>
            ))}
        </div>
    )
}