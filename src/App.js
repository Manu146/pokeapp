import { useState } from "react";
import usePokemon from "./hooks/usePokemon";
import GlobalStyles from "./GlobalStyles";
import PokemonCard from "./components/PokemonCard";
import { MainContainer } from "./components/common/MainContainer";
import { LeftContainer } from "./components/common/LeftContainer";
import SearchBar from "./components/SearchBar";
import PokeballSpinner from "./components/common/PokeballSpinner";
import ErrorDisplay from "./components/ErrorDisplay";
import InitialDisplay from "./components/InitialDisplay";

function App() {
  const [search, setSearch] = useState("");
  const pokemonData = usePokemon(search);
  const isLoading = pokemonData.loading;
  const errorPresent = !!pokemonData.error;
  const dataPresent = !!pokemonData.data;

  let Content;

  if (isLoading) Content = <PokeballSpinner />;
  else {
    if (dataPresent) Content = <PokemonCard pokemonData={pokemonData.data} />;
    if (errorPresent) Content = <ErrorDisplay error={pokemonData.error} />;
    if (!dataPresent && !errorPresent)
      Content = <InitialDisplay text="Start searching now!" />;
  }

  return (
    <div className="App">
      <MainContainer>
        <LeftContainer>
          <h1>Pokedex</h1>
          <h4>Search pokemons by number</h4>
          <SearchBar handleSearch={setSearch} />
        </LeftContainer>
        <div>{Content}</div>
      </MainContainer>
      <GlobalStyles />
    </div>
  );
}

export default App;
