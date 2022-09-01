import styled from 'styled-components'



export const LoginCont= styled.div`


background-color:white;

width:100%;
min-height:100vh;

h2{
    color:#682edd;
    font-size: 2em;
 }

.inputs{
    
    width:100%;
    height:7em;

    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column;
}

 .inner{
    


    width:100%;
    height:45em;

    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column;


    .buttons{

        margin-top:4em;
       
        width:100%;
        height:7em;

        display:flex; 
        align-items:center;
        justify-content:space-between;
        flex-direction: column;


        button{
            width:90%;
            padding:1em;
            border:1px solid transparent;
            border-radius: 20em;
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
    }


    input{
        width:80%;
        padding:1em;
        border-radius: 10px;

        border:2px solid #550ceb;
        color:#550ceb;
    }
 }

.logCont{
    
    
    width:100%;
    min-height: 40em;
}

.nav{
    background-image: url('https://images.pling.com/img/00/00/65/57/40/1752908/2019-purple-abstract-4k-hd-design-wallpaper-1920x1080-10wallpaper.com.jpg');
    padding:2em;
    display:flex;
    align-items:center;
    justify-content: flex-start;

    button{
        width:5em;
        
        border:1px solid transparent;
        margin-left: -2.5em;
        font-size:2em;
        color: white;
        background-color: transparent;
    
        &:active{
                box-shadow: box-shadow:7px 6px 28px 1px rgba(0, 0, 0, 0.24);
            transform: translateY(4px);
            
        }


 
}

`


export const RegisterCont= styled.div`


background-color:white;

width:100%;
min-height:100vh;

h2{
    color:#682edd;
    font-size: 2em;
    margin-top:2em;
    margin-bottom: 5em;
 }

.inputs{
    
    width:100%;
    height:40em;
    
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column;
}

 .inner{
    


    width:100%;
    height:45em;

    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column;


    .buttons{

        margin-top:4em;
       
        width:100%;
        height:7em;

        display:flex; 
        align-items:center;
        justify-content:space-between;
        flex-direction: column;


        button{
            width:90%;
            padding:1em;
            border:1px solid transparent;
            border-radius: 20em;
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
    }


    input{
        width:80%;
        padding:1em;
        border-radius: 10px;

        border:2px solid #550ceb;
        color:#550ceb;
    }
 }

.logCont{
    
    
    width:100%;
    min-height: 40em;
}

.nav{
    background-image: url('https://images.pling.com/img/00/00/65/57/40/1752908/2019-purple-abstract-4k-hd-design-wallpaper-1920x1080-10wallpaper.com.jpg');
    padding:2em;
    display:flex;
    align-items:center;
    justify-content: flex-start;

    button{
        width:5em;
        
        border:1px solid transparent;
        margin-left: -2.5em;
        font-size:2em;
        color: white;
        background-color: transparent;
    
        &:active{
                box-shadow: box-shadow:7px 6px 28px 1px rgba(0, 0, 0, 0.24);
            transform: translateY(4px);
            
        }


 
}

`