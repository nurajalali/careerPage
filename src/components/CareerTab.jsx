import {
  Tabs,
  TabList,
  Tab,
  Section,
  Heading,
  Stack,
  Column,
  Grid,
} from "@carbon/react";
import CareerCards from "./CareerCards";
import job from "./data";
import { useState } from "react";

const CareerTab = () => {
  const [jobItem, setJobItem] = useState(job);

  const allJob = () => {
    setJobItem([...job]);
  };

  const filterJob = (curlabel) => {
    const similarJob = job.filter((val) => {
      return val.label === curlabel;
    });
    setJobItem([...similarJob]);
  };

  return (
    <Stack orientation="vertical" gap={6}>
      <Grid fullWidth>
        <Column
          lg={{ start: 2, span: 8 }}
          md={{ start: 1, span: 6 }}
          sm={{ start: 1, span: 4 }}
        >
          <Section level={2} className="Header">
            <Heading>Join Us</Heading>
          </Section>
          <Tabs>
            <TabList>
              <Tab onClick={() => allJob(job.id)}>All</Tab>
              <Tab onClick={() => filterJob("Product")}>Product</Tab>
              <Tab onClick={() => filterJob("Human Resource")}>
                Human Resource
              </Tab>
              <Tab onClick={() => filterJob("Marketing")}>Marketing</Tab>
              <Tab onClick={() => filterJob("IT")}>IT</Tab>
              <Tab onClick={() => filterJob("Support")}>Support</Tab>
            </TabList>
          </Tabs>
        </Column>
      </Grid>
      <CareerCards jobItem={jobItem} />
    </Stack>
  );
};

export default CareerTab;
