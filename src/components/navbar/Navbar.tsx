import Link from "next/link";
import React from "react";
import { MenuObject } from "./shared";

const menuItems: MenuObject[] = [
  { items: "Books", link: "/books" },
  { items: "Projects", link: "/projects" },
  { items: "Lessons", link: "/lessons" },
  { items: "Dev Tools", link: "/devtools" },
  { items: "DSA Example", link: "/dsas" },
];

const Navbar: React.FC = () => {
  return (
    <ul className="flex space-x-4 small-medium:space-x-2 capitalize">
      <li className="space-x-4">
        {menuItems.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="cursor-pointer transition ease-in-out"
          >
            <span className="hover:text-orange-500">{item.items}</span>
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default Navbar;
