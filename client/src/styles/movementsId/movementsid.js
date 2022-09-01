import styled from "styled-components";


export const MovementIDCont= styled.div`

background-color:white;
width:100%;
min-height:110vh;

display:flex;
align-items:center;
justify-content:flex-start;
flex-direction: column;
color: black;

.card{
    color:black;
    margin-bottom:1em;
    width:90%;
    height:10em;
    display:flex;
    align-items:center;
    justify-content:space-around;
    border-top: 2px solid #682edd;
    border-radius: 10px;

    box-shadow: 6px 6px 3px 0pxrgb(0 0 0 / 75%);
    -webkit-box-shadow: 1px 0px 3px 0px rgb(0 0 0 / 37%);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    

    .ContDelete{
        
        width:50%;
        height: 8em;

        div{
            margin-top: -.5em;
            margin-left: 1em;
            margin-bottom: 2em;
            width:80%;
            height: 2em;
            display: flex;
            align-items:center;
            justify-content: space-around;

            a{
                border-radius: 50%;
                color: white;
                font-size: 1.4em;
                background-color: #682edd;
                width: 1.5em;
                height:1.5em;
                display:flex;
                align-items:center;
                justify-content:center;
                box-shadow: 6px 6px 3px 0pxrgb(0 0 0 / 75%);
                -webkit-box-shadow: 3px 3px 3px 0px rgb(0 0 0 / 33%);
                -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

                &:active{
                    box-shadow: box-shadow:7px 6px 28px 1px rgba(0, 0, 0, 0.24);
                transform: translateY(4px);
            
                
            }
            }
        }
    }


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