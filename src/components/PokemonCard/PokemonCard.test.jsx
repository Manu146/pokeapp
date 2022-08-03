import { render, screen } from "@testing-library/react";
import PokemonCard from "./";

//Piplup data
const pokemonData = {
  name: "piplup",
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/393.png",
    back_female: null,
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/393.png",
    back_shiny_female: null,
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
    front_female: null,
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/393.png",
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/393.svg",
        front_female: null,
      },
      home: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/393.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/393.png",
        front_shiny_female: null,
      },
      official_artwork: {
        "front-default":
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png",
      },
    },
  },
  stats: [
    {
      base_stat: 53,
      effort: 0,
      stat: {
        name: "hp",
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
    },
    {
      base_stat: 51,
      effort: 0,
      stat: {
        name: "attack",
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    },
    {
      base_stat: 53,
      effort: 0,
      stat: {
        name: "defense",
        url: "https://pokeapi.co/api/v2/stat/3/",
      },
    },
    {
      base_stat: 61,
      effort: 1,
      stat: {
        name: "special-attack",
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 56,
      effort: 0,
      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    {
      base_stat: 40,
      effort: 0,
      stat: {
        name: "speed",
        url: "https://pokeapi.co/api/v2/stat/6/",
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: "water",
        url: "https://pokeapi.co/api/v2/type/11/",
      },
    },
  ],
};

const statsLabels = {
  attack: "ATK",
  hp: "HP",
  defense: "DEF",
  "special-attack": "S-ATK",
  "special-defense": "S-DEF",
  speed: "SPD",
};

describe("<PokemonCard/>", () => {
  test("renders pokemonData passed as prop", () => {
    render(<PokemonCard pokemonData={pokemonData} />);
    let imgEl = screen.getByRole("img");
    let titleEl = screen.getByRole("heading", { name: /piplup/i });
    let typeTags = [];
    let statsSpans = [];

    for (let index = 0; index < pokemonData.types.length; index++) {
      typeTags.push(screen.getByText(pokemonData.types[index].type.name));
    }

    Object.entries(statsLabels).forEach((stat) => {
      statsSpans.push(screen.getByText(stat[1]));
    });

    expect(typeTags).toHaveLength(pokemonData.types.length);
    expect(statsSpans).toHaveLength(Object.entries(statsLabels).length);
    expect(imgEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
  });
});
