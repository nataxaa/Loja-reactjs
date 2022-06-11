import { Container, StyledLink } from "./style"
import {Link, Route, Routes} from "react-router-dom"
import { Produtos } from "../Produtos"
import { FiShoppingCart } from "react-icons/fi";
import {products} from '../../Data/Data' 
import { useContext } from "react";
import { CartContext } from "../../Context/cart";


interface headerProps{
    onOpenModal:()=>void;
}


export function Home<Props>({onOpenModal}:headerProps){
    const prod = products;
    console.log(prod)

    const {quant}:any = useContext(CartContext)
   

    return(
        <Container>
            
        <header>
            <h1>Loja</h1>
            <ul>
                <li><StyledLink to="/produtos"><span className="link-produto">Produtos</span></StyledLink></li>
                <li><button
                 type="button"
                 className="cart-button"
                 onClick={onOpenModal}> <FiShoppingCart size={25}/> <span className="link">{quant}</span> 
                 </button></li>
            </ul>
        </header>
        <Routes>
            
            <Route path="/Produtos" element={<Produtos products={prod}/>}/>
        </Routes>

        <div className="cads">
        
        </div>


        </Container>
        
    )
}