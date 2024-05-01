'use client'
import React from 'react';
import { Home, User, Search, Layout, Info, LogOut, Figma } from 'react-feather';
import { motion } from 'framer-motion';
import Link from 'next/link';

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const iconStyle = {
  width: '30px',
  height: '30px'
};

const iframeStyle = {
  display: 'grid',
  placeContent: 'center',
  width: '100%',
  height: '60px'
};

const iconVariants = {
  hover: {
    backgroundColor: "#27272a",
    transition: {
      duration: 0.2,
    }
  }
};

export default function Aside() {
  const menuItems = [
    { href: "/", icon: <Home style={iconStyle} />, key: "home" },
    { href: "/profile", icon: <User style={iconStyle} />, key: "profile" },
    { href: "/search", icon: <Search style={iconStyle} />, key: "search" },
    { href: "/dashboard", icon: <Layout style={iconStyle} />, key: "dashboard" },
    { href: "/support", icon: <Info style={iconStyle} />, key: "support" },
  ];

  return (
    <>
      <Link href="/" className='flex items-center justify-center border-b'>
        <Figma style={iconStyle} />
      </Link>

      <nav className='flex flex-col justify-between pb-5 gap-12'>
        <ul className='grid gap-12'>
          {menuItems.map((item) => (
            <Link style={linkStyle} href={item.href} key={item.key}>
              <motion.i
                style={iframeStyle}
                variants={iconVariants}
                whileHover="hover"
              >
                {item.icon}
              </motion.i>
            </Link>
          ))}
        </ul>

        <Link style={linkStyle} href="#" key="logout">
          <motion.i
            style={iframeStyle}
            variants={iconVariants}
            whileHover="hover"
          >
            <LogOut style={iconStyle} />
          </motion.i>
        </Link>
      </nav>
    </>
  );
}
