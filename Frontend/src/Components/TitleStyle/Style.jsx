import styled from "styled-components";

export const Title = styled.h1`
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 900;
        font-size: 40px;
        padding: 4vh;
        text-transform: uppercase;
        text-align: center;
        line-height: 1;
        overflow: hidden;
    }

    span {
        position: relative;
        overflow: hidden;
        display: block;
        line-height: 1.2;
    }

    span::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: #ffb800;
        animation: a-ltr-after 1.5s cubic-bezier(0.77, 0, 0.18, 1) forwards;
        transform: translateX(-101%);
    }

    span::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: #00071f;
        animation: a-ltr-before 1.5s cubic-bezier(0.77, 0, 0.18, 1) forwards;
        transform: translateX(0);
    }

    span:nth-of-type(1)::before,
    span:nth-of-type(1)::after {
        animation-delay: 0.5s;
    }

    span:nth-of-type(2)::before,
    span:nth-of-type(2)::after {
        animation-delay: 1s;
    }

    @keyframes a-ltr-after {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(101%);
        }
    }

    @keyframes a-ltr-before {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(200%);
        }
    }

    @media (max-width: 375px) {
        h1 {
            font-size: 25px;
        }
    }
`;
