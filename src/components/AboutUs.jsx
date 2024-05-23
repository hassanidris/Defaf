import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import { aboutBG, aboutImg } from "../constants/images";

const AboutUs = () => {
  const data = [
    {
      label: "About Us",
      value: "about",
      title1_1: "ABOUT",
      title1_2: "US",
      desc1_1: `Defaf United for Logistics Company is a part of Nesma Holding Group. Defaf Logistics was founded in 2016 with total investment in business more than 60 million SR to be Saudi Arabia’s leading logistics service provider. The company was established with a commitment to provide the highest quality professional services, which meet the expectations of our customers offering unparalleled access to Saudi Arabia’s industrial and consumer markets.`,
      desc1_2: `Defaf United for Logistics advances innovation and efficiency in logistics services by offering integrated and flexible solutions for cargo vessels and shippers of all sizes. The company has become the fastest growing company in Saudi Arabia in this field and has gained a distinctive reputation for providing solutions for difficult logistics.`,
      img1: aboutImg,
    },
    {
      label: "Mission & Vision",
      value: "mission",
      title1_1: "OUR",
      title1_2: "VISION",
      desc1_1: `To advance innovation and efficiency in logistics services.`,
      title2_1: "OUR",
      title2_2: "MISSION",
      desc2_1: `Defaf is dedicated to providing highly-optimized logistics services in the Middle East.`,
    },
    {
      label: "Quality Policy / Cargo Insurance",
      value: "quality",
      title1_1: "QUALITY",
      title1_2: "POLICY",
      desc1_1: `Defaf believes that Quality is not an option, but a necessity to survive and thrive in an environment of global competition. We aim to provide total customer satisfaction that will lead to customer loyalty. Our commitment to provide safe services. Quality is not just another goal. it is our basic strategy for future growth and development of our human capital.`,
      title2_1: "CARGO",
      title2_2: "INSURANCE",
      desc2_1: `Defaf is dedicated to providing highly-optimized logistics services in the Middle East.`,
    },
  ];
  return (
    <section
      id="about-us"
      className=" bg-fixed py-10 font-roboto bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${aboutBG})`,
      }}
    >
      <div className="flex flex-col md:flex-row  items-start gap-4 justify-between text-white-blue-900 mx-auto max-w-[1280px] px-3 my-10">
        <Tabs value="about" className=" w-full  ">
          <TabsHeader className="bg-white rounded-lg overflow-x-scroll">
            {data.map(({ label, value }) => (
              <Tab
                className=" font-medium font-roboto text-lg text-[#0B72BC]"
                key={value}
                value={value}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className=" bg-white rounded-lg mt-2 p-7">
            {data.map(
              ({
                value,
                title1_1,
                title1_2,
                desc1_1,
                desc1_2,
                title2_1,
                title2_2,
                desc2_1,
                desc2_2,
                img1,
              }) => (
                <TabPanel key={value} value={value}>
                  <div>
                    <Typography
                      as="h2"
                      variant="large"
                      className=" text-4xl mb-2 font-roboto"
                    >
                      <h2 className="text-4xl">
                        {title1_1}
                        <span className="text-[#0B72BC] !font-bold">
                          {" "}
                          {title1_2}
                        </span>
                      </h2>
                    </Typography>
                    <img
                      src={img1}
                      className=" float-right w-72 ml-3 mb-3"
                      alt=""
                    />
                    <Typography as="p" variant="lead" className=" mt-5">
                      {desc1_1}
                    </Typography>
                    <Typography as="p" variant="lead" className=" mt-5">
                      {desc1_2}
                    </Typography>
                  </div>
                  <div className=" mt-10">
                    <Typography
                      as="h2"
                      variant="large"
                      className=" text-4xl mb-2 font-roboto"
                    >
                      <h2 className="text-4xl">
                        {title2_1}
                        <span className="text-[#0B72BC] !font-bold">
                          {" "}
                          {title2_2}
                        </span>
                      </h2>
                    </Typography>
                    <Typography as="p" variant="lead" className=" mt-5">
                      {desc2_1}
                    </Typography>
                    <Typography as="p" variant="lead" className=" mt-5">
                      {desc2_2}
                    </Typography>
                  </div>
                </TabPanel>
              )
            )}
          </TabsBody>
        </Tabs>
      </div>
    </section>
  );
};

export default AboutUs;
