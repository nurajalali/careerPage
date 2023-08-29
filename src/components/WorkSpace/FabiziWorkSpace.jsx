import { FlexGrid, Row, Column, Section, Heading, Stack } from "@carbon/react";
import "../WorkSpace/FbiziWorkSpace.style.scss";
import WorkPlaceDesktop from "../../assets/images/rectangle-desktop.jpg";
import BaristaDesktop from "../../assets/images/barista-cafe-making-coffee-preparation-service-concept-desktop.jpg";
import ColleaguesDesktop from "../../assets/images/young-colleagues-work-office-using-computers-desktop.jpg";
import useBreakpoint from "../Hooks/useBreakpoint";

const WorkSpaceT = () => {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  return (
    <FlexGrid
      fullWidth
      condensed={isDesktop ? true : isTablet ? false : isMobile ? false : ""}
      className="workspace"
    >
      <Row className="padding">
        <Column className="flex-item" lg={5} md={4} sm={0}>
          <img
            style={{ width: "100%", height: "89.5%" }}
            src={WorkPlaceDesktop}
          />
        </Column>
        <Column className="flex-item" lg={5} md={8} sm={0}>
          <FlexGrid>
            <Row className="flex-column flex-row">
              <Column className="order-img " lg={16} md={4} sm={0}>
                <img style={{ width: "100%" }} src={BaristaDesktop} />
              </Column>
              <Column className="order-img " lg={16} md={4} sm={0}>
                <img style={{ width: "100%" }} src={ColleaguesDesktop} />
              </Column>
            </Row>
          </FlexGrid>
        </Column>

        <Column lg={6} md={4} sm={4}>
          <Stack gap={"1rem"}>
            <Section level={1}>
              <Heading>Fabizi Work Space.</Heading>
            </Section>

            <img
              src={ColleaguesDesktop}
              style={{ width: "100%" }}
              className="colleage__image"
            />
            <p>
              We are a tech company and well aware of the importance of creating
              a dynamic, safe and fun environment for employees to thrive in.
              Modern design, up to date equipment and a friendly atmosphere
              shape our workspace. <br /> We have tried our best to create a
              “home away from home” feeling in our office, and we look at the
              members of our expanding team as members of this “home” who are
              valued and should be properly taken care of.
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
      </Row>
    </FlexGrid>
  );
};

export default WorkSpaceT;
