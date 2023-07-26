import './poke-card.css';
import Loader from '../Loader/Loader.jsx';
import useFetch from '../../hooks/useFetch.js';
import { useEffect, useState } from 'react';

export default function PokeCard({ id = 1 }) {
    const [pokemon, isPokemonReqLoading, error] = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const [imgFinishedLoading, setImgFinishedLoading] = useState(false);

    useEffect(() => setImgFinishedLoading(false), [id]);

    const allAssetsLoaded = !isPokemonReqLoading && imgFinishedLoading;

    const pokemonId = getUiPokemonId(id);
    const pokemonBackgroundColor = 'blue';

    return (
        <div className="poke-card" style={{ backgroundColor: pokemonBackgroundColor }}>
            <div style={{ display: allAssetsLoaded ? 'none' : 'block' }}>
                <Loader />
            </div>
            {pokemon && (
                <div style={{ display: allAssetsLoaded ? 'block' : 'none' }}>
                    <div className="pokemon-id">{pokemonId}</div>
                    <div className="pokemon-name">{pokemon.name}</div>
                    <img
                        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
                        className="pokemon-img"
                        onLoad={() => setImgFinishedLoading(true)}
                    />
                </div>
            )}
        </div>
    );
}

function getUiPokemonId(id = 0) {
    console.log('func');
    const paddedId = id.toString().padStart(3, '0');
    return '#' + paddedId;
}
