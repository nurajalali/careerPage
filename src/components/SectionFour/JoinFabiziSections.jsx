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
import JoinFabiziCards from "./JoinFabiziCards";
import job from "./data";
import { useState } from "react";

const JoinFabiziSections = () => {
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
          lg={{ span: 8, offset: 1 }}
          md={{ span: 6, offset: 0 }}
          sm={{ span: 4, offset: 0 }}
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
      <JoinFabiziCards jobItem={jobItem} />
    </Stack>
  );
};

export default JoinFabiziSections;
