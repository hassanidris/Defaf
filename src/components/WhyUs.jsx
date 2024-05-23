import React from "react";
import { Typography } from "@material-tailwind/react";
import { FaCircle } from "react-icons/fa";
import { bnr2, bnr3 } from "../constants/images";

const WhyUs = () => {
  return (
    <section id="whyus">
      <div className="flex flex-col md:flex-row  items-start gap-4 justify-between text-white-blue-900 mx-auto max-w-[1280px] px-3 py-14">
        <div>
          <Typography
            variant="h2"
            color="black"
            className="p-3 !font-bold font-roboto"
          >
            WHY<span className=" font-extralight">US?</span>
          </Typography>
          <ul className="list-outside">
            <Typography as="li" variant="lead" color="black" className=" p-1">
              <FaCircle className="inline-block mr-2 text-[#0B72BC]" />
              Integrated and Flexible Logistics Solutions.
            </Typography>
            <Typography as="li" variant="lead" color="black" className=" p-1">
              <FaCircle className="inline-block mr-2 text-[#0B72BC]" />
              Fleet for different transport services.
            </Typography>
            <Typography as="li" variant="lead" color="black" className=" p-1">
              <FaCircle className="inline-block mr-2 text-[#0B72BC]" />
              Different Branches inside KSA and GCC.
            </Typography>
            <Typography as="li" variant="lead" color="black" className=" p-1">
              <FaCircle className="inline-block mr-2 text-[#0B72BC]" />
              24/7 surveillance Terminals near to sea ports.
            </Typography>

            <Typography as="li" variant="lead" color="black" className=" p-1">
              <FaCircle className="inline-block mr-2 text-[#0B72BC]" />
              Largest Reefer container terminal outside sea ports in KSA.
            </Typography>
            <Typography as="li" variant="lead" color="black" className=" p-1">
              <FaCircle className="inline-block mr-2 text-[#0B72BC]" />
              Offices inside sea ports.
            </Typography>
            <Typography as="li" variant="lead" color="black" className=" p-1">
              <FaCircle className="inline-block mr-2 text-[#0B72BC]" />
              1,200 M² fully equipped workshop.
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
