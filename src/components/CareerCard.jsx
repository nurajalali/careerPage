import { ExpressiveCard } from "@carbon/ibm-products/lib/components";
import { ArrowRight } from "@carbon/react/icons";
import { Grid, Column, Stack, Heading, Section } from "@carbon/react";
import { Text } from "@carbon/react/lib/components/Text";

const CareerCard = ({ jobItem }) => {
  return (
    <Grid fullWidth>
      {jobItem.map((job) => (
        <Column key={job.id} lg={4} md={4} sm={4}>
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
    </Grid>
  );
};

export default CareerCard;
