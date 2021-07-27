import React, { useState, useEffect } from "react";
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
  // We only need a setter to cause a re-render
  const [ariaCurrent, setAriaCurrent] = useState();

  const { asPath } = useRouter();

  useEffect(() => {
    const ariaCurrent = href === asPath ? "page" : undefined;

    /* You could even create your own custom hook,
     * for e.g. `useForceUpdate()` if you like
     *
     * Calling the setter, would cause a re-render
     */
    setAriaCurrent(ariaCurrent);
  }, [asPath, href]);

  return (
    <Link href={href}>
      <a aria-current={ariaCurrent}>{children}</a>
    </Link>
  );
};
