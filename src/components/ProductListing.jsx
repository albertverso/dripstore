import ProductCard from "./ProductCard";
import tenis from '../assets/TenisProduto.png'

export default function ProductListing({details}) {
    return(
        <div className={`grid grid-cols-2 gap-5 ${details ? 'md:grid-cols-2 xl:grid-cols-3' : ' md:grid-cols-3 xl:grid-cols-4'}`}>
            <ProductCard desconto="30" img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
            <ProductCard desconto="30" img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
            <ProductCard desconto="30" img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
            <ProductCard img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
            <ProductCard desconto="30" img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
            <ProductCard img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
            <ProductCard desconto="30" img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
            <ProductCard img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
            {details && <>
                <ProductCard desconto="30" img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
                <ProductCard desconto="30" img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
                <ProductCard desconto="30" img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
                <ProductCard img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
                <ProductCard desconto="30" img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
                <ProductCard img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
                <ProductCard desconto="30" img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
            </>
            }
        </div>
    )
}