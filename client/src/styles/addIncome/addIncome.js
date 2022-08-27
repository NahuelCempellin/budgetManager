import styled from 'styled-components';


export const IncomeCont= styled.div`

background-color:white;
width:100%;
min-height:110vh;

display:flex;
align-items:center;
justify-content:flex-start;
flex-direction: column;
color: black;





`

export const BackCont= styled.div`

background-image: url('https://images.pling.com/img/00/00/65/57/40/1752908/2019-purple-abstract-4k-hd-design-wallpaper-1920x1080-10wallpaper.com.jpg');
padding:2em;
display:flex;
align-items:center;
justify-content: flex-start;
width: 100%;
height: 3em;

button{
    width:5em;
    
    border:1px solid transparent;
    margin-left: -1.5em;
    font-size:2em;
    color: white;
    background-color: transparent;

    &:active{
            box-shadow: box-shadow:7px 6px 28px 1px rgba(0, 0, 0, 0.24);
        transform: translateY(4px);
        
    }

`


export const Formadd = styled.div`


width: 90%;
height: 40em;


display:flex; 
align-items:center;
justify-content: space-around;
flex-direction: column;

border-radius: 10px;
box-shadow: 6px 6px 3px 0pxrgb(0 0 0 / 75%);
    -webkit-box-shadow: 1px 0px 3px 0px rgb(0 0 0 / 37%);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);



input{
    padding: 2em;
    font-size: 1em;
    width: 80%;
    // border-radius: 10px;
    border: 1px solid transparent;
    
    color: #682edd;
    border-bottom: 2px solid #682edd;
    
    // box-shadow: 6px 6px 3px 0pxrgb(0 0 0 / 75%);
    // -webkit-box-shadow: 1px 0px 3px 0px rgb(0 0 0 / 37%);
    // -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    

}

`

export const TitleCont= styled.div`

width: 90%;
display:flex;
align-itmes:center;
justify-content: flex-start;
margin-top:2em;
margin-bottom: 2em;
color: #682edd;


`



export const ButtonCont= styled.div`



width:80%;
height: 6em;
margin-top: 2em;

display:flex;
align-items:center;
justify-content: space-around;


button{
    padding:1em;
    width:45%;
    border-radius: 10px;
    border: 1px solid transparent;
    background-color:#682edd;
    color: white;
    font-size: 1em;
    box-shadow: 6px 6px 3px 0pxrgb(0 0 0 / 75%);
    -webkit-box-shadow: 3px 4px 3px 0px rgb(0 0 0 / 17%);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    &:active{
        box-shadow: box-shadow:7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    transform: translateY(4px);
    
}
}

`