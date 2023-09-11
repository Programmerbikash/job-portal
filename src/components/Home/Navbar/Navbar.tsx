import React from "react";
import { links, subLink } from "./MyLinks";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {

  return (
    <div>
      <div className="md:flex md:justify-between items-center">
        <div className="md:flex md:justify-between items-center">
          <h1 className="text-3xl font-extrabold">Reed.co.uk</h1>
          <ul className="md:flex items-center hidden uppercase text-black md:justify-between px-2">
            {links?.map((link) => {
              return (
                <div key={link.id} className="grid grid-cols-1">
                  <Link
                    href={link.link}
                    className="text-sm lg:text-md font-semibold hover:bg-[#E5F1FF] hover:text-[#3B7DED] px-8 py-3 w-full block mb-0"
                  >
                    {link.name}
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
        <ul className="md:flex items-center hidden uppercase text-black md:justify-between px-2">
          {subLink?.map((linksub) => {
            return (
              <div key={linksub.id} className="grid grid-cols-1">
                <Link
                  href={linksub.link}
                  className="text-sm lg:text-md font-semibold hover:bg-[#E5F1FF] hover:text-[#3B7DED] px-8 py-3 w-full block mb-0"
                >
                  {linksub.name}
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
