import styled from 'styled-components';



export const LandingDiv= styled.div`



width:97%;
min-height: 95vh;
margin-top: 1em;

display:flex; 
align-items:center;
justify-content: space-around;
flex-direction: column-reverse;


`


export const Text= styled.div`

width:100%;
min-height:15em;

display:flex;
align-items:Center;
justify-content: space-around;
flex-direction: column;



button{
    width:20em;
    padding:1em;
    border:1px solid transparent;
    border-radius: 10px;
    font-size:1em;
    background-color: #550ceb;
    color:white;

    box-shadow: 6px 6px 3px 0px rgb(0 0 0 / 75%);
    -webkit-box-shadow: 2px 3px 3px 0px rgb(0 0 0 / 39%);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    &:active{
            box-shadow: box-shadow:7px 6px 28px 1px rgba(0, 0, 0, 0.24);
        transform: translateY(4px);
        
    }


   
}

`


export const SpDiv= styled.div`
width:15em;
height:15em;


display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
//border:1px solid white;

div{
    width:100%;
    height:100%;

}


`