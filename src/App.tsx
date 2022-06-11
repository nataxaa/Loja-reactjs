import React, { useState } from 'react';
import { Home } from './components/Home';
import CartProvider from './Context/cart';
import { products } from './Data/Data';
import { ShopCartModal } from './components/shopCartModal';

export function App() {

  const [newModal, setNewModal] = useState(false)

 function handleOpenNewModal(){
      setNewModal(true)
  }
  function handleCloseNewModal(){
    setNewModal(false)
}



  return (
    <div className="App">
      

      <CartProvider>


       <Home
       
        onOpenModal={handleOpenNewModal}
       />

       <ShopCartModal
       isOpen={newModal} 
       onRequestClose={handleCloseNewModal}
       />


      </CartProvider>
    </div>
  );
}


