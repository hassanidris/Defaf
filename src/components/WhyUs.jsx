import React from "react";
import { Typography } from "@material-tailwind/react";
import { FaCircle } from "react-icons/fa";
import { bnr2, bnr3 } from "../constants/images";
import { useTranslation } from "react-i18next";

const WhyUs = () => {
  const { t } = useTranslation();
  return (
    <section id="whyus">
      <div className="flex flex-col md:flex-row  items-start gap-4 justify-between text-white-blue-900 mx-auto max-w-[1280px] px-3 py-14">
        <div>
          <Typography
            variant="h2"
            color="black"
            className="p-3 !font-bold !font-roboto"
          >
            {t("why-title1")}
            <span className=" font-extralight"> {t("why-title2")}</span>
          </Typography>
          <ul className="list-outside">
            <Typography as="li" variant="lead" color="black" className=" p-1">
              <FaCircle className="inline-block mx-2 text-[#0B72BC]" />
              {t("why-point1")}
            </Typography>
            <Typography as="li" variant="lead" color="black" className=" p-1">
              <FaCircle className="inline-block mx-2 text-[#0B72BC]" />
              {t("why-point2")}
            </Typography>
            <Typography as="li" variant="lead" color="black" className=" p-1">
              <FaCircle className="inline-block mx-2 text-[#0B72BC]" />
              {t("why-point3")}
            </Typography>
            <Typography as="li" variant="lead" color="black" className=" p-1">
              <FaCircle className="inline-block mx-2 text-[#0B72BC]" />
              {t("why-point4")}
            </Typography>

            <Typography as="li" variant="lead" color="black" className=" p-1">
              <FaCircle className="inline-block mx-2 text-[#0B72BC]" />
              {t("why-point5")}
            </Typography>
            <Typography as="li" variant="lead" color="black" className=" p-1">
              <FaCircle className="inline-block mx-2 text-[#0B72BC]" />
              {t("why-point6")}
            </Typography>
            <Typography as="li" variant="lead" color="black" className=" p-1">
              <FaCircle className="inline-block mx-2 text-[#0B72BC]" />
              {t("why-point7")}
            </Typography>
          </ul>
        </div>
        <div>
          <img
            className="h-96 w-full rounded-lg object-cover object-center"
            src={bnr3}
            alt="nature image"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
