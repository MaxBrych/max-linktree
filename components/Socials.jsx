import React from "react";
import { FaTiktok } from "react-icons/fa";
import { RxInstagramLogo, RxTwitterLogo } from "react-icons/rx";

export const Socials = () => {
  const links = [
    {
      icon: <RxTwitterLogo />,
      href: "/",
      id: 1,
    },
    {
      icon: <RxInstagramLogo />,
      href: "/",
      id: 2,
    },
    {
      icon: <FaTiktok />,
      href: "/",
      id: 3,
    },
  ];
  return (
    <div className="flex items-stretch justify-between py-8">
      {links.map((obj) => (
        <a
          className="w-10 h-10 p-3 text-black bg-gray-100 rounded-full"
          key={obj.id}
          href={obj.href}
        >
          {obj.icon}
        </a>
      ))}
    </div>
  );
};
