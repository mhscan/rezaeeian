import React from "react";

import { links } from "./data";
import { RiInstagramLine } from "react-icons/ri";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Footer() {
  return (
    <div className="flex w-full flex-col items-center border-t border-gray-300">
      <div className="mt-10 flex w-full justify-between pt-2 lg:w-10/12">
        <div className=" flex flex-col gap-4">
          <Image src={logo} width={63} height={37} alt="logo" />
<div>
      <p>have a project in mind?</p>
          <p>Hit us up!</p>

</div>
        
          <Button>Start a new project</Button>
        </div>

        <div className="flex items-center flex-col gap-1">
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

      <div className=" flex items-center justify-between w-10/12 my-3" >
        <RiInstagramLine size={20} />
        <p className=" text-sm  text-gray-500">© 2019 Fabrx</p>
      </div>
    </div>
  );
}
