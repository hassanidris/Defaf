import { Typography } from "@material-tailwind/react";
import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact">
      <div className="flex flex-col md:flex-row  items-start gap-4 justify-between text-white-blue-900 mx-auto max-w-[1280px] px-3 py-14">
        <div className=" flex-1">
          <Typography
            variant="h2"
            color="black"
            className="!font-bold  font-cairo mb-8"
          >
            {t("contact-title")}
          </Typography>
          <Typography as="p" variant="lead" className=" font-cairo">
            {t("contact-address1")}
          </Typography>
          <Typography as="p" variant="lead" className=" mb-5 font-cairo">
            {t("contact-address2")}
          </Typography>
          <Typography as="p" variant="lead" className=" font-cairo">
            {t("contact-address3")}
          </Typography>
        </div>
        <div className=" flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.2163076712363!2d39.10797397649918!3d21.65544136595741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d975b10b07eb%3A0xf578cddd8e0d5538!2sDefaf%20United%20for%20Logistics%20Head%20Office!5e0!3m2!1sen!2ssa!4v1716479196284!5m2!1sen!2ssa"
            width="600"
            height="350"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
