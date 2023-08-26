import { FlexGrid, Row, Column, Stack, Section, Heading } from "@carbon/react";
import useBreakpoint from "../Hooks/useBreakpoint";
import WorkPlaceDesktop from "../../assets/images/rectangle-desktop.jpg";
import WorkPlaceTablet from "../../assets/images/rectangle-tablet.jpg";
import BaristaDesktop from "../../assets/images/barista-cafe-making-coffee-preparation-service-concept-desktop.jpg";
import BaristaTablet from "../../assets/images/barista-cafe-making-coffee-preparation-service-concept-tablet.jpg";
import BaristaMobile from "../../assets/images/barista-cafe-making-coffee-preparation-service-concept-mobile.jpg";
import ColleaguesDesktop from "../../assets/images/young-colleagues-work-office-using-computers-desktop.jpg";
import ColleaguesTablet from "../../assets/images/young-colleagues-work-office-using-computers-tablet.jpg";
import ColleaguesMobile from "../../assets/images/young-colleagues-work-office-using-computers-mobile.jpg";
import "../WorkSpace/FbiziWorkSpace.style.scss";
const WorkSpace = () => {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  if (isDesktop) {
    return (
      <FlexGrid fullWidth className="workspace__desktop">
        <Row className="direction-row-reverse">
          <Stack orientation="horizontal">
            <Column lg={4}>
              <img
                srcSet={` ${WorkPlaceTablet}   1320w, ${WorkPlaceDesktop} 1980w`}
                src={WorkPlaceDesktop}
              />
            </Column>
            <Stack gap={"2rem"} orientation="vertical">
              <Column lg={4} md={2}>
                <img
                  srcSet={` ${BaristaTablet}   1320w, ${BaristaDesktop} 1980w`}
                  src={BaristaDesktop}
                />
              </Column>
              <Column lg={4}>
                <img
                  srcSet={` ${ColleaguesTablet}   1320w, ${ColleaguesDesktop} 1980w`}
                  src={ColleaguesDesktop}
                />
              </Column>
            </Stack>
          </Stack>
          <Column lg={6}>
            <Stack gap={"1rem"}>
              <Section level={1}>
                <Heading className="workspace-header">
                  <span className="workspace-header__firstword">Fabizi </span>
                  Work Space.
                </Heading>
              </Section>
              <Stack gap={"2rem"}>
                <p>
                  We are a tech company and well aware of the importance of
                  creating a dynamic, safe and fun environment for employees to
                  thrive in. Modern design, up to date equipment and a friendly
                  atmosphere shape our workspace. <br /> We have tried our best
                  to create a “home away from home” feeling in our office, and
                  we look at the members of our expanding team as members of
                  this “home” who are valued and should be properly taken care
                  of.
                </p>

                <p>
                  Joining Fabizi is all about partaking in a constant learning
                  procedure, where you are valued and you can shine as bright as
                  you want. If you dream big and want a supportive environment,
                  Fabizi might be your new home.
                </p>
              </Stack>
            </Stack>
          </Column>
        </Row>
      </FlexGrid>
    );
  } else if (isTablet) {
    return (
      <FlexGrid fullWidth className="workspace-tablet">
        <Stack gap={"2rem"}>
          <Row>
            <Stack orientation="horizontal">
              <Column md={8}>
                <Stack gap={"1rem"}>
                  <Section level={2}>
                    <Heading>
                      <span className="workspace-header__firstword">
                        Fabizi
                      </span>
                      Work Space.
                    </Heading>
                  </Section>
                  {/* <p>
                  We are a tech company and well aware of the importance of
                  creating a dynamic, safe and fun environment for employees to
                  thrive in. Modern design, up to date equipment and a friendly
                  atmosphere shape our workspace. <br /> We have tried our best
                  to create a “home away from home” feeling in our office, and
                  we look at the members of our expanding team as members of
                  this “home” who are valued and should be properly taken care
                  of.
                </p> */}

                  <p>
                    Joining Fabizi is all about partaking in a constant learning
                    procedure, where you are valued and you can shine as bright
                    as you want. If you dream big and want a supportive
                    environment, Fabizi might be your new home.
                  </p>
                </Stack>
              </Column>
              <Column md={4}>
                <img src={WorkPlaceTablet} />
              </Column>
            </Stack>
          </Row>
          <Row>
            <Stack orientation="horizontal" gap={"2rem"}>
              <Column md={4}>
                <img src={BaristaTablet} />
              </Column>
              <Column md={4}>
                <img src={ColleaguesTablet} />
              </Column>
            </Stack>
          </Row>
        </Stack>
      </FlexGrid>
    );
  } else if (isMobile) {
    return (
      <FlexGrid fullWidth className="workspace-mobile">
        <Stack gap={"1rem"}>
          <Row>
            <Column sm={4}>
              <Section level={3}>
                <Heading>
                  <span className="workspace-header__firstword">Fabizi </span>
                  Work Space.
                </Heading>
              </Section>
            </Column>
          </Row>
          <Row>
            <Column sm={4}>
              <img src={BaristaMobile} />
            </Column>
          </Row>
          <Row>
            <Column sm={4}>
              <p>
                We are a tech company and well aware of the importance of
                creating a dynamic, safe and fun environment for employees to
                thrive in. Modern design, up to date equipment and a friendly
                atmosphere shape our workspace. <br /> We have tried our best to
                create a “home away from home” feeling in our office, and we
                look at the members of our expanding team as members of this
                “home” who are valued and should be properly taken care of.
              </p>
            </Column>
          </Row>
          <Row>
            <Column sm={4}>
              <img src={ColleaguesMobile} />
            </Column>
          </Row>
          <Row>
            <Column sm={4}>
              <p>
                Joining Fabizi is all about partaking in a constant learning
                procedure, where you are valued and you can shine as bright as
                you want. If you dream big and want a supportive environment,
                Fabizi might be your new home.
              </p>
            </Column>
          </Row>
        </Stack>
      </FlexGrid>
    );
  }
};

export default WorkSpace;
