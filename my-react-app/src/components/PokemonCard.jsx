import './assets/PokemonCard.css';

function PokemonCard () {
  return (
    <figure className="pokemon-card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="BulbasaurImg" />
        <figcaption>Bulbasaur</figcaption>
    </figure>
  );
}

export default PokemonCard;
