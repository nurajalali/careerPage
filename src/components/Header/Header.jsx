import {
  FlexGrid,
  Row,
  Column,
  Section,
  Heading,
  Button,
  Stack,
} from "@carbon/react";
import { ArrowRight } from "@carbon/react/icons";
import useBreakpoint from "../Hooks/useBreakpoint";
import "../Header/Header.style.scss";
import backgroundDesktop from "../../assets/images/barista-cafe-making-coffee-preparation-desktop.jpg";
import backgroundTablet from "../../assets/images/barista-cafe-making-coffee-preparation-tablet.jpg";
import backgroundMobile from "../../assets/images/young-hostess-standing-near-cash-mobile.jpg";

const Header = () => {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  return (
    <div
      className="Header"
      style={{ height: "fit-content", position: "relative" }}
    >
      {
        <img
          className="header-background "
          src={
            isDesktop
              ? backgroundDesktop
              : isTablet
              ? backgroundTablet
              : isMobile
              ? backgroundMobile
              : ""
          }
        />
      }
      <FlexGrid fullWidth className="header-picture">
        <Row>
          <Stack
            gap={
              isDesktop ? "1rem" : isTablet ? "1rem" : isMobile ? "1.5rem" : ""
            }
          >
            <Column
              sm={4}
              md={{ span: 8, offset: 0 }}
              lg={{ span: 10, offset: 1 }}
            >
              <Section>
                <Heading
                  className="
              header--heading"
                >
                  With every talent you have,
                  <span className="header--heading__boldword"> Fabizi</span>
                  needs you!
                </Heading>
              </Section>
            </Column>
            <Stack
              gap={
                isDesktop
                  ? "2rem"
                  : isTablet
                  ? "2.5rem"
                  : isMobile
                  ? "2rem"
                  : ""
              }
            >
              <Column sm={4} md={7} lg={{ span: 8, offset: 1 }}>
                <p>
                  Fabizi is an ever-growing family of creative and curious minds
                  that are always eager to learn and ready to make a difference
                  on a global scale. If you feel like these traits describe you,
                  check which positions are available at Fabizi.
                </p>
              </Column>
            </Stack>

            <Column sm={4} md={3} lg={{ span: 4, offset: 1 }}>
              <Button
                className="Header__btn"
                renderIcon={ArrowRight}
                tooltipPosition="right"
              >
                Watch positions
              </Button>
            </Column>
          </Stack>
        </Row>
      </FlexGrid>
    </div>
  );
};

export default Header;