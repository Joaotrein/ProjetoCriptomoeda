import styled from "styled-components";

export const Tabela = styled.div`
    display: flex;
    justify-content: center;

    table {
        border-collapse: collapse;
        width: 70%;
        margin-top: 20px;
        background-color: #f4f4f4;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        th,
        td {
            padding: 12px;
            text-align: center;
        }

        th {
            background-color: #dea20a;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #e0e0e0;
        }
    }
`;
