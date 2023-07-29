import React from "react";
import { links } from "@/data/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Sidebar({ scrollYProgress }) {
  return (
    <nav className=" max-w-[14.5rem] hidden md:flex relative  justify-between flex-col w-full ">
      <div className="sticky top-0 flex flex-col justify-between w-full h-screen py-10 pl-10 pr-4 ">
        <ul className="flex flex-col">
          {links.map((link) => {
            return (
              <li
                className="opacity-50 first:opacity-100 hover:opacity-100 last:pt-10 last:opacity-100"
                key={link.href}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col gap-6 ">
          <p className="text-sm opacity-50">Stuurmen Branding Agency</p>
          <div className="relative">
            <svg
              className="absolute top-0 z-1"
              id="progress"
              width="50"
              height="50"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="30" pathLength="1" className="bg-" />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
            <svg className="z-0 " width="50" height="50" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" pathLength="1" className="bg-" />
              <circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="stroke-gray-400"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
