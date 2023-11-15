import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    color: white;
    padding: 7px;
    cursor: pointer;
    margin: 0 0px 10px;

    @media (max-width: 768px) {
        margin: 0 0px 2px;
        font-size: 18px;
    }

    a {
        text-decoration: none;
        color: #ffffff;
        font-weight: 500;
    }
    > svg {
        margin: 0 20px;
        font-size: 25px;
    }

    &:hover {
        background-image: linear-gradient(
            to right,
            #ffb800 10px,
            rgba(255, 255, 255, 0.1) 7px
        );
    }
`;
