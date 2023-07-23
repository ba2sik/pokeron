import PokeCard from '../../Components/PokeCard/PokeCard.jsx';
import './home-page.css';
import {getRndInteger} from '../../utils/random.js';
import {CoolButton} from '../../Components/CoolButton/CoolButton.jsx';
import {useState} from 'react';

const MIN_POKEMON_ID = 1;
const MAX_POKEMON_ID = 100;

export default function HomePage() {
    const [randomPokemonId, setRandomPokemonId] = useState(getRandomPokemonId());
    const onRefreshButtonClick = () => setRandomPokemonId(getRandomPokemonId());

    return (
        <div className="home-page">
            <div className="title">PokéRon</div>
            <PokeCard id={randomPokemonId}/>
            <CoolButton text={'Refresh'} onClick={onRefreshButtonClick}></CoolButton>
        </div>
    );
}

function getRandomPokemonId() {
    return getRndInteger(MIN_POKEMON_ID, MAX_POKEMON_ID);
}

