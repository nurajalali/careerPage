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
const Footer = () => {
  return (
    <FlexGrid fullWidth className="footerPage">
      <Row>
        <Column lg={5} md={8} sm={4}>
          <FlexGrid>
            <Row>
              <Column>
                <Stack gap={4}>
                  <Section level={1}>
                    <Heading>Fabizi</Heading>
                  </Section>
                  <p>
                    Fabizi is the first “real” all-in-one management solution
                    for hospitality outlets. Manage your whole business from
                    interactions with clients, to the kitchen, to inventory,
                    through a single service that’s customized to your needs.
                    Join our growing family now and experience what it feels
                    like to be a manager from the future, today!
                  </p>
                  <div>
                    <Stack gap={7} orientation="horizontal">
                      <LogoTwitter size={20} />
                      <LogoFacebook size={20} />
                      <LogoYoutube size={20} />
                      <LogoLinkedin size={20} />
                      <LogoInstagram size={20} />
                    </Stack>
                  </div>
                  <div>
                    <FlexGrid fullWidth className="show gap">
                      <Row className="gap">
                        <Column md={4} sm={4}>
                          <Dropdown
                            items={["English", "Option 2", "Option 3"]}
                          />
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

        <Column lg={2} md={4} sm={2}>
          <FlexGrid>
            <Row>
              <Column>
                <Section level={5}>
                  <Heading>Content</Heading>
                </Section>
                <p>Help center</p>
                <p>Career</p>
                <p>About us</p>
                <p>Blogs</p>
                <p>Contact us</p>
                <p>Terms and conditions</p>
                <p>Press kit</p>
                <p>Hardwares</p>
                <p>Pricing</p>
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
                  <Heading>Products</Heading>
                </Section>
                <p>Point of sale</p>
                <p>KDS</p>
                <p>Delivery</p>
                <p>Recipe</p>
                <p>Inventory</p>
                <p>Customer</p>
                <p>Host</p>
                <p>Team</p>
                <p>Accounting</p>
              </Column>
              <Column>
                <br />
                <p>Report</p>
                <p>Insight</p>
                <p>Online</p>
                <p>Payment</p>
                <p>API</p>
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
                  <Heading>Bundles</Heading>
                </Section>
                <p>Restaurants</p>
                <p>Coffee Shops</p>
                <p>Confectionary</p>
                <p>Bakery</p>
                <p>Buffet</p>
                <p>Speciality Drinks</p>
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
                  <Heading>Case Studies</Heading>
                  <p>The Table</p>
                  <p>Namoos</p>
                  <p>Coochini</p>
                </Section>
              </Column>
            </Row>
          </FlexGrid>
        </Column>

        <Column lg={5} md={4} sm={4}>
          <Stack gap={4}>
            <p>Modern Land Trading LLC.</p>
            <p>
              UAE, Office1602, Damas Tower, Rega Al Buteen, Al Maktoum Street,
              Deira, Dubai, PO Box: 185916
            </p>
            <p>+971 50 142 8046</p>
          </Stack>
          <p>Fabizi@gmail.com</p>
        </Column>
        <Column lg={4} md={4} sm={4}>
          <Stack gap={4}>
            <p>Código Conciso Lda</p>
            <p>
              Portugal, Estrada Nacional 4 - Retiro do Bom Gosto, N 8 7080-111
              Vendas Novas
            </p>
            <p>+351 9200 53535</p>
          </Stack>
          <p>Fabizi@gmail.com</p>
        </Column>
        <Column lg={{ span: 4, offset: 2 }} md={4} className="hide">
          <Dropdown items={["English", "Option 2", "Option 3"]} />
          <br />
          <Dropdown items={["Dollar", "Option 2", "Option 3"]} />
        </Column>
      </Row>
    </FlexGrid>
  );
};

export default Footer;
