import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";
import {
  serv_container,
  serv_reefer_plug,
  serv_reefer_pretrip,
  serv_repair,
  serv_stuffing,
  serv_transportation,
} from "../constants/data";
import { useTranslation } from "react-i18next";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Services = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section id="services" className="py-10 font-roboto bg-[#f0f0f0]">
      <div className="text-white-blue-900 mx-auto max-w-[1280px] px-3 my-10">
        <div>
          <Typography
            variant="h2"
            color="black"
            className="!font-bold font-roboto"
          >
            <span className=" font-extralight">{t("services-title1")}</span>{" "}
            {t("services-title2")}
          </Typography>
          <Typography as="p" variant="lead" className=" my-5">
            {t("services-desc")}
          </Typography>
        </div>
        <Accordion
          open={open === 1}
          icon={<Icon id={1} open={open} />}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4 "
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors ${
              open === 1 ? "text-blue-500 !font-bold hover:!text-blue-700 " : ""
            }`}
          >
            {t("acco1-title")}
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            <Typography as="p" variant="paragraph">
              {t("acco1-desc")}
            </Typography>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-7">
              {serv_container.map(({ img }, index) => (
                <div key={index}>
                  <img
                    className=" h-60 w-full max-w-full rounded-lg object-cover object-center"
                    src={img}
                    alt="gallery-photo"
                  />
                </div>
              ))}
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={<Icon id={2} open={open} />}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 transition-colors ${
              open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            {t("acco2-title")}
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            <Typography as="p" variant="paragraph">
              {t("acco2-desc")}
            </Typography>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-7">
              {serv_reefer_plug.map(({ img }, index) => (
                <div key={index}>
                  <img
                    className=" h-60 w-full max-w-full rounded-lg object-cover object-center"
                    src={img}
                    alt="gallery-photo"
                  />
                </div>
              ))}
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          icon={<Icon id={3} open={open} />}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 transition-colors ${
              open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            {t("acco3-title")}
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            <Typography as="p" variant="paragraph">
              {t("acco3-desc")}
            </Typography>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-7">
              {serv_reefer_pretrip.map(({ img }, index) => (
                <div key={index}>
                  <img
                    className=" h-60 w-full max-w-full rounded-lg object-cover object-center"
                    src={img}
                    alt="gallery-photo"
                  />
                </div>
              ))}
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 4}
          icon={<Icon id={4} open={open} />}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className={`border-b-0 transition-colors ${
              open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            {t("acco4-title")}
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            <Typography as="p" variant="paragraph">
              {t("acco4-desc")}
            </Typography>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-7">
              {serv_transportation.map(({ img }, index) => (
                <div key={index}>
                  <img
                    className=" h-60 w-full max-w-full rounded-lg object-cover object-center"
                    src={img}
                    alt="gallery-photo"
                  />
                </div>
              ))}
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 5}
          icon={<Icon id={5} open={open} />}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className={`border-b-0 transition-colors ${
              open === 5 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            {t("acco5-title")}
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            <Typography as="p" variant="paragraph">
              {t("acco5-desc")}
            </Typography>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-7">
              {serv_stuffing.map(({ img }, index) => (
                <div key={index}>
                  <img
                    className=" h-60 w-full max-w-full rounded-lg object-cover object-center"
                    src={img}
                    alt="gallery-photo"
                  />
                </div>
              ))}
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 6}
          icon={<Icon id={6} open={open} />}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(6)}
            className={`border-b-0 transition-colors ${
              open === 6 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            {t("acco6-title")}
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            <Typography as="p" variant="paragraph">
              {t("acco6-desc")}
            </Typography>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-7">
              {serv_repair.map(({ img }, index) => (
                <div key={index}>
                  <img
                    className=" h-60 w-full max-w-full rounded-lg object-cover object-center"
                    src={img}
                    alt="gallery-photo"
                  />
                </div>
              ))}
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </section>
  );
};

export default Services;
