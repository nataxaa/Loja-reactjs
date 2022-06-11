import {createGlobalStyle} from 'styled-components'
import ima from '../img/ima.png'

export const GlobalStyle = createGlobalStyle`

  :root{
    --background : #A1C6EA ;
    --background-header : #102E4A ;
    --color-text: #F1FAEE;
  }


    *{
      margin: 0 ;
      padding: 0 ;
     }
     
     body{
       text-align:center ;
       font-family:sans-serif ;
       margin-top:1.5rem ;
       background-image: url(${ima}) ;
       width:1200px ;
       color: var(--color-text);
       
     }
     
     .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

     .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: white;
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    }

     


`



