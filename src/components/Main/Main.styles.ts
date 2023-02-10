import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 40px;
`;

export const Header = styled.div`
    width: 700px;
    height: 4em;
    background-color: white;
    align-items: center;
    background-color: #f0f2f5;
    padding: 1em;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: black;
    display: flex;
    margin-top: 4em;

    & img{
        border-radius: 50%;
        width: 3em;
        height: 3em;
    }

    label{
        margin-left: .5em;
    }

    p {
        display: block;
        font-size: small;
        color: green;
        display: block;
        margin-left: .5em;
    }

    @media (max-width: 720px) {
        width: 400px;
        margin-top: 0;
    }


`;

export const Linha = styled.div`
    width: 700px;
    height: 500px;
    background-color: white;
    align-items: center;
    justify-content: end;
    flex-direction: column;
    background-color: #f5f2ec;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 1em;
    scrollbar-width: thin;
   scrollbar-color: #333 transparent;

   &::-webkit-scrollbar {
  width: 0.2em;
  background-color: transparent;
   }
   
   @media (max-width: 720px) {
        width: 400px;
        height: 550px;
    }
`;

export const SegundaLinha = styled.div`
    width: 700px;
    height: 4em;
    background-color: white;
    align-items: center;
    background-color: #f0f2f5;
    padding: 1em;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    @media (max-width: 720px) {
        width: 400px;
    }
`;

export const Resposta = styled.div`
    height: 100%;
    width: auto;
    box-sizing: border-box;
    height: auto;
    margin-right: 50%;
    border-radius: 10px;
    background-color: #ffffff;
    color: black;
    float: left;
    padding: .4em;
`;

export const PerguntaFeita = styled.div`
    height: 100%;
    width: auto;
    height: auto;
    resize: none;
    margin-left: 50%;
    border-radius: 10px;
    background-color: #d9fdd3;
    color: black;
    float: right;
    padding: .4em;

`;

export const PerguntaInput = styled.input`
    width: 600px;
    padding: .5em;
    border-radius: 10px;
    border: none;

    &:focus{
        box-shadow: none;
        outline: none;
    }

    @media (max-width: 720px) {
        width: 320px;
    }
`;

export const SubmitButton = styled.button.attrs({
    type:"submit"
})`
    font-size: 1.3em;
    color: grey;
    border: none;
    position: absolute;
    margin-left: 1em;
    margin-top: .29em;
    cursor: pointer;
`;