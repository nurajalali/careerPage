import { FlexGrid, Row, Column, Button, Theme } from "@carbon/react";
import { ArrowRight, FlaggingTaxi } from "@carbon/react/icons";
import "../SectionSix/About.style.scss";
const AboutFabizi = () => {
  return (
    <FlexGrid fullWidth className="Container__aboutFabizi">
      <Theme theme="g100">
        <Row className="Container--aboutFabizi-content">
          <Column lg={{ span: 1, offset: 1 }} md={0} sm={0}>
            <FlaggingTaxi size={30} />
          </Column>
          <Column lg={9} md={8} sm={4}>
            Read how Fabizi started its journey as a startup!
          </Column>
          <Column lg={4} md={4} sm={4}>
            <br />
            <Button
              className="btn"
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

export default AboutFabizi;
