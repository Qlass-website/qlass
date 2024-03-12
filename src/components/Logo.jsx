import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img src="/logo-transparent.png" width={120} height={100} className="object-contain" style={{ background: "transparent" }} alt="qlass" />
    </Link>
  );
}
