"use client";
import Link from "next/link";
import React from "react";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";
function NavLink({ href, children, ...rest }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
      {...rest}
    >
      {children}
    </Link>
  );
}

export default NavLink;
