import React, { useState, useEffect } from "react";
// import { useWindowScroll } from 'react-use';
import { useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import ModelTrainingIcon from "@mui/icons-material/DvrOutlined";
import ModelTrainingRoundedIcon from "@mui/icons-material/ModelTrainingRounded";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import logo22 from "../../assets/spylogo1.png";
import LogoFull from "../../assets/logo2.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import DevicesIcon from "@mui/icons-material/Devices";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { TbSquareLetterE } from "react-icons/tb";
import { Link } from "react-router-dom";
const navListMenuItems = [
  {
    title: "ERPNext TECHNOLOGY",
    title1: "eRPNext_technology",
    // description: "Read insightful articles, tips, and expert opinions.",
    icon: TbSquareLetterE,
    color: "blue", // Add a color property for the icon
    Type1: "Consulting",
    type1link: "consulting",
    type2link: "implementation",
    type3link: "third_party_integrations",
    Type2: "Implementation",
    Type3: "Third-Party Integrations",
  },
  {
    title: "ECOMMERCE SOLUTIONS",
    title1: "ecommerce_solutions",
    // description: "Find the perfect solution for your needs.",
    icon: ShoppingCartIcon,
    color: "blue",
    // Add a color property for the icon
    Type1: "Magento eCommerce Development",
    Type2: "Mobile Commerce (mCommerce)",
    Type3: "eCommerce",
    type1link: "magento_eCommerce_development",
    type2link: "mobile_commerce_(mCommerce)",
    type3link: "eCommerce"
  },
  {
    title: "FRONTEND",
    title1: "frontend",
    // description: "Meet and learn about our dedication",
    icon: DevicesIcon,
    color: "orange",
    Type1: "Angular JS",
    Type2: "React JS",
    Type3: "NEXT JS",
    type1link: "angular_js",
    type2link: "react_js",
    type3link: "next_js",
  },
  {
    title: "MOBILE",
    title1: "mobile",
    // description: "Find the perfect solution for your needs.",
    icon: PhoneIphoneIcon,
    color: "green", // Add a color property for the icon
    Type1: "IPhone Application",
    Type2: "Android Application",
    Type3: "Hybrid App",
    type1link: "iphone_application",
    type2link: "android_application",
    type3link: "Hybrid_App"
  },
  {
    title: "BACKEND",
    title1: "backend",
    // description: "Learn how we can help you achieve your goals.",
    icon: IntegrationInstructionsIcon,
    color: "red", // Add a color property for the icon
    Type1: "Java",
    Type2: "PHP",
    Type3: "Python",
    type1link: "java",
    type2link: "php",
    type3link: "python"
  },
  {
    title: "DIGITAL MARKETING",
    title1: "digital_marketing",
    // description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
    color: "purple", // Add a color property for the icon
    Type1: "Seo Services",
    Type2: "PPC Management Services",
    Type3: "SMM & Content Writing",
    type1link: "seo_services",
    type2link: "ppc_management_services",
    type3link: "smm_&_content_writing",
  },
  {
    title: "MICROSOFT TECHNOLOGY",
    title1: "microsoft_tecgnology",
    // description: "Find the perfect solution for your needs.",
    icon: MicrosoftIcon,
    color: "teal", // Add a color property for the icon
    Type1: "Dynamics CRM",
    Type2: "ASP.NET Web Application",
    Type3: "PowerBI",
    type1link: "dynamics_crm",
    type2link: "asp.net_web_application",
    type3link: "powerBI"
  },

  {
    title: "OTHER SERVICES",
    title1: "other_services",
    // description: "Find the perfect solution for your needs.",
    icon: CloudQueueIcon,
    color: "cyan", // Add a color property for the icon
    Type1: "Cloud Technologies",
    Type2: "Software Testing",
    Type3: "Advanced Technologies",
    type1link: "cloud_technologies",
    type2link: "software_testing",
    type3link: "advanced_technologies"
  },
];

function NavListMenu({ isSticky }) {
  const location = useLocation();
  const path = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(true);
  const renderItems = navListMenuItems.map(
    ({ icon: IconComponent, title, Type1, Type2, Type3, color, title1, type1link , type2link, type3link }, key) => (
      <Link to={`/services/${title1}`} key={key}>
        <MenuItem className="flex items-center ">
          <div
            className={`flex items-center justify-center rounded-lg !bg-${color}-500 p-2`}
          >
            {React.createElement(IconComponent, {
              strokeWidth: 3,
              className: `h-8 text-${color}-500 w-8`,
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-start text-xm font-light"
            >
              {title}
            </Typography>
          </div>
        </MenuItem>
        <div className="px-7">
          <Typography
            variant="paragraph"
            className="text-xs !font-normal text-blue-gray-500  leading-10"
          >
            <Link to={`/services/${type1link}`} key={key}>
              <div className="flex justify-start items-center">
                <div>
                  <FaAngleRight
                    className="mr-3 "
                    style={{ color: "#FF5A1F" }}
                  />
                </div>
                <div className="mb-0">{Type1}</div>
              </div>
            </Link>
            <hr />
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-normal text-blue-gray-500 leading-10"
          >
            <Link to={`/services/${type2link}`} key={key}>
              <div className="flex justify-start items-center">
                <div>
                  <FaAngleRight style={{ color: "#FF5A1F" }} className="mr-3" />
                </div>
                <div>{Type2}</div>
              </div>
            </Link>
            <hr />
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-normal text-blue-gray-500 leading-10"
          >
            <Link to={`/services/${type3link}`} key={key}>
              <div className="flex justify-start items-center">
                <div>
                  <FaAngleRight style={{ color: "#FF5A1F" }} className="mr-3" />
                </div>
                <div>{Type3}</div>
              </div>
            </Link>
            <hr />
          </Typography>
        </div>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className={`flex items-center gap-2 py-2 bg-transparent ${
                path.includes("services") ? "bg-blue-400" : ""
              } pr-4 font-medium text-${isSticky ? "black" : "white"} `}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl lg:block">
          <ul className="grid grid-cols-1 gap-y-2 md:grid-cols-2 lg:grid-cols-4 md:overflow-y-hidden overflow-hidden">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 lg:grid-cols-4 overflow-visible bg-white">
            {renderItems}
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

const companyMenu = [
  {
    title: "About Us",
    link: "about_us",
    color: "pink",
    icon: GroupsOutlinedIcon,
  },
  {
    title: "Vision & Mission",
    link: "vision_&_mission",
    color: "green",
    icon: PodcastsOutlinedIcon,
  },
  {
    title: "What makes us different",
    link: "what_makes_us_different",
    color: "cyan",
    icon: DvrOutlinedIcon,
  },
  {
    title: "Our Core Values",
    link: "our_core_values",
    color: "blue",
    icon: ModelTrainingRoundedIcon,
  },
  {
    title: "Staffing-Services",
    link: "staffing_services",
    color: "orange",
    icon: FaPerson,
  },
];

function Company({ isSticky }) {
  const location = useLocation();
  const path = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = companyMenu.map(({ icon, title, color, link }, key) => (
    <Link to={`/company/${link}`} key={key}>
      <MenuItem className="flex items-center gap-3">
        <div
          className={`flex items-center justify-center rounded-lg !bg-${color}-500 p-2`}
        >
          {" "}
          {React.createElement(icon, {
            strokeWidth: 2,
            className: `h-6 text-${color}-500 w-6`,
          })}
        </div>
        <div>
          <Typography
            variant="h6"
            color=""
            className={`flex items-center text-sm font-bold`}
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className={`flex items-center gap-2 ${
                path.includes("company") ? "bg-blue-400" : ""
              } py-2 pr-4 font-medium text-${isSticky ? "black" : "white"}`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Company
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-6 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-2xl lg:block">
          <ul className="grid grid-cols-1 gap-y-2 md:grid-cols-2 lg:grid-cols-5 md:overflow-x-auto overflow-x-auto">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 lg:grid-cols-5 md:overflow-y-auto bg-white">
            {renderItems}
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList({ isSticky }) {
  const location = useLocation();
  const path = location.pathname;
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ">
      <Link to="/">
        <Typography
          as="a"
          href="#"
          variant="small"
          color={isSticky ? "black" : "white"}
          className="font-medium"
        >
          <ListItem
            className={`flex items-center gap-2 py-2 ${
              path === "/" ? "bg-blue-400" : ""
            } pr-4 text-${isSticky ? "black" : "white"}`}
          >
            Home
          </ListItem>
        </Typography>
      </Link>
      <Company isSticky={isSticky} />
      <NavListMenu isSticky={isSticky} />
      <Link to="/portfolio">
        <Typography
          as="a"
          href="#"
          variant="small"
          color={isSticky ? "black" : "white"}
          className="font-medium"
        >
          <ListItem
            className={`flex items-center gap-2 py-2 ${
              path === "/portfolio" ? "bg-blue-400" : ""
            } pr-4 text-${isSticky ? "black" : "white"}`}
          >
            portfolio
          </ListItem>
        </Typography>
      </Link>
      <Link to="/careers">
        <Typography
          as="a"
          href="#"
          variant="small"
          color={isSticky ? "black" : "white"}
          className="font-medium"
        >
          <ListItem
            className={`flex items-center gap-2 py-2 ${
              path === "/careers" ? "bg-blue-400" : ""
            } pr-4 text-${isSticky ? "black" : "white"}`}
          >
            Careers
          </ListItem>
        </Typography>
      </Link>

      <Link to="/contact">
        <Typography
          as="a"
          href="#"
          variant="small"
          color={isSticky ? "black" : "white"}
          className="font-medium"
        >
          <ListItem
            className={`flex items-center gap-2 py-2 ${
              path === "/contact" ? "bg-blue-400" : ""
            } pr-4 text-${isSticky ? "black" : "white"}`}
          >
            Contact Us
          </ListItem>
        </Typography>
      </Link>
    </List>
  );
}

const Navbarupp = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const location = useLocation();
  const path = location.pathname;
  return (
    <Navbar
      className="fixed top-0 w-full z-10 rounded-none py-0 max-w-screen-4xl shadow-none"
      // style={{padding: "0px"}}
      color={path === "/contact" ? "gray" : isSticky ? "white" : "transparent"}
    >
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          {isSticky ? (
            <img src={LogoFull} alt="sorry" />
          ) : (
            <img src={logo22} alt="sorry" />
          )}
        </Typography>
        <div className="hidden lg:block">
          <NavList isSticky={isSticky} />
        </div>
        <div className="hidden gap-2 lg:flex text-white">
          <Link to="/try_a_demo">
            <Button variant="gradient" size="sm">
              Try a Demo
            </Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          color={isSticky ? "black" : "blue-gray"}
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 " strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <div className="max-h-[80vh] overflow-y-scroll lg:overflow-hidden">
        <Collapse open={openNav} className={isSticky ? "" : "bg-gray-400"}>
          <NavList isSticky={isSticky} />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden text-white pb-6 pl-2">
            <Link to="/TryADemo">
              <Button variant="gradient" size="sm">
                Try a Demo
              </Button>
            </Link>
          </div>
        </Collapse>
      </div>
    </Navbar>
  );
};
export default Navbarupp;
