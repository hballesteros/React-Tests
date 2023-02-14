import { useEffect, useState } from "react"
import './App.css';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
//const CAT_ENDPOINT_IMAGE_URLL = `https://cataas.com/cat/cute/says/${firstWord}?json=true`;
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export const App = () => {

    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();
    
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then( res => res.json() )
            .then( data => {
                const { fact } = data;
                setFact(fact);
            })
    }, [])

    useEffect(() => {
        if (fact) {
        const threeFirstWord = fact.split(' ').slice(0,3).join(' ');
        fetch(`https://cataas.com/cat/cute/says/${threeFirstWord}?json=true`)
            .then( res => res.json() )
            .then( response => {
                const { url } = response;
                setImageUrl( url );
            })
        }
    }, [fact])
    
    
    return (
        <main>
            <h1>App de gatitos</h1>
            { fact && <p>{fact}</p> }
            { imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using first three word for ${fact}`} />}
        </main>
    )
}
