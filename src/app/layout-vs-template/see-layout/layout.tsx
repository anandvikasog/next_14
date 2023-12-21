"use client";

import Link from "next/link";
import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>
        {counter}{" "}
        <button onClick={() => setCounter((page) => page + 1)}>+</button>
      </div>
      <>
        <h1>Select page</h1>
        <div>
          <Link href="/layout-vs-template/see-layout/page-1">Page 1</Link>
        </div>
        <div>
          <Link href="/layout-vs-template/see-layout/page-2">Page 2</Link>
        </div>
      </>
      {children}
    </>
  );
}
