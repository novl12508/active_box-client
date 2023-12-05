import BasketPage from "@/app/basket/page";
import { IoHomeOutline } from "react-icons/io5";
import { MdPostAdd } from "react-icons/md";
import { PiWarningCircleLight } from "react-icons/pi";
import { TbBrandProducthunt, TbBasket } from "react-icons/tb";

export const routes = [
  {
    link: "Главная",
    img: <IoHomeOutline />,
    href: "/",
  },
  {
    link: "Наши продукты",
    img: <TbBrandProducthunt />,
    href: "/products",
  },
  {
    link: "Обсуждение",
    img: <MdPostAdd />,
    href: "/posts",
  },

  {
    link: "Приоритеты нашего масла",
    img: <PiWarningCircleLight />,
    href: "/priority",
  },
  {
    link: "О нас",
    img: <PiWarningCircleLight />,
    href: "/about_us",
  },
  {
    link: "Корзина",
    img: <TbBasket />,
    href: "/basket",
  },
];
