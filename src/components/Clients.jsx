import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  clnLogo1,
  clnLogo10,
  clnLogo11,
  clnLogo12,
  clnLogo2,
  clnLogo3,
  clnLogo4,
  clnLogo5,
  clnLogo6,
  clnLogo7,
  clnLogo8,
  clnLogo9,
} from "../constants/images";
import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation();
  let sliderRef = useRef(null);
  //   const play = () => {
  //     sliderRef.slickPlay();
  //   };
  //   const pause = () => {
  //     sliderRef.slickPause();
  //   };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          //   dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="clients">
      <div className="px-10 py-14 mx-auto max-w-[1280px]">
        <Typography
          variant="h2"
          color="black"
          className="p-3 !font-bold font-roboto"
        >
          <span className=" font-extralight">{t("clients-title1")}</span>{" "}
          {t("clients-title2")}
        </Typography>
        <div className="slider-container">
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            <div>
              <img className=" h-40 w-auto" src={clnLogo1} alt="" />
            </div>
            <div>
              <img className=" h-40 w-auto" src={clnLogo2} alt="" />
            </div>
            <div>
              <img className=" h-40 w-auto" src={clnLogo3} alt="" />
            </div>
            <div>
              <img className=" h-40 w-auto" src={clnLogo4} alt="" />
            </div>
            <div>
              <img className=" h-40 w-auto" src={clnLogo5} alt="" />
            </div>
            <div>
              <img className=" h-40 w-auto" src={clnLogo6} alt="" />
            </div>
            <div>
              <img className=" h-40 w-auto" src={clnLogo7} alt="" />
            </div>
            <div>
              <img className=" h-40 w-auto" src={clnLogo8} alt="" />
            </div>
            <div>
              <img className=" h-40 w-auto" src={clnLogo9} alt="" />
            </div>
            <div>
              <img className=" h-40 w-auto" src={clnLogo10} alt="" />
            </div>
            <div>
              <img className=" h-40 w-auto" src={clnLogo11} alt="" />
            </div>
            <div>
              <img className=" h-40 w-auto" src={clnLogo12} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;
