'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import { RiMenu3Fill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import Image from 'next/image';
import { logo } from '@/assets';
import { navLinksData } from '@/constant';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar  z-50 bg-primary-dark y  left-0 py-5 right-0 hidden px-4">
      <div className="flex justify-between">
        <Image src={logo} alt="logo" />

        <button onClick={() => openNavbar()}>
          <RiMenu3Fill className={`text-white`} size={25} />
        </button>
      </div>
      <div
        className={` fixed  bg-primary-dark   mobile_navbar 2xl:px-0 px-4 pt-6 w-full h-full   ${
          isOpen ? 'right-0' : 'right-full'
        }  z-50 top-0 `}
      >
        <div className=" flex  items-center justify-between">
          <Image src={logo} alt="logo" />
          <RxCross2
            onClick={() => openNavbar()}
            className="text-white "
            size={36}
          />
        </div>
        <ul className="flex flex-col  pt-7 md:flex-row gap-6">
          {navLinksData.map(link => (
            <li key={link.href} onClick={openNavbar}>
              <Link
                href={link.href}
                className="block py-2 pl-3 pr-4 text-white text-base leading-[19px] font-bold font-segoe"
                aria-current="page"
              >
                {link.lebel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
