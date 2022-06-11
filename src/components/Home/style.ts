import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`


header{
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    max-width:100% ;
}
h1{
    margin-left:4rem ;
    color:black ;
}
span.link{
    background-color:red ;
    font-size:12px ;
    padding:1.5px 2.6px ;
    border-radius:10px ;
    position:relative ;
    top:-1rem ;
    right:0.7rem ;
    
}

ul li{
    display:inline ;
    text-align:center ;
    margin-right:3rem ;
    color:black;
    border:none ;
    text-decoration:none ;
    border:0 ;
    :hover{
        opacity:0.8 ;
    }
    font-size:18px ;
}

button.cart-button{
    background:none ;
    border:none ;
    :hover{
        opacity:0.8 ;
    }
    cursor: pointer;
}
span.link-produto{
    color:black ; 
    font-size:22px ;
}
link.link{

}
    
`

export const StyledLink = styled(Link)`
text-decoration:none ;
`