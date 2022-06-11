import { useContext } from "react";
import { CartContext } from "../../Context/cart";
import { Cards } from "./style";
import {Route, Routes} from "react-router-dom"


interface itemProducts{
    id:number;
    name:string;
    price:number;
    image:string;
}


export function Produtos(props:any){
    const {products} = props;
    const  {addProduct, productsCart}:any = useContext(CartContext)
    console.log(products)
    
    return(

        <div className="products">
            <Cards>
            {products.map((product:itemProducts)=>(
                <div className="list-products">
                    
                    <div className="card-product">

                    <img src={product.image} alt="oi" />

                    <div className="description-product">

                    <span>Nome: {product.name}</span>
                    
                    <span>Preço: R$ {product.price}.00</span>    

                    <button onClick={()=>addProduct(product.id, product.name, product.price, product.image)}>Adicionar ao Carrinho</button>  
                    
                    </div>

                    </div>
                        
                    
                </div>
                
            ))}
            </Cards>
        </div>
    )
}