"use client";

import { useEffect } from "react";

const getUrls = () =>{
  const url = window.location.href;
  const hostname = new URL(url).hostname;
  const domain = hostname.replace("www.", "").split(".")[0];

  console.log(domain)

  return domain;
}

const Home = () => {

  useEffect(() => {}, []);

  return <div className="bg-white"></div>;
};

export {
  Home,
  getUrls
}