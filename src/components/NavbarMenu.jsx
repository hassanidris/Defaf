import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { logo } from "../constants/images";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const NavbarMenu = () => {
  const { t } = useTranslation();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleLanguageChange = () => {
    setOpenNav(false);
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="large"
        color="white"
        className="p-3 font-bold hover:bg-[#0B72BC] hover:rounded-lg"
      >
        <Link
          to="whyus"
          offset={-120}
          smooth={true}
          className=" cursor-pointer"
          onClick={() => setOpenNav(!openNav)}
        >
          {t("nav1")}
          {/* WHY US */}
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="white"
        className="p-3 font-bold hover:bg-[#0B72BC] hover:rounded-lg"
      >
        <Link
          to="services"
          offset={-120}
          smooth={true}
          className=" cursor-pointer"
          onClick={() => setOpenNav(!openNav)}
        >
          {t("nav2")}
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="white"
        className="p-3 font-bold hover:bg-[#0B72BC] hover:rounded-lg"
      >
        <Link
          to="about-us"
          offset={-120}
          smooth={true}
          className=" cursor-pointer"
          onClick={() => setOpenNav(!openNav)}
        >
          {t("nav3")}
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="white"
        className="p-3 font-bold hover:bg-[#0B72BC] hover:rounded-lg"
      >
        <a
          href="https://careers.nesma.com/en/"
          className="flex items-center"
          target="_blank"
        >
          {t("nav4")}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="white"
        className="p-3 font-bold hover:bg-[#0B72BC] hover:rounded-lg"
      >
        <Link
          to="clients"
          offset={-120}
          smooth={true}
          className=" cursor-pointer"
          onClick={() => setOpenNav(!openNav)}
        >
          {t("nav5")}
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="white"
        className="p-3 font-bold hover:bg-[#0B72BC] hover:rounded-lg"
      >
        <Link
          to="contact"
          offset={-120}
          smooth={true}
          className=" cursor-pointer"
          onClick={() => setOpenNav(!openNav)}
        >
          {t("nav6")}
        </Link>
      </Typography>
      <LanguageSelector onLanguageChange={handleLanguageChange} />
    </ul>
  );

  return (
    <div className=" w-screen max-h-screen flex justify-center overflow-scroll !bg-black/90 fixed z-30">
      <Navbar className=" !backdrop-filter-none !w-full  !bg-opacity-60  top-0 z-10 h-max   rounded-none py-2 !px-0 !lg:px-0 lg:py-1  !border-none !shadow-none bg-transparent">
        <div className="flex items-center justify-between text-white-blue-900 mx-auto max-w-[1440px] px-3">
          <Typography
            as="a"
            href="#"
            className=" cursor-pointer py-1.5 font-medium"
          >
            <div className=" h-[100px]">
              <img className=" w-full h-full" src={logo} alt="logo" />
            </div>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        <MobileNav open={openNav}>
          {navList}
          {/* <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div> */}
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
