import { Carousel, Typography, Button } from "@material-tailwind/react";
import { bnr1, bnr2, bnr3 } from "../constants/images";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className=" h-[80vh]">
      <div className="relative h-full w-full">
        <img src={bnr1} alt="image 1" className="h-full w-full object-cover" />
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
    </div>
    // <Carousel
    //   loop={true}
    //   autoplay={true}
    //   transition={{ type: "tween", duration: 0.5 }}
    //   className="h-[80vh]"
    // >
    //   <div className="relative h-full w-full">
    //     <img src={bnr1} alt="image 1" className="h-full w-full object-cover" />
    //     <div className="absolute inset-0 grid h-full w-full items-center  bg-black/75">
    //       <div className="w-2/4 ml-12 md:w-1/4 md:ml-20 lg:ml-32 bg-black/60">
    //         <Typography
    //           variant="h1"
    //           color="white"
    //           className="mb-4 text-2xl md:text-3xl lg:text-4xl bg-[#4a90e2] p-3"
    //         >
    //           Innovative & efficient
    //         </Typography>
    //         <Typography variant="lead" color="white" className="mb-12 p-3">
    //           Defaf utilizes state-of-the-art logitics technology
    //         </Typography>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="relative h-full w-full">
    //     <img src={bnr2} alt="image 2" className="h-full w-full object-cover" />
    //     <div className="absolute inset-0 grid h-full w-full items-center  bg-black/75">
    //       <div className="w-2/4 ml-12 md:w-1/4 md:ml-20 lg:ml-32 bg-black/60">
    //         <Typography
    //           variant="h1"
    //           color="white"
    //           className="mb-4 text-2xl md:text-3xl lg:text-4xl bg-[#4a90e2] p-3"
    //         >
    //           Safe & Secure
    //         </Typography>
    //         <Typography variant="lead" color="white" className="mb-12 p-3">
    //           Defaf maintains gated access with 24/7 security surveillance
    //         </Typography>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="relative h-full w-full">
    //     <img src={bnr3} alt="image 3" className="h-full w-full object-cover" />
    //     <div className="absolute inset-0 grid h-full w-full items-center  bg-black/75">
    //       <div className="w-2/4 ml-12 md:w-1/4 md:ml-20 lg:ml-32 bg-black/60">
    //         <Typography
    //           variant="h1"
    //           color="white"
    //           className="mb-4 text-2xl md:text-3xl lg:text-4xl bg-[#4a90e2] p-3"
    //         >
    //           Professional
    //         </Typography>
    //         <Typography variant="lead" color="white" className="mb-12 p-3">
    //           Defaf focuses on every customer and takes professional approach
    //         </Typography>
    //       </div>
    //     </div>
    //   </div>
    // </Carousel>
  );
};

export default Hero;
