//libs
import { scroller } from "react-scroll";

//styled components
import { Container, Title, Text, ButtonAnchor } from "./Hero.styled";

const Hero = () => {
  return (
    <Container>
      <Title>Test assignment for front-end developer</Title>
      <Text>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </Text>
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
    </Container>
  );
};

export default Hero;

// ${theme.breakpoint.tablet} {
//   width: 768px;
