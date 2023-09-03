import { FlexGrid, Row, Column, Section, Heading, Stack } from "@carbon/react";
import WorkPlaceDesktop from "../../assets/images/rectangle-desktop.jpg";
import BaristaDesktop from "../../assets/images/barista-cafe-making-coffee-preparation-service-concept-desktop.jpg";
import ColleaguesDesktop from "../../assets/images/young-colleagues-work-office-using-computers-desktop.jpg";
import useBreakpoint from "../Hooks/useBreakpoint";
import "../SectionThree/FbiziWorkSpace.style.scss";

const FabiziWorkSpace = () => {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  return (
    <FlexGrid
      fullWidth
      condensed={isDesktop ? true : isTablet ? false : isMobile ? false : ""}
      className="Containor__workspaceSection"
    >
      <Row className="Containor__workspaceSection-space">
        <Column
          className="Containor__workspaceSection-tabletStyle"
          lg={5}
          md={4}
          sm={0}
        >
          <img className="Picture__main" src={WorkPlaceDesktop} />
        </Column>
        <Column
          className="Containor__workspaceSection-tabletStyle"
          lg={5}
          md={8}
          sm={0}
        >
          <FlexGrid>
            <Row className="Containor__workspaceSection-desktop-flexColumn Containor__workspaceSection-tabletStyle-flexRow">
              <Column
                className="Containor__workspaceSection-tabletStyle-orderImg "
                lg={16}
                md={4}
                sm={0}
              >
                <img style={{ width: "100%" }} src={BaristaDesktop} />
              </Column>
              <Column
                className="Containor__workspaceSection-tabletStyle-orderImg "
                lg={16}
                md={4}
                sm={0}
              >
                <img style={{ width: "100%" }} src={ColleaguesDesktop} />
              </Column>
            </Row>
          </FlexGrid>
        </Column>

        <Column lg={6} md={4} sm={4}>
          <Stack gap={"1rem"}>
            <Section level={1}>
              <Heading className="Header__workSpace">
                <span className="Header__workSpace--firstWord">Fabizi</span>{" "}
                Work Space.
              </Heading>
            </Section>

            <img
              src={ColleaguesDesktop}
              style={{ width: "100%" }}
              className="Containor__workspaceSection-mobileStyle-colleageImage"
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
              className="Containor__workspaceSection-mobileStyle-baristaImage"
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

export default FabiziWorkSpace;
