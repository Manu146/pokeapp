import { useRef } from "react";
import {
  CardBody,
  CardWrapper,
  CardImg,
  TypeTag,
  TypesContainer,
  StatsContainer,
  StatContainer,
  StatLabel,
  StatNumber,
} from "./style";

const statsLabels = {
  attack: "ATK",
  hp: "HP",
  defense: "DEF",
  "special-attack": "S-ATK",
  "special-defense": "S-DEF",
  speed: "SPD",
};

const MAX_ANGLE = 36;

const ammountFn = (elDimention, coordValue) => {
  let slope = 2 / elDimention;
  return slope * coordValue - 1;
};

const computeRotation = (e, cardDimentions) => {
  let mouseX = e.clientX - cardDimentions.x;
  let mouseY = e.clientY - cardDimentions.y;
  let cardWidth = cardDimentions.width;
  let cardHeight = cardDimentions.height;

  let ammountY = ammountFn(cardWidth, mouseX);
  let ammountX = ammountFn(cardHeight, mouseY);

  return [ammountX, ammountY];
};

export default function PokemonCard({ pokemonData }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    let cardDimentions = cardRef.current.getBoundingClientRect();
    let rotationAmmounts = computeRotation(e, cardDimentions);
    cardRef.current.style.transform = `rotateX(${
      rotationAmmounts[0] * MAX_ANGLE
    }deg) rotateY(${rotationAmmounts[1] * MAX_ANGLE}deg) scale(1.1)`;
  };

  return (
    <CardWrapper>
      <CardBody
        ref={cardRef}
        type={pokemonData.types[0].type.name}
        onMouseMove={handleMouseMove}
        onMouseLeave={(e) =>
          (cardRef.current.style.transform = `rotateX(0) rotateY(0) scale(1)`)
        }
      >
        <CardImg
          src={pokemonData.sprites.front_default}
          alt={`${pokemonData.name} sprite`}
        />
        <h3>{pokemonData.name}</h3>
        <TypesContainer>
          {pokemonData.types.map((type, index) => (
            <TypeTag type={type.type.name} key={index}>
              {type.type.name}
            </TypeTag>
          ))}
        </TypesContainer>
        <StatsContainer>
          {pokemonData.stats.map((stat, index) => (
            <StatContainer key={index}>
              <StatLabel>{statsLabels[stat.stat.name]}</StatLabel>
              <StatNumber>{stat.base_stat}</StatNumber>
            </StatContainer>
          ))}
        </StatsContainer>
      </CardBody>
    </CardWrapper>
  );
}
