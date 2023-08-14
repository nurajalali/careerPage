import { ExpressiveCard } from "@carbon/ibm-products/lib/components";
import { ArrowRight } from "@carbon/react/icons";
import { Grid, Column } from "@carbon/react";

const CareerCard = ({ jobItem }) => {
  return (
    <Grid fullWidth>
      {jobItem.map((job) => (
        <Column key={job.id} lg={4} md={4} sm={4}>
          <ExpressiveCard
            title={job.Title}
            description={job.City}
            primaryButtonText={job.Condition}
            primaryButtonIcon={ArrowRight}
            primaryButtonKind="ghost"
          ></ExpressiveCard>
          <br />
        </Column>
      ))}
    </Grid>
  );
};

export default CareerCard;
