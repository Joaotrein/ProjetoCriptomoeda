import styled from "styled-components";

export const FormArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
`;

export const Forms = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--fundo-divisoes);
    padding: 35px 40px;
    border-radius: 2px;
    width: 25%;

    p {
        color: white;
        transition: color 0.3s;
    }

    h2 {
        font-size: 30px;
        text-align: center;
        color: var(--branco);
        margin-bottom: 30px;
        text-transform: uppercase;
    }
    
    label {
        font-size: 16px;
        color: #fff;
        margin-bottom: 5px;
        width: 100%;
    }

    input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 15px;
        border: none;
        border-bottom: 2px solid #fff;
        outline: none;
        background: transparent;
        transition: border-color 0.3s;
    }

    input:focus {
        border-color: #dea20a;
    }

    span {
        width: 100%;
        margin: 20px 0 0 10px;
        color: #fff;
    }

    a {
        text-decoration: none;
        color: orange;
        font-weight: 700;
    }

    a:hover {
        text-decoration: underline;
    }

    @media(max-width: 768px){
        width: 60%;

        
    }
`;

export const VizualizarSenha = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    cursor: pointer;
    color: #fff;
    font-size: 18px;
`;

export const CampoSenha = styled.div`
    display: flex;
`;

export const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: var(--laranja-escuro);
    color: var(--branco);
    border-radius: 2px;
    width: 100%;
    font-size: 20px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        transition: 0.5s;
        transform: scale(0.9);
        background-color: #e8b32b;
    }
`;

export const ErrorMessage = styled.div`
    border-radius: 5px;
    padding: 5px 10px;
    position: relative;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
        list-style: none;
        margin: 5px;
        color: white;
        background-color: #ff0015;
        border-color: #f5c6cb;
    }
`;
