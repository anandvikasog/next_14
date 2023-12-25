"use client";

import { useState } from "react";

export default function Layout({
  privateRoute,
  publicRoute,
}: {
  privateRoute: React.ReactNode;
  publicRoute: React.ReactNode;
}) {
  const [logedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <div>
        {logedIn ? (
          <button onClick={() => setLoggedIn(false)}>logout</button>
        ) : (
          <button onClick={() => setLoggedIn(true)}>login</button>
        )}
      </div>
      <div>{logedIn ? privateRoute : publicRoute}</div>
    </div>
  );
}
