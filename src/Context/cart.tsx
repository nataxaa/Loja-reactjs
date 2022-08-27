import { createContext, useContext, useState } from "react";
interface itemProps{
    id: number,
    name: string,
    price: number, 
    image: string,
    qtd: number
} 
export const CartContext = createContext({});

export default function CartProvider({ children }:any){

    const [productsCart, setProductCart] = useState<itemProps[]>([]);
    const [total, setTotal] = useState(0);
    const [quant, setQuant] = useState(0);

     function addProduct(id:number, name: string, price: number, image: string){
        const copyProduct = [...productsCart];

        const item = copyProduct.find((products)=>products.name == name)

        if(!item){
            copyProduct.push({id: id, name: name, price: price,image: image, qtd: 1})
            const aux = quant ;
            setQuant(aux + 1)
        }else{
            item.qtd = item.qtd + 1 ;
            const aux = quant ;
            setQuant(aux + 1)
        }
        const aux = total
        setTotal(aux + price)  
        setProductCart(copyProduct)
    }

    function removeProductToCart(id:number, price:number) {
        const copyProductsCart = [...productsCart];
    
        const item = copyProductsCart.find((product) => product.id === id);
    
        if (item && item.qtd > 1) {
          item.qtd = item.qtd - 1;
          const aux1 = total
          setTotal(aux1 - price)
          
          const aux = quant ;
          setQuant(aux - 1)
          
          
          setProductCart(copyProductsCart);
        } else {
          const arrayFiltered = copyProductsCart.filter(
            (product) => product.id !== id
          );
          const aux = quant ;
          setQuant(aux - 1)
          const aux1 = total
          setTotal(aux1 - price) 
          setProductCart(arrayFiltered);
        }
        
      }

      function removeComplete(id:number, price:number, qtd:number) {
        const copyProductsCart = [...productsCart];

          const arrayFiltered = copyProductsCart.filter(
            (product) => product.id !== id
          );
            
          const aux = quant ;
          setQuant(aux - qtd)

          const aux1 = total
          setTotal(aux1 - price*qtd) 
          setProductCart(arrayFiltered);
      }

      

     
         
    

    return(
        <CartContext.Provider value={{productsCart, addProduct, removeProductToCart, total, removeComplete, quant}}>
            {children}
        </CartContext.Provider>
    )
}



