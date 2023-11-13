import styled from "styled-components";

export const Cabecalho = styled.div`
    width: auto;
    background-color: var(--fundo-divisoes);
    box-shadow: 2px 8px 2px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    text-align: center;
    height: 15vh;

    h1 {
        color: var(--branco);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 50px;
        padding: 0;
        font-weight: 900;
        text-transform: uppercase;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--fundo-palavras-destaque);
        font-weight: 900;
        font-size: 50px;
        text-transform: uppercase;
    }

    @media (max-width: 425px) {
        h1,
        span {
            font-size: 30px;
        }
    }
`;
