"use client";

import { MegaMenu, Navbar } from "flowbite-react";
import { HiChevronDown, HiArrowRight } from "react-icons/hi";

export default function Nav() {
  return (
    <div className="fixed z-[1] w-full">
      <div className="container mx-auto">
        <MegaMenu className="bg-transparent">
          <Navbar.Brand className="logo" href="/">
            <img alt="" src="./images/logo.png" className="mr-3 h-6 sm:h-9" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              <h1 className="title-2 text-4xl">Numitron</h1>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="/">Home</Navbar.Link>
            <MegaMenu.Dropdown className="w-[50%]" toggle={<>Company</>}>
              <div className="mt-6 border-y border-gray-200 shadow-sm dark:border-gray-600 dark:bg-gray-800">
                <div className="mx-auto grid max-w-screen-xl px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
                  <ul
                    className="mb-4 hidden space-y-4 md:mb-0 md:block"
                    aria-labelledby="mega-menu-full-image-button"
                  >
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Online Stores
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Segmentation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Marketing CRM
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Online Stores
                      </a>
                    </li>
                  </ul>
                  <ul className="mb-4 space-y-4 md:mb-0">
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Our Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        License
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Resources
                      </a>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
                    style={{
                      backgroundImage: "url(./images/top.jpg)",
                    }}
                  >
                    <p className="mb-5 max-w-xl font-extrabold leading-tight tracking-tight text-white">
                      Preview the new Flowbite dashboard navigation.
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-lg border border-white px-2.5 py-1.5 text-center text-xs font-medium text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-700"
                    >
                      Get started
                      <HiArrowRight className="ml-2" />
                    </button>
                  </a>
                </div>
              </div>
            </MegaMenu.Dropdown>
            <Navbar.Link href="/">Marketplace</Navbar.Link>
            <Navbar.Link href="/">Resources</Navbar.Link>
            <Navbar.Link href="/">Contact</Navbar.Link>
          </Navbar.Collapse>
        </MegaMenu>
      </div>
    </div>
  );
}
