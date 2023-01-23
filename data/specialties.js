import {
  MdFamilyRestroom,
  MdGroups,
  MdWork,
  MdRealEstateAgent,
} from "react-icons/md";
import { FaHandshake, FaChess, FaChalkboardTeacher } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";
import { RiFileSearchFill, RiBankFill, RiShieldUserFill } from "react-icons/ri";
import { HiCurrencyDollar } from "react-icons/hi";
import { GiPistolGun } from "react-icons/gi";

import { useLang } from "/context/useLanguage";

export default function Specialties() {
  const translate = useLang().initialLanguage.body.pages.home.specialties;

  return [
    {
      color: "primary",
      icon: <MdFamilyRestroom size="5vw" color="#fbce33" />,
      title: translate.familyLaw.title,
      subtitle: translate.familyLaw.description,
      buttonContent: translate.cardButton,
    },
    {
      color: "secondary",
      icon: <MdGroups size="5vw" color="#fbce33" />,
      title: translate.civilLaw.title,
      subtitle: translate.civilLaw.description,
      buttonContent: translate.cardButton,
    },
    {
      color: "primary",
      icon: <FaChalkboardTeacher size="5vw" color="#fbce33" />,
      title: translate.labourLaw.title,
      subtitle: translate.labourLaw.description,
      buttonContent: translate.cardButton,
    },
    {
      color: "secondary",
      icon: <FaHandshake size="5vw" color="#fbce33" />,
      title: translate.negotiation.title,
      subtitle: translate.negotiation.description,
      buttonContent: translate.cardButton,
    },
    {
      color: "primary",
      icon: <IoIosBusiness size="5vw" color="#fbce33" />,
      title: translate.businessRecovery.title,
      subtitle: translate.businessRecovery.description,
      buttonContent: translate.cardButton,
    },
    {
      color: "secondary",
      icon: <MdWork size="5vw" color="#fbce33" />,
      title: translate.businessLaw.title,
      subtitle: translate.businessLaw.description,
      buttonContent: translate.cardButton,
    },
    {
      color: "primary",
      icon: <RiFileSearchFill size="5vw" color="#fbce33" />,
      title: translate.research.title,
      subtitle: translate.research.description,
      buttonContent: translate.cardButton,
    },
    {
      color: "secondary",
      icon: <RiBankFill size="5vw" color="#fbce33" />,
      title: translate.administrativeLaw.title,
      subtitle: translate.administrativeLaw.description,
      buttonContent: translate.cardButton,
    },
    {
      color: "primary",
      icon: <HiCurrencyDollar size="5vw" color="#fbce33" />,
      title: translate.bankingLaw.title,
      subtitle: translate.bankingLaw.description,
      buttonContent: translate.cardButton,
    },
    {
      color: "secondary",
      icon: <MdRealEstateAgent size="5vw" color="#fbce33" />,
      title: translate.heritage.title,
      subtitle: translate.heritage.description,
      buttonContent: translate.cardButton,
    },
    {
      color: "primary",
      icon: <GiPistolGun size="5vw" color="#fbce33" />,
      title: translate.criminalLaw.title,
      subtitle: translate.criminalLaw.description,
      buttonContent: translate.cardButton,
    },
    {
      color: "secondary",
      icon: <RiShieldUserFill size="5vw" color="#fbce33" />,
      title: translate.consumerProtection.title,
      subtitle: translate.consumerProtection.description,
      buttonContent: translate.cardButton,
    },
  ];
}
