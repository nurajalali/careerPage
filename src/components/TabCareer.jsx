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
import CareerCard from "./CareerCard";
import job from "./data";
import { useState } from "react";

const TabCareer = () => {
  const [jobItem, setJobItem] = useState(job);

  const allJob = () => {
    setJobItem([...job]);
  };

  const filterProduct = (curlabel) => {
    const allProduct = job.filter((val) => {
      return val.label === curlabel;
    });
    setJobItem([...allProduct]);
  };
  const filterHumanResourse = (curlabel) => {
    const allHumanResourse = job.filter((val) => {
      return val.label === curlabel;
    });
    setJobItem([...allHumanResourse]);
  };

  const filterMarketing = (curlabel) => {
    const allMarketing = job.filter((val) => {
      return val.label === curlabel;
    });
    setJobItem([...allMarketing]);
  };
  const filterIT = (curlabel) => {
    const allIT = job.filter((val) => {
      return val.label === curlabel;
    });
    setJobItem([...allIT]);
  };
  const filterSupport = (curlabel) => {
    const allSupport = job.filter((val) => {
      return val.label === curlabel;
    });
    setJobItem([...allSupport]);
  };

  return (
    <Stack orientation="vertical" gap={6}>
      <Grid narrow>
        <Column lg={{ start: 2, span: 8 }} md={8} sm={4}>
          <Section level={2} className="Header">
            <Heading>Join Us</Heading>
          </Section>
          <Tabs>
            <TabList>
              <Tab onClick={() => allJob(job.id)}>All</Tab>
              <Tab onClick={() => filterProduct("Product")}>Product</Tab>
              <Tab onClick={() => filterHumanResourse("Human Resource")}>
                Human Resource
              </Tab>
              <Tab onClick={() => filterMarketing("Marketing")}>Marketing</Tab>
              <Tab onClick={() => filterIT("IT")}>IT</Tab>
              <Tab onClick={() => filterSupport("Support")}>Support</Tab>
            </TabList>
          </Tabs>
        </Column>
      </Grid>
      <CareerCard jobItem={jobItem} />
    </Stack>
  );
};

export default TabCareer;
