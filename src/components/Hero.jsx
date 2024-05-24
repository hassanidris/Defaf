import { Typography } from "@material-tailwind/react";
import { bnr1, bnr2, bnr3 } from "../constants/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className=" relative h-[80vh]">
      <Swiper
        // spaceBetween={10}
        centeredSlides={true}
        dir="rtl"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img
              src={bnr1}
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center  bg-black/75">
              <div className="w-2/4 ml-12 md:w-1/4 md:mx-20 lg:mx-32 bg-black/60">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-2xl md:text-3xl lg:text-4xl bg-[#4a90e2] p-3"
                >
                  {t("hero-msg-title1")}
                </Typography>
                <Typography variant="lead" color="white" className="mb-12 p-3">
                  {t("hero-msg-desc1")}
                </Typography>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img
              src={bnr2}
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center  bg-black/75">
              <div className="w-2/4 ml-12 md:w-1/4 md:mx-20 lg:mx-32 bg-black/60">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-2xl md:text-3xl lg:text-4xl bg-[#4a90e2] p-3"
                >
                  {t("hero-msg-title2")}
                </Typography>
                <Typography variant="lead" color="white" className="mb-12 p-3">
                  {t("hero-msg-desc2")}
                </Typography>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img
              src={bnr3}
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center  bg-black/75">
              <div className="w-2/4 ml-12 md:w-1/4 md:mx-20 lg:mx-32 bg-black/60">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-2xl md:text-3xl lg:text-4xl bg-[#4a90e2] p-3"
                >
                  {t("hero-msg-title3")}
                </Typography>
                <Typography variant="lead" color="white" className="mb-12 p-3">
                  {t("hero-msg-desc3")}
                </Typography>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
