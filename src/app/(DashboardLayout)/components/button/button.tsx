import React from "react";
import "./button.css";
import Link from "next/link";
const Botton = () => {
  return (
    <>
      <Link className="button" href="/">
        <button type="button"> Click Now</button>
      </Link>
    </>
  );
};

export default Botton;
