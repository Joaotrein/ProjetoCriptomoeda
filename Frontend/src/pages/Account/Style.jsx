import styled from "styled-components";

export const InformationsContainer = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
    align-items: center;
    background-color: var(--fundo-conteudos);
    width: 50%;
    margin: auto;
    border-radius: 15px 15px 0px 0px;
    height: auto;
    flex-direction: column;

    h2{
        font-size: 30px;
        color: var(--laranja-escuro);
    }

    li{
        padding: 8px;
        list-style: none;
        font-size: 18px;
        font-weight: bold;
    }
`;
