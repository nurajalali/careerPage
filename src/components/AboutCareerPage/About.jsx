import { FlexGrid, Row, Column, Button, Theme } from "@carbon/react";
import { ArrowRight, FlaggingTaxi } from "@carbon/react/icons";
import "../AboutCareerPage/About.style.scss";
const About = () => {
  return (
    <FlexGrid fullWidth className="fabizi__about">
      <Theme theme="g100">
        <Row className="about">
          <Column lg={{ span: 2, offset: 1 }} md={0} sm={0}>
            <FlaggingTaxi size={30} />
          </Column>
          <Column lg={8} md={8} sm={3}>
            Read how Fabizi started its journey as a startup!
          </Column>
          <Column lg={4} md={4} sm={3}>
            <br />
            <Button
              className="about-btn"
              renderIcon={ArrowRight}
              tooltipPosition="right"
            >
              About us
            </Button>
          </Column>
        </Row>
      </Theme>
    </FlexGrid>
  );
};

export default About;
