//libs
import { scroller } from "react-scroll";

//images
import headerLogo from "../../images/Logo.svg";

//styled components
import {
  ButtonAnchor,
  Container,
  Logo,
  NavContainer,
  WideContainer,
} from "./Header.styled";

const Header = () => {
  return (
    <WideContainer>
      <Container>
        <Logo src={headerLogo} alt="header-logo" />
        <NavContainer>
          <ButtonAnchor
            type="button"
            onClick={() => {
              scroller.scrollTo("users-list", {
                duration: 700,
                delay: 0,
                smooth: "easeInOutQuint",
              });
            }}
          >
            Users
          </ButtonAnchor>
          <ButtonAnchor
            type="button"
            onClick={() => {
              scroller.scrollTo("sign-up-form", {
                duration: 700,
                delay: 0,
                smooth: "easeInOutQuint",
              });
            }}
          >
            Sign up
          </ButtonAnchor>
        </NavContainer>
      </Container>
    </WideContainer>
  );
};

export default Header;
