import { Tabs, TabList, Tab, Section, Heading, Stack } from "@carbon/react";
import CareerCard from "./CareerCard";
import job from "./data";
import { useState } from "react";

const TabCareer = () => {
  const [jobItem, setJobItem] = useState(job);

  const filterProduct = (curlabel) => {
    const allProduct = job.filter((val) => {
      return val.label === curlabel;
    });
    setJobItem([...allProduct]);
    console.log(allProduct);
  };
  const filterHumanResourse = (curlabel) => {
    console.log("cur", curlabel);
    const allHumanResourse = job.filter((val) => {
      console.log(val.label);
      return val.label === curlabel;
    });
    setJobItem([...allHumanResourse]);
  };

  const filterMarketing = (curlabel) => {
    console.log("cur", curlabel);
    const allMarketing = job.filter((val) => {
      console.log(val.label);
      return val.label === curlabel;
    });
    setJobItem([...allMarketing]);
  };
  const filterIT = (curlabel) => {
    console.log("cur", curlabel);
    const allIT = job.filter((val) => {
      console.log(val.label);
      return val.label === curlabel;
    });
    setJobItem([...allIT]);
  };
  const filterSupport = (curlabel) => {
    console.log("cur", curlabel);
    const allSupport = job.filter((val) => {
      console.log(val.label);
      return val.label === curlabel;
    });
    setJobItem([...allSupport]);
  };

  return (
    <Stack gap={3}>
      <Section level={2}>
        <Heading>Join Us</Heading>
      </Section>
      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab onClick={() => filterProduct("Product")}>Product</Tab>
          <Tab onClick={() => filterHumanResourse("Human Resource")}>
            Human Resource
          </Tab>
          <Tab onClick={() => filterMarketing("Marketing")}>Marketing</Tab>
          <Tab onClick={() => filterIT("IT")}>IT</Tab>
          <Tab onClick={() => filterSupport("Support")}>Support</Tab>
        </TabList>
      </Tabs>
      <CareerCard jobItem={jobItem} />
    </Stack>
  );
};

export default TabCareer;
