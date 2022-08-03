import { ReactComponent as PokeballSVG } from "../../icons/pokeball2.svg";
import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
    50%{
        transform: scale(0.7);
    }
`;

const PokeballIcon = styled(PokeballSVG)`
  animation: ${loadingAnimation} 1s infinite;
`;

const Container = styled.div`
  position: absolute;
  width: 10rem;
  height: 10rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function PokeballSpinner() {
  return (
    <Container role="progressbar">
      <PokeballIcon />
    </Container>
  );
}
