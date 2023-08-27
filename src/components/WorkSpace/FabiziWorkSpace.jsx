import {
  FlexGrid,
  Row,
  Column,
  Stack,
  Section,
  Heading,
  Grid,
} from "@carbon/react";
import "../WorkSpace/FbiziWorkSpace.style.scss";
import WorkPlaceDesktop from "../../assets/images/rectangle-desktop.jpg";
import BaristaDesktop from "../../assets/images/barista-cafe-making-coffee-preparation-service-concept-desktop.jpg";
import ColleaguesDesktop from "../../assets/images/young-colleagues-work-office-using-computers-desktop.jpg";

const WorkSpaceT = () => {
  return (
    <Grid fullWidth condensed className="fabiziWorkSpace">
      <Column className="flex-item" sm={0} md={4} lg={5}>
        <img
          style={{ width: "100%", height: "89.5%" }}
          src={WorkPlaceDesktop}
        />
      </Column>
      <Column className="flex-item " sm={0} md={8} lg={5}>
        <FlexGrid className="flex-row">
          <Row className="order-img ">
            <img
              style={{ width: "100%" }}
              src={BaristaDesktop}
              className="width-imagewidth-image"
            />
          </Row>
          <Row className="order-img ">
            <img style={{ width: "100%" }} src={ColleaguesDesktop} />
          </Row>
        </FlexGrid>
      </Column>
      <Column className="flex-item " sm={4} md={4} lg={6}>
        <Stack gap={6}>
          <Section level={1}>
            <Heading>Fabizi Work Space.</Heading>
          </Section>
          <img
            style={{ width: "100%" }}
            src={ColleaguesDesktop}
            className="colleage__image"
          />
          <p>
            We are a tech company and well aware of the importance of creating a
            dynamic, safe and fun environment for employees to thrive in. Modern
            design, up to date equipment and a friendly atmosphere shape our
            workspace. <br /> We have tried our best to create a “home away from
            home” feeling in our office, and we look at the members of our
            expanding team as members of this “home” who are valued and should
            be properly taken care of.
          </p>
          <img
            style={{ width: "100%" }}
            src={BaristaDesktop}
            className="barista__image"
          />
          <p>
            Joining Fabizi is all about partaking in a constant learning
            procedure, where you are valued and you can shine as bright as you
            want. If you dream big and want a supportive environment, Fabizi
            might be your new home.
          </p>
        </Stack>
      </Column>
    </Grid>
  );
};

export default WorkSpaceT;
