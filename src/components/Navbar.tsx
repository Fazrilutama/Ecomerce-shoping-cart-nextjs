"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { Input } from "./ui/input";
import { GiSelfLove } from "react-icons/gi";
import { BsCart3 } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav>
      <div className="relative">
        <div className="flex justify-between items-center px-3 sm:px-5 py-2 border-b-2 md:hidden">
          {isOpen ? (
            <MdOutlineClose
              color="white"
              size={40}
              onClick={() => setIsOpen(!isOpen)}
              className="z-10"
            />
          ) : (
            <RiMenuUnfold2Fill
              size={40}
              onClick={() => setIsOpen(!isOpen)}
              className="z-10"
            />
          )}
          <div className="flex items-center">
            <Image
              src="/img/fu.png"
              alt=""
              width={500}
              height={500}
              className="w-16"
            />
            <div className="font-semibold text-base leading-tight">
              <p>Fazril</p>
              <p>Store</p>
            </div>
          </div>
          <Button variant="default">Login</Button>
        </div>
        {isOpen ? (
          <aside className="absolute top-0 pt-20 bg-black  bg-opacity-60 min-h-screen w-full px-5">
            <div className="">
              <h2 className="text-lg font-semibold text-secondary py-5 hover:text-purple-400 ">
                Show All
              </h2>
              <div
                className="flex items-center gap-x-2"
                onClick={() => setDropdown(!dropdown)}
              >
                <h2 className="text-lg font-semibold text-secondary hover:text-purple-400">
                  Category
                </h2>
                {dropdown ? (
                  <AiFillCaretDown size={30} color="white" />
                ) : (
                  <AiFillCaretUp size={30} color="white" />
                )}
              </div>
              {dropdown ? (
                <ul className="flex flex-col pl-5 sm:pl-16 gap-y-5 pt-5 text-base ">
                  <li className="text-white hover:text-purple-400">
                    Category 1
                  </li>
                  <li className="text-white hover:text-purple-400">
                    Category 2
                  </li>
                  <li className="text-white hover:text-purple-400">
                    Category 3
                  </li>
                  <li className="text-white hover:text-purple-400">
                    Category 4
                  </li>
                  <li className="text-white hover:text-purple-400">
                    Category 5
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>
            <div className="px-5 py-10">
              <Input placeholder="Search Product..." type="search" />
            </div>
            <hr />
            <div className="flex justify-center items-center gap-5 pt-5">
              <div className="flex gap-2 py-3 px-5 bg-purple-200 text-purple-700 rounded-xl border-2 border-purple-700 hover:bg-purple-600 hover:text-purple-200 ">
                <p className="text-sm">Your Cart</p>
                <BsCart3 color="purple-300" />
              </div>
              <div className="flex gap-2 px-5 py-3 bg-purple-200 text-purple-700 rounded-xl border-2 border-purple-700 hover:bg-purple-600 hover:text-purple-200">
                <p className="text-sm">Your Cart</p>
                <GiSelfLove color="purple-300" />
              </div>
            </div>
          </aside>
        ) : (
          ""
        )}
        <div className="flex xl:container xl:mx-auto ">
          <div className="hidden md:block px-3 sm:px-5 md:px-8 w-3/12 xl:w-2/12 min-h-screen border-r-2">
            <div className="flex items-center py-3">
              <Image
                src="/img/fu.png"
                alt=""
                width={500}
                height={500}
                className="w-16"
              />
              <div className="font-semibold text-base leading-tight">
                <p>Fazril</p>
                <p>Store</p>
              </div>
            </div>
            <div>
              <div className="">
                <h2 className="text-lg font-semibold text-black py-5 hover:text-purple-700 ">
                  Show All
                </h2>
                <div
                  className="flex items-center gap-x-2"
                  onClick={() => setDropdown(!dropdown)}
                >
                  <h2 className="text-lg font-semibold text-black hover:text-purple-700">
                    Category
                  </h2>
                </div>
                <ul className="flex flex-col pl-5 sm:pl-8 gap-y-5 pt-5 text-base ">
                  <li className="text-gray-500 hover:text-purple-700">
                    Category 1
                  </li>
                  <li className="text-gray-500 hover:text-purple-700">
                    Category 2
                  </li>
                  <li className="text-gray-500 hover:text-purple-700">
                    Category 3
                  </li>
                  <li className="text-gray-400 hover:text-purple-700">
                    Category 4
                  </li>
                  <li className="text-gray-400 hover:text-purple-700">
                    Category 5
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-9/12 xl:w-10/12 hidden md:block ">
            <div className="flex justify-between items-center py-4 px-8 border-b-2">
              <div className="w-[40%] ">
                <Input placeholder="Search Product..." type="search" />
              </div>
              <div className="flex  gap-x-2">
                <div className="flex items-center gap-2 py-2 px-4 bg-purple-200 text-purple-700 rounded-xl border-2 border-purple-700 hover:bg-purple-600 hover:text-purple-200 ">
                  <p className="text-sm">Your Cart</p>
                  <BsCart3 color="purple-300" />
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-200 text-purple-700 rounded-xl border-2 border-purple-700 hover:bg-purple-600 hover:text-purple-200">
                  <p className="text-sm">Your Cart</p>
                  <GiSelfLove color="purple-300" />
                </div>
                <Button variant="default" size="lg">
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
