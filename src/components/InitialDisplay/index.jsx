import togepiImg from "../../assets/images/togepi.png";
import { CenteredH2 } from "../common/CenteredH2";
import { StyledImg } from "../common/StyledImg";

export default function ErrorDisplay({ text }) {
  return (
    <>
      <CenteredH2>{text}</CenteredH2>
      <StyledImg src={togepiImg} alt="Togepi img" />
    </>
  );
}
