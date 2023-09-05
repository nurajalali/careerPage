import {
  FlexGrid,
  Row,
  Column,
  Section,
  Heading,
  Stack,
  Dropdown,
} from "@carbon/react";
import {
  LogoInstagram,
  LogoTwitter,
  LogoFacebook,
  LogoLinkedin,
  LogoYoutube,
} from "@carbon/react/icons";
import "../Footer/Footer.style.scss";
import copyRight from "../../assets/copyright-symbol-svgrepo.svg";
const Footer = () => {
  return (
    <FlexGrid fullWidth className="Footer">
      <Row>
        <Column lg={4} md={8} sm={4}>
          <FlexGrid>
            <Row>
              <Column>
                <Stack gap={4}>
                  <Section level={2}>
                    <Heading className="Header--content Header__item--content">
                      Fabiz
                      <span className="Header--content--styleLetter">i</span>
                    </Heading>
                  </Section>
                  <p className="Content--color">
                    Fabizi is the first “real” all-in-one management solution
                    for hospitality outlets. Manage your whole business from
                    interactions with clients, to the kitchen, to inventory,
                    through a single service that’s customized to your needs.
                    Join our growing family now and experience what it feels
                    like to be a manager from the future, today!
                  </p>
                  <div>
                    <Stack gap={7} orientation="horizontal">
                      <LogoTwitter size={32} />
                      <LogoFacebook size={32} />
                      <LogoYoutube size={32} />
                      <LogoLinkedin size={32} />
                      <LogoInstagram size={32} />
                    </Stack>
                  </div>
                  <div>
                    <FlexGrid fullWidth className="Dropdown--show ">
                      <Row className="gap">
                        <Column md={4} sm={4}>
                          <Dropdown
                            items={["English", "Option 2", "Option 3"]}
                          />
                          <br />
                        </Column>
                        <Column md={4} sm={4}>
                          <Dropdown
                            items={["Dollar", "Option 2", "Option 3"]}
                          />
                        </Column>
                      </Row>
                    </FlexGrid>
                  </div>
                </Stack>
              </Column>
            </Row>
          </FlexGrid>
          <br />
        </Column>

        <Column lg={{ span: 2, offset: 1 }} md={4} sm={2}>
          <FlexGrid>
            <Row>
              <Column>
                <Section level={5}>
                  <Heading className="Header__item--content">Content</Heading>
                </Section>
                <p className="Content__item--color">Help center</p>
                <p className="Content__item--color">Career</p>
                <p className="Content__item--color">About us</p>
                <p className="Content__item--color">Blogs</p>
                <p className="Content__item--color">Contact us</p>
                <p className="Content__item--color">Terms and conditions</p>
                <p className="Content__item--color">Press kit</p>
                <p className="Content__item--color">Hardwares</p>
                <p className="Content__item--color">Pricing</p>
              </Column>
            </Row>
          </FlexGrid>
          <br />
        </Column>

        <Column lg={4} md={4} sm={2}>
          <FlexGrid>
            <Row>
              <Column>
                <Section level={5}>
                  <Heading className="Header__item--content">Products</Heading>
                </Section>
                <p className="Content__item--color">Point of sale</p>
                <p className="Content__item--color">KDS</p>
                <p className="Content__item--color">Delivery</p>
                <p className="Content__item--color">Recipe</p>
                <p className="Content__item--color">Inventory</p>
                <p className="Content__item--color">Customer</p>
                <p className="Content__item--color">Host</p>
                <p className="Content__item--color">Team</p>
                <p className="Content__item--color">Accounting</p>
              </Column>
              <Column>
                <br />
                <p className="Content__item--color">Report</p>
                <p className="Content__item--color">Insight</p>
                <p className="Content__item--color">Online</p>
                <p className="Content__item--color">Payment</p>
                <p className="Content__item--color">API</p>
              </Column>
            </Row>
          </FlexGrid>
          <br />
        </Column>

        <Column lg={2} md={4} sm={2}>
          <FlexGrid>
            <Row>
              <Column>
                <Section level={5}>
                  <Heading className="Header__item--content">Bundles</Heading>
                </Section>
                <p className="Content__item--color">Restaurants</p>
                <p className="Content__item--color">Coffee Shops</p>
                <p className="Content__item--color">Confectionary</p>
                <p className="Content__item--color">Bakery</p>
                <p className="Content__item--color">Buffet</p>
                <p className="Content__item--color">Speciality Drinks</p>
              </Column>
            </Row>
          </FlexGrid>
          <br />
        </Column>

        <Column lg={2} md={4} sm={2}>
          <FlexGrid>
            <Row>
              <Column>
                <Section level={5}>
                  <Heading className="Header__item--content">
                    Case Studies
                  </Heading>
                  <p className="Content__item--color">The Table</p>
                  <p className="Content__item--color">Namoos</p>
                  <p className="Content__item--color">Coochini</p>
                </Section>
              </Column>
            </Row>
          </FlexGrid>
        </Column>

        <Column lg={3} md={4} sm={4}>
          <Stack gap={4}>
            <p>Modern Land Trading LLC.</p>
            <p className="Content--color">
              UAE, Office1602, Damas Tower, Rega Al Buteen, Al Maktoum Street,
              Deira, Dubai, PO Box: 185916
            </p>
            <p className="Content__underline Content__information--color">
              +971 50 142 8046
            </p>
          </Stack>
          <p className="Content__underline Content__information--color">
            Fabizi@gmail.com
          </p>
          <br />
          <hr className="Content__mobile--line" />
        </Column>

        <Column lg={{ span: 3, offset: 2 }} md={4} sm={4}>
          <Stack gap={4}>
            <p>Código Conciso Lda</p>
            <p className="Content--color">
              Portugal, Estrada Nacional 4 - Retiro do Bom Gosto, N 8 7080-111
              Vendas Novas
            </p>
            <p className="Content__underline Content__information--color">
              +351 9200 53535
            </p>
          </Stack>
          <p className="Content__underline Content__information--color">
            Fabizi@gmail.com
          </p>
          <br />
          <hr className="Content__mobile--line" />
        </Column>
        <Column
          lg={{ span: 4, offset: 3 }}
          md={4}
          sm={0}
          className="Dropdown--hide "
        >
          <Dropdown
            id="Dropdown__language--color--change"
            label="English"
            items={["English", "Option 2", "Option 3"]}
          />
          <br />

          <Dropdown
            id="Dropdown__price--color--change"
            label="Dollar"
            items={["Dollar", "Option 2", "Option 3"]}
          />
        </Column>
      </Row>
      <hr className="Content__desktop--line" />
      <Row lg={4} md={4} sm={4}>
        <img className="Icon--space" src={copyRight} />
        <p>2019-2023 Fabizi. All rights reserved.</p>
      </Row>
    </FlexGrid>
  );
};

export default Footer;
