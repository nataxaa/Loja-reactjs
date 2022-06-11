import { useContext } from 'react';
import Modal from 'react-modal'
import { CartContext } from '../../Context/cart';
import { Cart, Container } from './style';
import { FiMinus, FiPlus, FiX } from "react-icons/fi";

Modal.setAppElement('#root');

interface modalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}

interface itemProduct{
    id:number;
    name:string;
    price:number;
    image:string;
    qtd: number
}

export function ShopCartModal({isOpen, onRequestClose}:modalProps){
    const  {addProduct, productsCart, removeProductToCart, total, removeComplete}:any = useContext(CartContext)
    console.log(productsCart);

    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
        <Container>
        
            <div className='header-modal'>
                <h1>Carrinho de Compras</h1>
                <button className='button-close-modal' onClick={onRequestClose}><FiX/></button>
            </div>
        <Cart>
        {productsCart.map((product:itemProduct)=>(
           <div className='cart'>
               <img className='image-cart' src={product.image} alt="oi" />
               <span>{product.name}</span>
                <span>R$: {product.price}.00</span>
                <span className='quant-product'>
                    <button><FiMinus onClick={()=>removeProductToCart(product.id, product.price)} /></button>
                    {product.qtd} 
                    <button>
                        <FiPlus onClick={()=>addProduct(product.id, product.name, product.price, product.image)}/>
                    </button>
                    <button className='remove-product'>
                        <FiX onClick={()=>removeComplete(product.id, product.price, product.qtd)}/>
                    </button>
                </span>
           </div>
            ))}
            <div className='total-value'>Valor total: R$ {total}.00 </div>
        </Cart>
            
        




        </Container>
        </Modal>
    )
}