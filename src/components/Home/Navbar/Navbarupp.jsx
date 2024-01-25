import React, { useState, useEffect } from 'react';
// import { useWindowScroll } from 'react-use';
import { useLocation } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
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
import logo22 from './spylogo1.png';
import LogoFull from './logo2.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Link } from "react-router-dom";
const navListMenuItems = [
  {
    title: "Ecommerce",
    // description: "Find the perfect solution for your needs.",
    icon: ShoppingCartIcon,
    Type1: "Magento eCommerce Development",
    Type2: "Magento eCommerce Development",
    Type3: "Magento eCommerce Development"
  },
  {
    title: "Frontend",
    // description: "Meet and learn about our dedication",
    icon: PhoneIphoneIcon,
    Type1: "Magento eCommerce Development",
    Type2: "Magento eCommerce Development",
    Type3: "Magento eCommerce Development"
  },
  {
    title: "Mobile",
    // description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    Type1: "Magento eCommerce Development",
    Type2: "Magento eCommerce Development",
    Type3: "Magento eCommerce Development"
  },
  {
    title: "Services",
    // description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
    Type1: "Magento eCommerce Development",
    Type2: "Magento eCommerce Development",
    Type3: "Magento eCommerce Development"
  },
  {
    title: "Support",
    // description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
    Type1: "Magento eCommerce Development",
    Type2: "Magento eCommerce Development",
    Type3: "Magento eCommerce Development"
  },
  {
    title: "Contact",
    // description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
    Type1: "Magento eCommerce Development",
    Type2: "Magento eCommerce Development",
    Type3: "Magento eCommerce Development"
  },
  {
    title: "News",
    // description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
    Type1: "Magento eCommerce Development",
    Type2: "Magento eCommerce Development",
    Type3: "Magento eCommerce Development"
  },
  {
    title: "Products",
    // description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
    Type1: "Magento eCommerce Development",
    Type2: "Magento eCommerce Development",
    Type3: "Magento eCommerce Development"
  },

];

function NavListMenu({ isSticky }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, Type1, Type2, Type3 }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-blue-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}

            </Typography>


          </div>

        </MenuItem>
        <div className='px-6  '>
          <Typography
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500 leading-10"
          >
            <div className='flex justify-center items-center'>
              <div>
                <FaAngleRight className='mr-3' />
              </div>
              <div>
                {Type1}
              </div>
            </div>
            <hr />
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500 leading-10"
          >
            <div className='flex justify-center items-center'>
              <div>
                <FaAngleRight className='mr-3' />
              </div>
              <div>
                {Type2}
              </div>
            </div>
            <hr />
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500 leading-10"
          >


            <div className='flex justify-center items-center'>
              <div>
                <FaAngleRight className='mr-3' />
              </div>
              <div>
                {Type3}
              </div>
            </div>

            <hr />
          </Typography>
        </div>
      </a>
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
              className={`flex items-center gap-2 py-2 pr-4 font-medium text-${isSticky ? 'black' : 'white'}`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl lg:block">
          <ul className="grid grid-cols-1 gap-y-2 md:grid-cols-2 lg:grid-cols-4 md:overflow-y-hidden sm:overflow-hidden">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 lg:grid-cols-4 md:overflow-x-auto md:overflow-y-hidden sm:overflow-x-auto sm:overflow-y-hidden">
            {renderItems}
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

const companyMenu = [
  {
    title: "Ecommerce",
    icon: ShoppingCartIcon,
  },
  {
    title: "Frontend",
    icon: PhoneIphoneIcon,

  },
  {
    title: "Mobile",
    icon: Bars4Icon,

  },
  {
    title: "Services",
    icon: SunIcon,

  },
]
function Company({ isSticky }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = companyMenu.map(
    ({ icon, title }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-blue-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}

            </Typography>


          </div>

        </MenuItem>

      </a>
    ))
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
              className={`flex items-center gap-2 py-2 pr-4 font-medium text-${isSticky ? 'black' : 'white'}`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Company
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl lg:block">
          <ul className="grid grid-cols-1 gap-y-2 md:grid-cols-2 lg:grid-cols-4 md:overflow-x-auto sm:overflow-x-auto">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 lg:grid-cols-4 md:overflow-x-auto sm:overflow-x-auto">
            {renderItems}
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  )

}

function NavList({ isSticky }) {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link to='/'>
        <Typography
          as="a"
          href="#"
          variant="small"
          color={isSticky ? "black" : "white"}
          className="font-medium"
        >
          <ListItem className={`flex items-center gap-2 py-2 pr-4 text-${isSticky ? 'black' : 'white'}`}>Home</ListItem>
        </Typography>
      </Link>
      <Company isSticky={isSticky} />
      <NavListMenu isSticky={isSticky} />
      <Link to='/portfolio'>
        <Typography
          as="a"
          href="#"
          variant="small"
          color={isSticky ? "black" : "white"}
          className="font-medium"
        >
          <ListItem className={`flex items-center gap-2 py-2 pr-4 text-${isSticky ? 'black' : 'white'}`}>portfolio
          </ListItem>

        </Typography>
      </Link>
      <Typography
        as="a"
        href="#"
        variant="small"
        color={isSticky ? "black" : "white"}
        className="font-medium"
      >
        <ListItem className={`flex items-center gap-2 py-2 pr-4 text-${isSticky ? 'black' : 'white'}`}>Careers
        </ListItem>
      </Typography>


      <Link to='/contact'>
      <Typography
        as="a"
        href="#"
        variant="small"
        color={isSticky ? "black" : "white"}
        className="font-medium"
      >
        <ListItem className={`flex items-center gap-2 py-2 pr-4 text-${isSticky ? 'black' : 'white'}`}>
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

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const location = useLocation();
  const path = location.pathname;
  return (
    <Navbar
      className='px-8 fixed top-0 w-full z-10 rounded-none py-0 max-w-screen-4xl'
      color={path === "/contact" ? "gray" : (isSticky ? "white" : "transparent")}
    >
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          {isSticky ? <img src={LogoFull} alt="sorry" /> : <img src={logo22} alt="sorry" />}
        </Typography>
        <div className="hidden lg:block">
          <NavList isSticky={isSticky} />
        </div>
        <div className="hidden gap-2 lg:flex text-white">
          <Button variant="gradient" size="sm">
            Try a Demo
          </Button>
        </div>
        <IconButton
          variant="text"
          color={isSticky ? "black" : "blue-gray"}
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList isSticky={isSticky} />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden text-white">

          <Button variant="gradient" size="sm">
            Try a Demo
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};
export default Navbarupp