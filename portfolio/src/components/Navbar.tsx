import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-2">
      <ul className="flex space-x-2 mb-2">
        <li>
          <Link href="/">Home Page</Link>
        </li>
        <li>|</li>
        <li>
          <Link href="/html-practice">HTML Practice 1</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
}
