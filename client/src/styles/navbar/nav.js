import styled from 'styled-components';

export const Nav= styled.div`



width:100%;
display:flex;
align-items:center;
justify-content: flex-end;
padding:1em;
margin-top:-4em;

`

export const LogoDiv=styled.div`


width: 10em;
height: 3em;
display:flex; 
align-items:center;
justify-content: space-around;
font-size: 1.3em;

&:hover{
cursor: pointer;
}

.image{
    color: #dfb409;
    font-size:1.5em;
}

`

export const LoginNav= styled.div`


width:5em;
height:3em;
display:flex; 
align-items:center;
justify-content: space-around;
a{
    color:white;
    text-decoration:none;

    
&:hover{
    cursor: pointer;
    }
}


`