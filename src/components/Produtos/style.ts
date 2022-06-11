import styled from "styled-components";




export const Cards = styled.div`

margin: 2rem auto ;
text-align:center ;
   text-align:center ;
   max-width: 70rem ;
    display: grid ;
    grid-template-columns: repeat(3, 1fr) ;
    gap:10px;
    
    margin-left:5rem ;

gap:1rem;


img{
    width:250px ;
    height:200px ;
    border-radius:10px ;

}
.card-product{
    background-color:#F9F7F3 ;
    margin-right:2rem ;
    padding-top:10px ;
    padding-bottom:70px ;
    border-radius:10px ;
    height:15rem ;
}
.description-product{
    display: flex;
    flex-direction: column;
    color:black ;
}

button{
    max-width: 100px ;
    text-align:center ;
    margin: 1rem auto;
    border:0 ;
    padding:8px ;
    border-radius:10px ;
    background-color:#1D84B5 ;
    font-family:sans-serif ;
    :hover{
        background-color:#53A2BE  ;
    }

}

`