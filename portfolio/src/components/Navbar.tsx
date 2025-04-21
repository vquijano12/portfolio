import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home Page</Link>
        </li>
        <li>
          <Link href="/htmlPractice1">HTML Practice 1</Link>
        </li>
      </ul>
    </nav>
  );
}
