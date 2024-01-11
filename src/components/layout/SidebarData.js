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
import "./SidebarMenu.css";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <BsHouse />
  },
  {
    title: "Inventário",
    path: "/inventario",
    icon: <MdOutlineInventory />
  },
  {
    title: "Relatórios",
    path: "/relatorios",
    icon: <BsFileEarmarkText />
  },
  {
    title: "Cadastro",
    icon: <BsPencilSquare />,
    iconClose: <IoMdArrowDropdown className="openClose-icon" />,
    iconOpen: <IoMdArrowDropup className="openClose-icon"/>,
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
    title: "Gerar Qr Code",
    path: "/etiquetas",
    icon: <BsQrCodeScan />
  },
  {
    title: "Sair",
    path: "/login",
    icon: <BsBoxArrowLeft />
  },
];
