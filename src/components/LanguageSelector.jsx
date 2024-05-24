import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CiGlobe } from "react-icons/ci";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { ChevronUpIcon } from "@heroicons/react/24/solid";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const languages = [
  { code: "en", lang: "English" },
  { code: "ar", lang: "العربية" },
];

const LanguageSelector = ({ onLanguageChange }) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (onLanguageChange) {
      onLanguageChange();
    }
    setOpenMenu(false);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div>
      <Menu
        placement="bottom-center"
        open={openMenu}
        handler={setOpenMenu}
        allowHover
        offset={15}
        className=" !inline-block"
      >
        <MenuHandler className="flex items-center justify-between">
          <MenuItem>
            <CiGlobe size={25} />
            <ChevronUpIcon
              strokeWidth={2.5}
              className={`h-3.5 w-3.5 transition-transform ${
                openMenu ? "rotate-180" : ""
              }`}
            />
          </MenuItem>
        </MenuHandler>
        <MenuList>
          {languages.map((lng) => {
            return (
              <MenuItem key={lng.code}>
                <a
                  href="#"
                  className={` p-3 block font-cairo ${
                    lng.code === i18n.language ? " text-blue" : "text-black "
                  }`}
                  onClick={() => {
                    changeLanguage(lng.code);
                    onClick();
                  }}
                >
                  {lng.lang}
                </a>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
};

export default LanguageSelector;
