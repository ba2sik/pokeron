import './poke-card.css';
import Loader from '../Loader/Loader.jsx';
import useFetch from '../../hooks/useFetch.js';
import { useEffect, useState } from 'react';
import { pokemonTypeToColor } from '../../consts/pokemonColors.js';

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon';
const POKEMON_SPRITE_URL = 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world';

export default function PokeCard({ id = 1 }) {
    const [pokemon, isPokemonReqLoading, error] = useFetch(`${POKEMON_API_URL}/${id}`);
    const [imgFinishedLoading, setImgFinishedLoading] = useState(false);

    useEffect(() => setImgFinishedLoading(false), [id]);

    const allAssetsLoaded = !isPokemonReqLoading && imgFinishedLoading;

    const pokemonId = getUiPokemonId(id);
    const pokemonBackgroundColor = pokemonTypeToColor[getPokemonType(pokemon)];

    return (
        <div className="poke-card" style={{ backgroundColor: pokemonBackgroundColor }}>
            {/*
                We want to show loader while images load, in order to load them have to add them to the DOM first.
                That's why we use CSS, rather than conditional rendering (As a workaround).
            */}
            <div style={{ display: allAssetsLoaded ? 'none' : 'block' }}>
                <Loader />
            </div>
            {pokemon && (
                <div style={{ display: allAssetsLoaded ? 'block' : 'none' }}>
                    <div className="pokemon-id">{pokemonId}</div>
                    <div className="pokemon-name">{pokemon.name}</div>
                    <img
                        src={`${POKEMON_SPRITE_URL}/${id}.svg`}
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

function getPokemonType(pokemon) {
    return pokemon?.types[0].type.name;
}
