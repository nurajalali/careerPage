import { ExpressiveCard } from "@carbon/ibm-products/lib/components";
import { ArrowRight } from "@carbon/react/icons";
import { Grid, Column } from "@carbon/react";

const CareerCards = ({ jobItem }) => {
  return (
    <Grid fullWidth>
      {jobItem.map((job) => (
        <Column key={job.id} lg={4} md={4} sm={4}>
          <ExpressiveCard
            className="button--career-card"
            title={job.Title}
            description={job.City}
            actionIcons={[
              {
                href: "#",
                icon: ArrowRight,
                iconDescription: "Next",
                id: "1",
              },
            ]}
            primaryButtonText={job.Condition}
            primaryButtonKind="ghost"
          ></ExpressiveCard>
          <br />
        </Column>
      ))}
    </Grid>
  );
};

export default CareerCards;
