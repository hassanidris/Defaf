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
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  const data = [
    {
      label: t("about-tab"),
      value: "about",
      title1_1: t("about-title1"),
      title1_2: t("about-title2"),
      desc1_1: t("about-desc1"),
      desc1_2: t("about-desc2"),
      img1: aboutImg,
    },
    {
      label: t("mission-tab"),
      value: "mission",
      title1_1: t("vision-title1"),
      title1_2: t("vision-title2"),
      desc1_1: t("vision-desc"),
      title2_1: t("mission-title1"),
      title2_2: t("mission-title2"),
      desc2_1: t("mission-desc"),
    },
    {
      label: t("quality-tab"),
      value: "quality",
      title1_1: t("quality-title1"),
      title1_2: t("quality-title2"),
      desc1_1: t("quality-desc"),
      title2_1: t("cargo-title1"),
      title2_2: t("cargo-title2"),
      desc2_1: t("cargo-desc"),
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
                className=" font-medium  font-cairo text-lg text-[#0B72BC]"
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
                      className=" text-4xl mb-2  font-cairo"
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
                    <Typography
                      as="p"
                      variant="lead"
                      className=" mt-5 font-cairo"
                    >
                      {desc1_1}
                    </Typography>
                    <Typography
                      as="p"
                      variant="lead"
                      className=" mt-5 font-cairo"
                    >
                      {desc1_2}
                    </Typography>
                  </div>
                  <div className=" mt-10">
                    <Typography
                      as="h2"
                      variant="large"
                      className=" text-4xl mb-2  font-cairo"
                    >
                      <h2 className="text-4xl">
                        {title2_1}
                        <span className="text-[#0B72BC] !font-bold">
                          {" "}
                          {title2_2}
                        </span>
                      </h2>
                    </Typography>
                    <Typography
                      as="p"
                      variant="lead"
                      className=" mt-5 font-cairo"
                    >
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
