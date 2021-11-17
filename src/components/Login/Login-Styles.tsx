import styled from 'styled-components';

export const LoginDiv = styled.div` 
background-color: #f8f8f8;
height : 100vh;
width: 100vw;
display: grid;
place-items: center;
.login__container {
    padding : 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow : 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px  3px rgba(0, 0, 0, 0.12);
    >img {
        height: 100px;
        object-fit: cover;
        margin-bottom: 40px ;
    }
     >Button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48;
        color: white;
         img {
            width: 20px;
            height: 20px;
            margin-left: 10px;;
        }
    }
}
` 