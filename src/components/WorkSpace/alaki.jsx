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

  return (
    <FlexGrid fullWidth className="workspace">
      <Row className="direction-row-reverse">
        <Stack
          orientation={
            isDesktop
              ? "horizontal"
              : isTablet
              ? "vertical"
              : isMobile
              ? "vertical"
              : ""
          }
        >
          <Column
            lg={isDesktop ? "4" : isTablet ? "4" : isMobile ? "4" : ""}
            md={isDesktop ? "4" : isTablet ? "4" : isMobile ? "4" : ""}
            className="workspace-main__image"
          >
            <img
              src={
                isDesktop ? WorkPlaceDesktop : isTablet ? WorkPlaceTablet : ""
              }
            />
          </Column>
          <Stack
            gap={
              isDesktop ? "2rem" : isTablet ? "1rem" : isMobile ? "1rem" : ""
            }
            orientation={
              isDesktop
                ? "vertical"
                : isTablet
                ? "horizontal"
                : isMobile
                ? "vertical"
                : ""
            }
          >
            <Column
              lg={isDesktop ? "4" : isTablet ? "4" : isMobile ? "4" : ""}
              md={isDesktop ? "4" : isTablet ? "4" : isMobile ? "4" : ""}
              className="workspace-barista__image"
            >
              <img
                src={
                  isDesktop
                    ? BaristaDesktop
                    : isTablet
                    ? BaristaTablet
                    : isMobile
                    ? BaristaMobile
                    : ""
                }
              />
            </Column>
            <Column
              lg={isDesktop ? "4" : isTablet ? "4" : isMobile ? "4" : ""}
              md={isDesktop ? "4" : isTablet ? "4" : isMobile ? "4" : ""}
              className="workspace-colleague__image"
            >
              <img
                src={
                  isDesktop
                    ? ColleaguesDesktop
                    : isTablet
                    ? ColleaguesTablet
                    : isMobile
                    ? ColleaguesMobile
                    : ""
                }
              />
            </Column>
          </Stack>
        </Stack>
        <Column
          lg={isDesktop ? "6" : isTablet ? "4" : isMobile ? "4" : ""}
          md={isDesktop ? "4" : isTablet ? "4" : isMobile ? "4" : ""}
          className="workspace-content"
        >
          <Stack
            gap={
              isDesktop ? "1rem" : isTablet ? "1rem" : isMobile ? "1rem" : ""
            }
          >
            <Section level={1}>
              <Heading className="workspace-header">
                <span className="workspace-header__firstword">Fabizi </span>
                Work Space.
              </Heading>
            </Section>
            <Stack
              gap={
                isDesktop ? "2rem" : isTablet ? "1rem" : isMobile ? "1rem" : ""
              }
            >
              <p>
                We are a tech company and well aware of the importance of
                creating a dynamic, safe and fun environment for employees to
                thrive in. Modern design, up to date equipment and a friendly
                atmosphere shape our workspace. <br /> We have tried our best to
                create a “home away from home” feeling in our office, and we
                look at the members of our expanding team as members of this
                “home” who are valued and should be properly taken care of.
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
};

export default WorkSpace;
