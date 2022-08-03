import psyduckImg from "../../assets/images/psyduck.png";
import { CenteredH2 } from "../common/CenteredH2";
import { StyledImg } from "../common/StyledImg";

export default function ErrorDisplay({ error }) {
  return (
    <>
      <CenteredH2>{error}</CenteredH2>
      <StyledImg src={psyduckImg} alt="Psyduck img. Error" />
    </>
  );
}
