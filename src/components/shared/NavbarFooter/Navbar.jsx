import React from "react";
import { links } from "./data";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex w-full flex-col items-center border-b border-gray-300">
      <div className="mt-10 flex w-full justify-between pb-2 lg:w-10/12">
        {" "}
        <Image src={logo} width={63} height={37} alt="logo" />
        <div className="flex items-center gap-5">
          {links.map((item) => (
            <Link
              key={item.id}
              className="text-[#3F3B3B] transition-all hover:text-blue-600"
              href={item.route}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
