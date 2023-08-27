import { Grid, Column, Button } from "@carbon/react";
import { ArrowRight, FlaggingTaxi } from "@carbon/react/icons";
import "../AboutCareerPage/About.style.scss";
const About = () => {
  return (
    <Grid narrow className="careerpage__about">
      <Column lg={4} md={8} sm={4}>
        <FlaggingTaxi size={30} />
      </Column>
      <Column lg={8} md={8} sm={4}>
        Read how Fabizi started its journey as a startup!
      </Column>
      <Column lg={4} md={4} sm={4}>
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
