import styled from "styled-components";



export const HomeCont= styled.div`


background-color:white;
width:100%;
min-height:110vh;

display:flex;
align-items:center;
justify-content:flex-start;
flex-direction: column;
color:#682edd;


.contcont{
margin-bottom: 8em;
margin-top:1em;
display:flex;
align-items:center;
justify-content:space-evenly;
flex-direction: column;
width:100%;
height:20em;


.recive{
    // margin-top: -4em;
    
    width: 100%;
    height:7em;
    display:flex;
    align-items:center; 
    justify-content: center;
    flex-direction: column;


    h3{
        margin-left: -19em;
        color:black;
    }

    p{
        margin-top: -1em;
        color:black;
    }

}
}


.balance{
    
    width: 70%;
    display:flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h2{
      color: black; 
      
    }

    h1{
        margin-left: 15%;
        margin-top:-.5em;
        width: 50%;
        padding: 1em;
        border-radius: 20em;
        
        box-shadow: 6px 6px 3px 0pxrgb(0 0 0 / 75%);
    -webkit-box-shadow: 1px 0px 3px 0px rgb(0 0 0 / 37%);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);


    }
}



.listCont{
    
    width:95%;
    height:30em;
    display:flex;
    align-items:flex-start;
    justify-content:space-center;
    border-radius: 10px;


    box-shadow: 6px 6px 3px 0pxrgb(0 0 0 / 75%);
    -webkit-box-shadow: 1px 0px 3px 0px rgb(0 0 0 / 37%);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    overflow-x: hidden;
    overflow-y: auto;
    
    ul{
        
        
        width:100%;
        height:auto;
        
        padding:0;
        display:flex;
        align-items:center;
        justify-content:space-around;
        flex-direction: column;
       
        .card{
            color:black;
            margin-bottom:1em;
            width:90%;
            height:7em;
            display:flex;
            align-items:center;
            justify-content:space-around;
            border-top: 2px solid #682edd;
            border-radius: 10px;

            box-shadow: 6px 6px 3px 0pxrgb(0 0 0 / 75%);
            -webkit-box-shadow: 1px 0px 3px 0px rgb(0 0 0 / 37%);
            -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            
        }

        .concept{
           
            width:50%;
            h3{
                color: #682edd;
            }
            p{
                margin-top:-.6em;
                
            }
        }
        .date{
            display:flex;
            align-items:center;
            justify-content:space-around;
            // flex-direction:column;
            h2{
                color: #682edd;
            }
            width:50%;
            .d{
                
                color:#b9b7b7;
                width:50%;
                // margin-top: -1em;
                // margin-left: 8em;
                
            }

        }
    }
}

`
export const ContCards= styled.div`

    
    width:95%;
    height:30em;
    display:flex;
    align-items:flex-start;
    justify-content:space-center;
    border-radius: 10px;


    box-shadow: 6px 6px 3px 0pxrgb(0 0 0 / 75%);
    -webkit-box-shadow: 1px 0px 3px 0px rgb(0 0 0 / 37%);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    overflow-x: hidden;
    overflow-y: auto;
    
    ul{
        
        
        width:100%;
        height:auto;
        
        padding:0;
        display:flex;
        align-items:center;
        justify-content:space-around;
        flex-direction: column;
       
        .card{
            color:black;
            margin-bottom:1em;
            width:90%;
            height:7em;
            display:flex;
            align-items:center;
            justify-content:space-around;
            border-top: 2px solid #682edd;
            border-radius: 10px;

            box-shadow: 6px 6px 3px 0pxrgb(0 0 0 / 75%);
            -webkit-box-shadow: 1px 0px 3px 0px rgb(0 0 0 / 37%);
            -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            
        }

        .concept{
           
            width:50%;
            h3{
                color: #682edd;
            }
            p{
                margin-top:-.6em;
                
            }
        }
        .date{
            display:flex;
            align-items:center;
            justify-content:space-around;
            // flex-direction:column;
            h2{
                color: #682edd;
            }
            width:50%;
            .d{
                
                color:#b9b7b7;
                width:50%;
                // margin-top: -1em;
                // margin-left: 8em;
                
            }

        }
    }



`

export const NavHomeCont= styled.div`

border-radius: 10px;
width: 91%;
padding:1em;
display: flex;
align-items:center;
justify-content: space-around;
box-shadow: 6px 6px 3px 0pxrgb(0 0 0 / 75%);
    -webkit-box-shadow: 1px 0px 3px 0px rgb(0 0 0 / 14%);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    
    a{
        text-decoration: none;
     }
div{
    
    border-radius: 10px;
    background-color: #550ceb;
    color: white;
    padding:.7em;
    

    box-shadow: 6px 6px 3px 0px rgb(0 0 0 / 75%);
    -webkit-box-shadow: 2px 3px 3px 0px rgb(0 0 0 / 39%);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);


    &:active{
        box-shadow: box-shadow:7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    transform: translateY(4px);

    
}

}

`