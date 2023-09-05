import { ExpressiveCard } from "@carbon/ibm-products/lib/components";
import { ArrowRight } from "@carbon/react/icons";
import { Grid, Column } from "@carbon/react";
import "../SectionFour/JoinUS.style.scss";

const JoinFabiziCards = ({ jobItem }) => {
  return (
    <Grid fullWidth>
      {jobItem.map((job) => (
        <Column key={job.id} lg={4} md={4} sm={4}>
          <ExpressiveCard
            title={job.Title}
            description={job.City}
            actionIcons={[
              {
                href: "#",
                icon: ArrowRight,
              },
            ]}
            primaryButtonText={job.Condition}
            primaryButtonKind="ghost"
            className="ExpressiveCard--color"
          ></ExpressiveCard>
          <br />
        </Column>
      ))}
    </Grid>
  );
};

export default JoinFabiziCards;
