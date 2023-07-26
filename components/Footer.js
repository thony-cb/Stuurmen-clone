import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div class="flex col-span-2 justify-between flex-col min-h-[30rem] p-8  ">
      <div className="flex flex-col justify-end h-full pb-10 gap-4">
        <h5 className="text-4xl max-w-md">
          Ready to surpass your wildest dreams?
          <br /> Call Stijn.
        </h5>
        <div className="flex items-center gap-4">
          <Image
            src={"/images/pfp.avif"}
            alt={"Founder"}
            height={20}
            width={20}
            className="h-10 rounded-full w-10"
          />
          <p className="text-md ">Stijn de Jong</p>
          <p className="rounded-xl text-xs border border-black/10 px-2 py-[0.2rem]">
            Founder & New Business
          </p>
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <button className="rounded-3xl text-xs bg-[#f0f0f0] hover:bg-[#ddded] px-4 py-[.7rem]">
          Schedule a call
        </button>
        <div className="flex gap-10">
          <ul className="flex gap-4 items-center italic">
            <li className="rounded-xl border border-black/10 px-2 py-[0.2rem]">
              Facebook
            </li>
            <li className="rounded-xl border border-black/10 px-2 py-[0.2rem]">
              Twitter
            </li>
            <li className="rounded-xl border border-black/10 px-2 py-[0.2rem]">
              Instagram
            </li>
          </ul>
          <ul className="flex items-center gap-4">
            <li>Cookie policy</li>
            <li>Private policy</li>
            <li>© 2023 Stuurmen</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
