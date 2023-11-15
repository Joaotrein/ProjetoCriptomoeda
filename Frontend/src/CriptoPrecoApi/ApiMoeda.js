import React from "react";
import { Tabela } from "./Style.jsx";
import axios from "axios";

const moedas = "BTC-BRL,ETH-BRL,LTC-BRL,XRP-BRL"; // Only Bitcoin, Ethereum, Litecoin, and Ripple
const url = `https://economia.awesomeapi.com.br/last/${moedas}`;

export const TabelaPreco = () => {
    const [cryptoData, setCryptoData] = React.useState([]);

    React.useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                const btcData = response.data["BTCBRL"];
                const ethData = response.data["ETHBRL"];
                const ltcData = response.data["LTCBRL"];
                const xrpData = response.data["XRPBRL"];

                if (btcData && ethData && ltcData && xrpData) {
                    const btcValor = parseFloat(btcData.ask).toFixed(2);
                    const btcDia = btcData.create_date.split(" ")[0];
                    const ethValor = parseFloat(ethData.ask).toFixed(2);
                    const ethDia = ethData.create_date.split(" ")[0];
                    const ltcValor = parseFloat(ltcData.ask).toFixed(2);
                    const ltcDia = ltcData.create_date.split(" ")[0];
                    const xrpValor = parseFloat(xrpData.ask).toFixed(2);
                    const xrpDia = xrpData.create_date.split(" ")[0];

                    setCryptoData([
                        { nome: "Bitcoin", valor: btcValor, dia: btcDia },
                        { nome: "Ethereum", valor: ethValor, dia: ethDia },
                        { nome: "Litecoin", valor: ltcValor, dia: ltcDia },
                        { nome: "Ripple", valor: xrpValor, dia: xrpDia },
                    ]);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    return (
        <Tabela>
            <table>
                <thead>
                    <tr>
                        <th>Criptomoeda</th>
                        <th>Valor</th>
                        <th>Dia</th>
                    </tr>
                </thead>
                <tbody>
                    {cryptoData.map((crypto, index) => (
                        <tr key={index}>
                            <td>{crypto.nome}</td>
                            <td>R$ {crypto.valor}</td>
                            <td>{crypto.dia}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Tabela>
    );
};
