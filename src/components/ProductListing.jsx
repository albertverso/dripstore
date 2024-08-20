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
    const [page, setPage] = useState(1); // Página inicial
    const loadingProducts = location.pathname === '/Lista-Produtos'
    const [limit, setLimit] = useState( loadingProducts ? 30 : 8); // Número de itens por página
  

    const calculateDiscountPercentage = (price, price_with_discount) => {
        if(price_with_discount === 0){
            return null
        }
        const discount = price - price_with_discount;
        const percentage = (discount / price) * 100;
        return percentage.toFixed(0); // Retorna com duas casas decimais
    };

    useEffect(() => {
        const loadProducts = async () => {
        try {
            const data = await GetProduct(page, limit);
            localStorage.setItem('totalProducts', data.total);
            setProducts(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        };

        loadProducts();
    }, [page, limit]);
    
    const hasNextPage = page * limit < localStorage.getItem('totalProducts');

    if (loading) return SkeletonLoading()
    if (error) return <div>Erro: {error}</div>;
    return(
        <div className="flex flex-col gap-8">
            <div className={`grid grid-cols-2 gap-5 ${loadingProducts ? 'md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3' : ' md:grid-cols-4'}`}>
                {products.map((product) => (
                    <ProductCard desconto={calculateDiscountPercentage(product.price, product.price_with_discount)} img={product.images[0].path} preco={product.price} precoDesconto={product.price_with_discount} marca={product.name} categoria={product.categories[0].name} genero={product.categories[1].name}/>
                ))}
            </div>
            {loadingProducts &&
                <div className="flex flex-row gap-2 items-center justify-center">
                    <button className="bg-pink-600 p-2 hover:bg-pink-900 rounded-md text-white font-semibold" onClick={() => {setPage((prevPage) => prevPage - 1), window.scrollTo(0, 0), setLoading(true)}} disabled={page === 1}>
                        Página Anterior
                    </button>
                    {hasNextPage && 
                        <button className="bg-pink-600 p-2 hover:bg-pink-900 rounded-md text-white font-semibold"  onClick={() =>{ setPage((prevPage) => prevPage + 1), window.scrollTo(0, 0), setLoading(true);}}>
                            Próxima Página
                        </button>
                    }
                </div>
            }
        </div>
    )
}