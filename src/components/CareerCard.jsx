import { ExpressiveCard } from "@carbon/ibm-products/lib/components";
import { ArrowRight } from "@carbon/react/icons";
import { FlexGrid, Row, Column, Stack, Heading, Section } from "@carbon/react";
import { Text } from "@carbon/react/lib/components/Text";

const CareerCard = ({ jobItem }) => {
  return (
    <FlexGrid fullWidth>
      <Row>
        {jobItem.map((job) => (
          <Column key={job.id} lg={4} md={8} sm={4}>
            <ExpressiveCard
              actionIcons={[
                {
                  icon: ArrowRight,
                  iconDescription: "Next",
                },
              ]}
            >
              <Stack gap={5}>
                <div>
                  <Section level={3}>
                    <Heading>{job.Title}</Heading>
                  </Section>
                  <Text>{job.City}</Text>
                </div>
                <Text>{job.Condition}</Text>
              </Stack>
            </ExpressiveCard>
          </Column>
        ))}
      </Row>
    </FlexGrid>
  );
};

export default CareerCard;
