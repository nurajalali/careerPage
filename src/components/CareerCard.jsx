import { ExpressiveCard } from "@carbon/ibm-products/lib/components";
import { ArrowRight } from "@carbon/react/icons";
import { Grid, Column, Button } from "@carbon/react";

const CareerCard = ({ jobItem }) => {
  return (
    <Grid fullWidth>
      {jobItem.map((job) => (
        <Column key={job.id} lg={4} md={3} sm={3}>
          <ExpressiveCard
            className="button--career-card"
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
