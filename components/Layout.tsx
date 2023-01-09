import React from "react";
import { Hero } from "./Hero";
import Linklist from "./Linklist";
import { Socials } from "./Socials";

export const Layout = () => {
  return (
    <div className="flex flex-col justify-start min-h-screen ">
      <Hero />
      <Linklist />
      <Socials />
    </div>
  );
};
