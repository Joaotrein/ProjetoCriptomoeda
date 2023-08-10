import React, { useState, useEffect } from 'react';
import { ContainerConteudo } from '../Components/Conteudo/Conteudo.jsx';
import AreaNoticia from '../../src/CriptoNewsApi/ApiNews.jsx'

export function NewsApi() {
    const [articles, setArticles] = useState([]);
    // 00fdd8432c73e937542b5254153d8c2e
    const apikey = ' ';
    const category = 'technology';
    const url = 'https://gnews.io/api/v4/search?q=bitcoin&lang=pt&country=br&max=10&apikey=' + apikey;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setArticles(data.articles);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [url]);

    return (
        <>
            <ContainerConteudo>
                {articles && articles.map((article, index) => (
                    <AreaNoticia key={index}>
                        <img src={article.image} alt={article.title}/>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <p>{article.content}</p>    
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Clique aqui para continuar lendo!</a>
                    </AreaNoticia>
                ))}
            </ContainerConteudo>
        </>
    );
}

export default NewsApi;
