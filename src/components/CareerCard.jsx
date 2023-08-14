import { ExpressiveCard } from "@carbon/ibm-products/lib/components";
import { ArrowRight } from "@carbon/react/icons";
import { Grid, Column } from "@carbon/react";
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
            title={job.Title}
            description={job.City}
          >
            <Text>{job.Condition}</Text>
          </ExpressiveCard>
          <br />
        </Column>
      ))}
    </Grid>
  );
};

export default CareerCard;
