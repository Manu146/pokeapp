import styled, { keyframes } from "styled-components";

const typeBg = {
  normal:
    "linear-gradient(90deg, rgba(126,126,126,1) 0%, rgba(176,176,176,1) 46%, rgba(222,220,220,1) 100%)",
  fighting:
    "linear-gradient(90deg, rgba(187,92,73,1) 0%, rgba(207,106,86,1) 48%, rgba(240,119,94,1) 100%)",
  flying:
    "linear-gradient(90deg, rgba(102,153,255,1) 0%, rgba(82,121,200,1) 48%, rgba(54,83,142,1) 100%)",
  poison:
    "linear-gradient(90deg, rgba(175,97,158,1) 0%, rgba(142,79,128,1) 48%, rgba(105,58,94,1) 100%)",
  ground:
    "linear-gradient(90deg, rgba(163,140,70,1) 0%, rgba(150,130,66,1) 48%, rgba(106,91,45,1) 100%)",
  rock: "linear-gradient(90deg, rgba(158,139,75,1) 0%, rgba(150,130,66,1) 48%, rgba(106,91,45,1) 100%)",
  bug: "linear-gradient(90deg, rgba(138,151,13,1) 0%, rgba(176,193,18,1) 48%, rgba(194,212,19,1) 100%)",
  ghost:
    "linear-gradient(90deg, rgba(70,69,145,1) 0%, rgba(93,92,189,1) 48%, rgba(112,111,232,1) 100%)",
  steel:
    "linear-gradient(90deg, rgba(144,142,156,1) 0%, rgba(178,176,194,1) 48%, rgba(206,203,222,1) 100%)",
  fire: "linear-gradient(90deg, rgba(198,33,0,1) 0%, rgba(177,32,3,1) 48%, rgba(134,24,2,1) 100%)",
  water:
    "linear-gradient(90deg, rgba(11,103,195,1) 0%, rgba(11,89,167,1) 48%, rgba(8,66,124,1) 100%)",
  grass:
    "linear-gradient(90deg, rgba(59,153,7,1) 0%, rgba(75,193,10,1) 48%, rgba(84,219,10,1) 100%)",
  electric:
    "linear-gradient(90deg, rgba(231,147,4,1) 0%, rgba(223,157,44,1) 48%, rgba(224,174,89,1) 100%)",
  psychic:
    "linear-gradient(90deg, rgba(219,49,100,1) 0%, rgba(180,42,83,1) 48%, rgba(134,29,61,1) 100%)",
  ice: "linear-gradient(90deg, rgba(106,211,243,1) 0%, rgba(88,177,204,1) 48%, rgba(66,133,153,1) 100%)",
  dragon:
    "linear-gradient(90deg, rgba(107,88,204,1) 0%, rgba(81,66,156,1) 48%, rgba(56,46,108,1) 100%)",
  dark: "linear-gradient(90deg, rgba(49,40,33,1) 0%, rgba(79,65,54,1) 48%, rgba(94,77,64,1) 100%)",
  fairy:
    "linear-gradient(90deg, rgba(225,145,221,1) 0%, rgba(230,124,224,1) 48%, rgba(227,87,220,1) 100%)",
  unknown: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
  shadow: "#0000",
};

const typeColors = {
  normal: "rgb(126,126,126)",
  fighting: "rgb(187,92,73)",
  flying: "rgb(102,153,255)",
  poison: "rgb(175,97,158)",
  ground: "rgb(163,140,70)",
  rock: "rgb(158,139,75)",
  bug: "rgb(138,151,13)",
  ghost: "rgb(70,69,145)",
  steel: "rgb(144,142,156)",
  fire: "rgb(198,33,0)",
  water: "rgb(11,103,195)",
  grass: "rgb(59,153,7)",
  electric: "rgb(231,147,4)",
  psychic: "rgb(219,49,100)",
  ice: "rgb(106,211,243)",
  dragon: "rgb(107,88,204)",
  dark: "rgb(49,40,33)",
  fairy: "rgb(225,145,221)",
  unknown: "#0f0f0f",
  shadow: "#0000",
};

const bgAnimation = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const CardWrapper = styled.div`
  height: auto;
  padding: 1rem;
`;

export const CardBody = styled.div`
  perspective: 600px;
  padding: 1rem;
  border-radius: 1rem;
  min-height: 33vh;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
  border: 4px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
  transform-style: preserve-3d;
  background: ${(props) => typeBg[props.type]};
  background-size: 200% 200%;
  transition: transform 0.2s ease-out;
  animation: ${bgAnimation} 3s ease infinite;
  & h3 {
    margin-top: 0.5rem;
    font-size: 1.25rem;
    text-align: center;
    color: white;
    text-transform: capitalize;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: auto;
  border: 4px solid rgba(255, 255, 255, 0.5);
  border-radius: 1rem;
`;

export const TypeTag = styled.span`
  text-transform: uppercase;
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 9999px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: white;
  font-weight: bold;
  background-color: ${(props) => typeColors[props.type]};
`;

export const TypesContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
`;

export const StatsContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 2;
  gap: 0.5rem;
`;

export const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatLabel = styled.span`
  font-size: 1rem;
  color: white;
  position: relative;
  text-align: center;
  &::after {
    content: " ";
    width: 4ch;
    height: 1px;
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const StatNumber = styled.label`
  font-size: 1rem;
  color: #cfcfcf;
  text-align: center;
`;
