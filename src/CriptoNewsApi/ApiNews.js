import React, { useState, useEffect } from 'react';
import { Cardnoticia, CardContainer } from '../../src/CriptoNewsApi/ApiNews.jsx';

export function NewsApi() {
    const [articles, setArticles] = useState([]);
    const apikey = '00fdd8432c73e937542b5254153d8c2e';
    const category = 'technology';
    const url = 'https://gnews.io/api/v4/search?q=bitcoin&lang=pt&country=br&max=10&apikey=' + apikey;

    const redirectToURL = (url) => {
        window.open(url, '_blank');
    };

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
            <CardContainer>
                {articles && articles.map((article, index) => (
                    <Cardnoticia key={index}>
                        <img src={article.image} alt={article.title} />
                        <h1>{article.title}</h1>
                        <p>{article.description}</p>
                        <p>{article.content}</p>
                        <button onClick={() => redirectToURL(article.url)}>Clique aqui para continuar lendo!</button>
                    </Cardnoticia>
                ))}
            </CardContainer>

        </>
    );
}

export default NewsApi;
