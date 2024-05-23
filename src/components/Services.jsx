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
            <span className=" font-extralight">OUR</span> SERVICES
          </Typography>
          <Typography as="p" variant="lead" className=" my-5">
            Defaf Logistics is dedicated to providing highly-optimized
            integrated and ﬂexible logistics solutions to all size of customers
            in Saudi Arabia. Through an understanding of the unique business
            needs of each customer, an appropriate and logical solution is
            developed. Supported by highly qualified and trained professionals,
            Defaf Logistics services include:
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
            Container Storage
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            <Typography as="p" variant="paragraph">
              Defaf Logistics specializes in the exclusive, management, storage
              and servicing of containers and bulk cargo. Defaf terminals have
              the latest container – handling Equipment, and a skilled container
              service team that is properly trained and qualified to cater to
              different requirements and needs of customers and shipping lines.
              All cargo is stored in easily identifiable zones, and maintained
              to FIFO requirements. Defaf terminals are very near to sea ports
              and have state - of - the - art IT which capable of providing
              required EDI messages and reports to shipping lines/customers to
              streamline operations and tracking. Defaf has many trusting
              costumers that give us the motivation to continuously improve our
              performance and invest in our team and operation capacity.
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
            Reefer Plug
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            <Typography as="p" variant="paragraph">
              Defaf terminals have more than 576 reefer plug points supported by
              powerful and efficient generators to ensure uninterrupted power
              supply to maintain the required temperatures. Correct temperatures
              are maintained at all times by using requisite and specialized
              equipment .
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
            Reefer Pre-Trip Inspection
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            <Typography as="p" variant="paragraph">
              PTI is an inspection conducted on an empty reefer container before
              release, to ensure the correct functioning of the cooling unit,
              temperature control and recording devices. PTI also includes
              checking the container for structural damage, and ensuring that
              the inside of the container is clean and ready in all respect to
              receive cargo. Defaf provide pre trip inspection and / or pre
              cooling services for reefer containers. Handled by well trained,
              skillfully man power and good communication skill will guarantee
              the readiness and quality of reefer
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
            Transportation
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            <Typography as="p" variant="paragraph">
              With our ﬂeet, we oﬀer diﬀerent transport services so we can
              arrange the movement of containers and cargo anywhere within the
              Saudi Arabia and GCC, such as: Refrigerated Cargo
              Transport(Reefer/side curtain trailers), Dry Container Transport,
              Reefer Container Transport, Diesel Supply & Water Supply.
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
            Stuffing & Un-Stuffing
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            <Typography as="p" variant="paragraph">
              Defaf Terminals handle cargo stuffing And stripping at our
              terminals. Consolidation service typically involves the cargo
              transportation to the stuffing point, stuffing of cargo in
              container, custom process of shipping documents, and finally
              re-packing if necessary for delivery. Defaf provides dedicated
              area, equipment and manpower to support stuffing and stripping
              operations based on customer demand.
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
            Container Repair
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            <Typography as="p" variant="paragraph">
              From minor adjustments to major repairs, Defaf workshop team can
              handle M&R needs. Our experienced staﬀ and professional mechanics
              know how to properly repair your equipment to your exacting
              requirements. We know the importance of having your equipment
              available for its next booking. From inspection to repair , Defaf
              delivers quality you can count on.
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
