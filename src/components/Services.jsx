import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

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
          className="mb-2 rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors ${
              open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            Container Storage
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            Defaf Logistics specializes in the exclusive, management, storage
            and servicing of containers and bulk cargo. Defaf terminals have the
            latest container – handling Equipment, and a skilled container
            service team that is properly trained and qualified to cater to
            different requirements and needs of customers and shipping lines.
            All cargo is stored in easily identifiable zones, and maintained to
            FIFO requirements. Defaf terminals are very near to sea ports and
            have state - of - the - art IT which capable of providing required
            EDI messages and reports to shipping lines/customers to streamline
            operations and tracking. Defaf has many trusting costumers that give
            us the motivation to continuously improve our performance and invest
            in our team and operation capacity.
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
            Defaf terminals have more than 576 reefer plug points supported by
            powerful and efficient generators to ensure uninterrupted power
            supply to maintain the required temperatures. Correct temperatures
            are maintained at all times by using requisite and specialized
            equipment .
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
            PTI is an inspection conducted on an empty reefer container before
            release, to ensure the correct functioning of the cooling unit,
            temperature control and recording devices. PTI also includes
            checking the container for structural damage, and ensuring that the
            inside of the container is clean and ready in all respect to receive
            cargo. Defaf provide pre trip inspection and / or pre cooling
            services for reefer containers. Handled by well trained, skillfully
            man power and good communication skill will guarantee the readiness
            and quality of reefer container.
          </AccordionBody>
        </Accordion>
      </div>
    </section>
  );
};

export default Services;
