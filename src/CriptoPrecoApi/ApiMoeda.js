const axios = require('axios');

// Api usada - https://docs.awesomeapi.com.br

const moedas = 'BTC-BRL,ETH-BRL';

const url = `https://economia.awesomeapi.com.br/last/${moedas}`;

axios.get(url)
    .then(response => {
        const btcData = response.data['BTCBRL'];
        const ethData = response.data['ETHBRL'];
        if (btcData && ethData) {
            const btcValor = btcData.ask;
            const btcDia = btcData.create_date.split(' ')[0]; // Obtém apenas a parte da data
            const ethValor = ethData.ask;
            const ethDia = ethData.create_date.split(' ')[0]; // Obtém apenas a parte da data
            console.log(`Valor do Bitcoin (BTC) em ${btcDia}: R$ ${btcValor}`);
            console.log(`Valor do Ethereum (ETH) em ${ethDia}: R$ ${ethValor}`);
        } else {
          console.log('Dados não encontrados.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });