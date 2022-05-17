//components styled
import { SpinnerContainer } from "./Loader.styled";

//icon
// import { ReactComponent as SpinnerIcon } from "./spinners/spinner8.svg";
import { ReactComponent as SpinnerIcon } from "../../images/preloader.svg";

function Loader({ color }) {
  return (
    <SpinnerContainer>
      <SpinnerIcon fill={color} />
    </SpinnerContainer>
  );
}

export default Loader;
