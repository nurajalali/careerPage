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
import "../SectionFour/JoinUS.style.scss";

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
        <Column lg={{ span: 8, offset: 1 }} md={6} sm={4}>
          <Section level={1}>
            <Heading className="Header__heading">Join Us</Heading>
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
