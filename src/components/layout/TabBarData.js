import {
    BsFileEarmarkText,
    BsPencilSquare,
    BsHouse,
    BsBoxArrowLeft,
    BsQrCodeScan,
    BsDisplay,
    BsLaptop,
    BsPrinter,
  } from "react-icons/bs";
  import { PiOfficeChair } from "react-icons/pi";
  import { MdOutlineInventory } from "react-icons/md";
  import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
  
  export const TabBarData = [
    {
      path: "/",
      icon: <BsHouse />
    },
    {
      path: "/inventario",
      icon: <MdOutlineInventory />
    },
    {
      path: "/relatorios",
      icon: <BsFileEarmarkText />
    },
    {
      icon: <BsPencilSquare />,
      iconClose: <IoMdArrowDropdown />,
      iconOpen: <IoMdArrowDropup />,
      subNav: [
        {
          title: "Computadores",
          path: "/computadores",
          icon: <BsLaptop />
        },
        {
          title: "Impressoras",
          path: "/impressoras",
          icon: <BsPrinter />
        },
        {
          title: "Monitores",
          path: "/monitores",
          icon: <BsDisplay />
        },
        {
          title: "Escritório",
          path: "/escritorio",
          icon: <PiOfficeChair />
        },
      ],
    },
    {
      path: "/etiquetas",
      icon: <BsQrCodeScan />
    },
    {
      path: "/login",
      icon: <BsBoxArrowLeft />
    },
  ];
  