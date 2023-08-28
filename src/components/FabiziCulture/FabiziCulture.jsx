import { FlexGrid, Row, Column, Section, Heading } from "@carbon/react";
import { ExpressiveCard } from "@carbon/ibm-products/lib/components";
import {
  NotebookReference,
  HelpDesk,
  Sight,
  Cognitive,
  WatsonHealthAiStatusComplete,
  TypePattern,
  IbmWatsonAssistant,
  GameConsole,
} from "@carbon/react/icons";
import "../FabiziCulture/FabiziCulture.style.scss";

const FabiziCulture = () => {
  return (
    <FlexGrid fullWidth className="fabiziCulture">
      <Row>
        <Column
          lg={{ span: 8, offset: 1 }}
          md={{ span: 6, offset: 0 }}
          sm={{ span: 4, offset: 0 }}
        >
          <Section>
            <Heading>
              <span className="fabiziCulture__header">Fabizi</span> Culture
            </Heading>
          </Section>
        </Column>
      </Row>
      <br />
      <Row>
        <Column lg={4} md={8} sm={4}>
          <ExpressiveCard pictogram={NotebookReference} title="Team Learning">
            <p>
              Fabizi believes in collective growth of its team members through
              continuous learning. Our potential partners are ready to endure
              the improvement process and willing to do whatever it takes to
              achieve their true potential.
            </p>
          </ExpressiveCard>
          <br />
        </Column>

        <Column lg={4} md={8} sm={4}>
          <ExpressiveCard pictogram={HelpDesk} title="Employee Retention">
            <p>
              Fabizi is a place to grow and a home to stay. Just as we require
              high standards and dedication from our team members, we offer a
              chance to learn, improve and stay in return. You don't need to
              worry about job safety with Fabizi.
            </p>
          </ExpressiveCard>
          <br />
        </Column>

        <Column lg={4} md={8} sm={4}>
          <ExpressiveCard pictogram={Sight} title="A Clear Vision And Values.">
            <p>
              Be creative, but more importantly have a clear vision and a robust
              set of rules. We need people who have a clear vision of what they
              want and how they want to achieve it. Dream big, plan your steps
              and let’s make it come true together.
            </p>
          </ExpressiveCard>
          <br />
        </Column>

        <Column lg={4} md={8} sm={4}>
          <ExpressiveCard pictogram={Cognitive} title="Global Mindset">
            <p>
              Fabizi is reaching for the global market and this means people
              involved with the project should also be capable of thinking on a
              global scale and adapt themselves to the ever-changing nature of
              the global market.
            </p>
          </ExpressiveCard>
          <br />
        </Column>
      </Row>
      <br />
      <Row>
        <Column lg={4} md={8} sm={4}>
          <ExpressiveCard
            pictogram={WatsonHealthAiStatusComplete}
            title="Problem-solving Orientation"
          >
            <p>
              As a tech-based team, we face new challenges on a daily basis. Our
              team members should have problem solving skills, and be ready and
              able to solve problems through creative methods.
            </p>
          </ExpressiveCard>
          <br />
        </Column>

        <Column lg={4} md={8} sm={4}>
          <ExpressiveCard
            pictogram={TypePattern}
            title="Diversity and Inclusion"
          >
            <p>
              Our team is made up of people of all backgrounds. Be yourself,
              focus on your growth and rest assured that Fabizi’s inclusive
              family welcomes you with open arms if you got what it takes to
              ride with us.
            </p>
          </ExpressiveCard>
          <br />
        </Column>

        <Column lg={4} md={8} sm={4}>
          <ExpressiveCard
            pictogram={IbmWatsonAssistant}
            title="Great Communication"
          >
            <p>
              One of the defining qualities of Fabizi is transparent, clear and
              effective communication between its members and with clients. This
              is one of the most paramount factors when we look to expand our
              team.
            </p>
          </ExpressiveCard>
          <br />
        </Column>

        <Column lg={4} md={8} sm={4}>
          <ExpressiveCard
            pictogram={GameConsole}
            title="Work-Life Balance and Fun"
          >
            <p>
              We take our job very seriously, have very high and strict
              standards and there are certain periods of heavy workload; but we
              believe that without a feeling of “fun” at work and a perfect
              work-life balance, no great work could be done.
            </p>
          </ExpressiveCard>
        </Column>
      </Row>
    </FlexGrid>
  );
};

export default FabiziCulture;
