import { ExpressiveCard } from "@carbon/ibm-products/lib/components";
import { ArrowRight } from "@carbon/react/icons";
import { FlexGrid, Row, Column, Stack, Heading, Section } from "@carbon/react";
import { Text } from "@carbon/react/lib/components/Text";
import job from "./data";
// import { useState } from "react";

const CareerCard = () => {
  // const [jobTitle, setJobTitle] = useState("");
  // const [city, setCity] = useState("");
  // const [condition, setConditon] = useState("");
  // const [count, setCount] = useState(0);

  // addNewJob = {
  //   Title:jobTitle,
  //   City : city,
  //   Condition: condition,
  // }

  return (
    <FlexGrid fullWidth>
      <Row>
        {job.map((job) => (
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
