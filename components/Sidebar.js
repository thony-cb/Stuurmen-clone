import React from "react";
import { links } from "@/data/navigation";
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className=" max-w-[14.5rem] hidden md:flex relative  justify-between flex-col w-full ">
      <div className="w-full flex flex-col justify-between pl-10 pr-4 py-10 h-screen sticky top-0 ">
        <ul className="flex flex-col">
          {links.map((link) => {
            return (
              <li
                className="first:opacity-100 hover:opacity-100 opacity-50 last:pt-10 last:opacity-100"
                key={link.href}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col gap-6  ">
          <p className="text-sm opacity-50">Stuurmen Branding Agency</p>
          <div className="h-8 w-8 border border-black  rounded-full animate-spin"></div>
        </div>
      </div>
    </nav>
  );
}
