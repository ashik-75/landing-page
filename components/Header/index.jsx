"use client";
import useScroll from "@/hooks/useScroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { menuData } from "./MenuData";
import ThemeToggler from "./ThemeToggler";

function Header() {
  // sticky navbar useScroll(height)
  const sticky = useScroll(80);

  // toggle navbar
  const [navBarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  // handle navigation
  const router = useRouter();
  const handleNavigation = (url) => {
    router.push(url);
    setNavbarOpen(false);
  };
  return (
    <div
      className={`top-0 left-0 z-40 flex h-20 w-full items-center justify-center border-b  bg-transparent px-5 dark:border-b-gray-600 md:px-0  ${
        sticky
          ? "fixed bg-white/10 backdrop-blur-lg dark:bg-max/10 "
          : "absolute"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo  */}
        <div className="flex w-10 items-center">
          <Link href={"/"}>
            <Image
              src="/leaf.png"
              width={50}
              height={50}
              alt="logo"
              className=""
            />
          </Link>
        </div>

        {/* show all the menus */}
        <div>
          <ul className="hidden items-center gap-10 md:flex">
            {menuData.map((menu) => (
              <li
                key={menu.id}
                className="text-lg font-medium text-gray-700 dark:text-white"
              >
                <Link href={menu.path}>{menu.title}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu */}

          <button
            className="absolute right-2 top-1/2 -translate-y-1/2  rounded bg-white/5 p-2 lg:hidden"
            onClick={toggleNavbar}
          >
            {navBarOpen ? (
              <XMarkIcon className="h-7 text-zinc-700 dark:text-white" />
            ) : (
              <Bars3Icon className="h-7 text-zinc-700 dark:text-white" />
            )}
          </button>

          <AnimatePresence>
            {navBarOpen && (
              <motion.nav
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-full right-0 w-[250px]  bg-gray-100 dark:bg-sky-900 md:hidden"
              >
                <ul className="space-y-4 p-5">
                  {menuData.map((menu) => (
                    <motion.li
                      initial={{ y: -20 }}
                      animate={{ y: 0 }}
                      key={menu.id}
                      onClick={() => handleNavigation(menu.path)}
                    >
                      {menu.title}
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>

        {/* Button and mode icon */}
        <div className="flex items-center space-x-4 pr-16 text-white lg:pr-0">
          <Link
            href={"/signin"}
            className="hidden font-medium text-gray-700 dark:text-white md:block"
          >
            Sign In
          </Link>
          <Link
            href={"/signup"}
            className="hidden rounded bg-blue-500 px-3 py-1.5 font-medium md:block"
          >
            Sign Up
          </Link>
          <div className="flex items-center">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
