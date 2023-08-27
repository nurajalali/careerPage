import { FlexGrid, Row, Column, Section, Heading } from "@carbon/react";
import { ExpressiveCard } from "@carbon/ibm-products/lib/components";
import {
  LocationCompany,
  Timer,
  CropGrowth,
  Microscope,
  PicnicArea,
  GroupAccess,
  Friendship,
} from "@carbon/react/icons";

const Pekrs = () => {
  return (
    <FlexGrid fullWidth>
      <Row>
        <Column
          lg={{ span: 8, offset: 1 }}
          md={{ span: 6, offset: 0 }}
          sm={{ span: 4, offset: 0 }}
        >
          <Section>
            <Heading>PERKS & BENEFITS</Heading>
          </Section>
        </Column>
      </Row>
      <br />
      <Row>
        <Column lg={4} md={8} sm={4}>
          <ExpressiveCard pictogram={LocationCompany} title="Remote Working">
            <p>
              Since the nature of our job allows it, there is a possibility of
              remote work for certain positions at Fabizi. Technological
              advancements in the field of technology have granted us means to
              be present when we are not physically available. Afterall, that is
              what we aim to provide at Fabizi.
            </p>
          </ExpressiveCard>
          <br />
        </Column>

        <Column lg={4} md={8} sm={4}>
          <ExpressiveCard pictogram={Timer} title="Time Flexibility">
            <p>
              It might be a little hard to stick to a strict time schedule,
              since we all have our personal issues and matters to deal with.
              Acknowledging this, we offer flexible working hours to our
              employees in order to improve their productivity “when they are
              comfortable”. Don’t let your busy schedule dissuade you from
              reaching out!
            </p>
          </ExpressiveCard>
          <br />
        </Column>

        <Column lg={4} md={8} sm={4}>
          <ExpressiveCard pictogram={CropGrowth} title="Growth Potential">
            <p>
              Fabizi is an evolving, ever-growing product that constantly seeks
              highly skilled and motivated individuals to fill the new vacant
              positions as it progresses forward. Due to their constant training
              and capabilities, team members are the first in line when we can
              offer new positions.
            </p>
          </ExpressiveCard>
          <br />
        </Column>

        <Column lg={4} md={8} sm={4}>
          <ExpressiveCard pictogram={Timer} title="Competitive Compensation">
            <p>
              We believe that adequate compensation is not an act of generosity,
              but a fundamental necessity when you deal with talented people.
              Bring in a globe level of expertise and show commitment and let
              Fabizi appreciate your talents.
            </p>
          </ExpressiveCard>
          <br />
        </Column>
      </Row>

      <br />
      <Row>
        <Column lg={4} md={8} sm={4}>
          <ExpressiveCard pictogram={Microscope} title="In-house Training">
            <p>
              Technology industry requires constant training, learning and
              re-learning. This could prove time consuming and expensive, but
              Fabizi offers extensive in-house training and mentorship within
              its own team, making sure you remain on the path of growth
              uninterrupted. 
            </p>
          </ExpressiveCard>
          <br />
        </Column>

        <Column lg={4} md={8} sm={4}>
          <ExpressiveCard pictogram={PicnicArea} title="Generous Vacations">
            <p>
              As our policy of maximal employee comfort dictates, we offer a
              generous vacation and sick leave plan compared with our
              competitors. Rest, refresh and come back as the best version of
              yourself without worries.
            </p>
          </ExpressiveCard>
          <br />
        </Column>

        <Column lg={4} md={8} sm={4}>
          <ExpressiveCard pictogram={GroupAccess} title="Team Events">
            <p>
              We consider ourselves a family and this extends beyond working
              hours. We have team-building events, holiday parties, social
              gatherings and more. Experience what it means to be part of an
              inclusive team.
            </p>
          </ExpressiveCard>
          <br />
        </Column>

        <Column lg={4} md={8} sm={4}>
          <ExpressiveCard pictogram={Friendship} title="Friendly Environment">
            <p>
              Our years of experience has clearly shown us just how much
              maintaining a friendly and vibrant environment within our offices
              can improve performance and general feeling of satisfaction of
              employees. Work in a friendly environment that welcomes you [and
              of course your pets] and shoot for the moon.
            </p>
          </ExpressiveCard>
        </Column>
      </Row>
    </FlexGrid>
  );
};

export default Pekrs;
