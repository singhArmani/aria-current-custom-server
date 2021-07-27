import React from "react";
import { useRouter } from "next/router";

import Link from "next/link";

export default function Layout({ children }) {
  const { asPath, pathname } = useRouter();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/posts/123">Dynamic post</NavLink>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}

const NavLink = ({ href, children }) => {
  const { asPath, pathname } = useRouter();
  console.log({ asPath, pathname, href });

  const ariaCurrent = href === asPath ? "page" : undefined;

  return (
    <Link href={href}>
      <a aria-current={ariaCurrent}>{children}</a>
    </Link>
  );
};
