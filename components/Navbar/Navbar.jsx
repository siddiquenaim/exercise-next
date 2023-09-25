"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const links = [
    {
      id: 1,
      url: "/",
      title: "Home",
    },
    {
      id: 2,
      url: "/portfolio",
      title: "Portfolio",
    },
    {
      id: 3,
      url: "/blog",
      title: "Blog",
    },
    {
      id: 4,
      url: "/about",
      title: "About",
    },
    {
      id: 5,
      url: "/contact",
      title: "Contact",
    },
    {
      id: 6,
      url: "/dashboard",
      title: "Dashboard",
    },
  ];
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        naimZone
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link?.id} href={link?.url} className={styles.link}>
            {link?.title}
          </Link>
        ))}
        <button
          className={styles.logout}
          onClick={() => {
            console.log("logged out");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
