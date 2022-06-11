import styled from "styled-components";

export const Container = styled.div`
font-family:sans-serif ;
display:grid ;
flex-direction:row ;

h1{
    color: black;
    margin-bottom: 1rem; 
}

.header-modal{
    display:block;
}
button.button-close-modal{
     color: #272932 ;
     position:absolute ;
     right:1rem ;
     top:1rem ;
     background:none ;
     border: none;
     font-size:20px ;
     cursor: pointer;
     :hover{
         opacity:0.8 ;
     }
}

`
export const Cart = styled.div`

    font-family:sans-serif ;
    display:grid ;
    flex-direction:row ;
    
    button{
        margin-right:4px ;
        margin-left: 4px ;
    }

    button.remove-product{
        position:relative ;
        top:-2rem ;
        right:-0.8rem ;
        margin-left: 1.7rem ;
        border:0 ;
        color:red ;
        font-size:15px ;
        cursor: pointer;
        background:none ;
        :hover{
            opacity:0.8 ;
        }
    }

    div.cart{
        display:grid ;
        grid-template-columns:1fr 1fr 2fr 1fr ;
        align-items:center ;
        color:black ;
        background-color: #E7ECEF;
        border-radius:10px ;
        margin-bottom:10px ;
        padding:15px ;
        img.image-cart{
            width:100px ;
            border-radius:10px ;
        }
    }


    .quant-product{
        align-items:center ;
    }

    .total-value{
        color:black ;
    }
`