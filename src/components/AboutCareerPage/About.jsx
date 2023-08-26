import { Grid, Column, Button } from "@carbon/react";
import { ArrowRight } from "@carbon/react/icons";
import person from "../../assets/flagging-taxi.svg";
import "../AboutCareerPage/About.style.scss";
const About = () => {
  return (
    <Grid narrow className="careerpage__about">
      <Column lg={{ span: 2, offset: 0 }} md={4} sm={4}>
        <img src={person} />
      </Column>
      <Column lg={4} md={4} sm={4}>
        Read how Fabizi started its journey as a startup!
      </Column>
      <Column lg={{ span: 4, offset: 12 }} md={4} sm={4}>
        <Button
          className="Header__btn"
          renderIcon={ArrowRight}
          tooltipPosition="right"
        >
          About us
        </Button>
      </Column>
    </Grid>
  );
};

export default About;
