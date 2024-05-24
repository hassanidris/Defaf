import React from "react";
import { Typography } from "@material-tailwind/react";
import { logo_footer, logo_nesma } from "../constants/images";
import { t } from "i18next";

const Footer = () => {
  return (
    <footer className="bg-[#4a90e2]">
      <div className="flex flex-col md:flex-row  md:items-end gap-4 justify-between text-white-blue-900 mx-auto max-w-[1280px] px-3 py-6">
        <div className=" flex justify-center items-end gap-4">
          <img src={logo_footer} alt="logo" className=" h-12" />
          <Typography
            as="p"
            variant="small"
            color="white"
            className="font-bold text-white"
          >
            {t("copyright1")} &copy; {new Date().getFullYear()}
          </Typography>
        </div>
        <div className=" flex justify-center items-center gap-4">
          <img className="w-12 " src={logo_nesma} alt="" />
          <Typography
            as="p"
            variant="small"
            color="white"
            className="font-bold text-white"
          >
            {t("copyright2")}
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
