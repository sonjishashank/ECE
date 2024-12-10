import React from "react";
import { Link } from "react-router-dom";
import { navigationLinks } from "../../utils/constants";

export function NavLinks({ isMobile = false }) {
  return (
    <div
      className={`${
        isMobile
          ? "flex flex-col space-y-2 px-4 py-2"
          : "ml-10 flex items-baseline space-x-4"
      }`}
    >
      {navigationLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="hover:bg-blue-700 px-3 py-2 rounded-md"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
