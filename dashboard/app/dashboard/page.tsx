"use client"

import React from "react";
import {AiOutlineEuro, AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";
import LayoutCustom from "@/layouts/layoutCustom";

const icons = {
  shoppingCart: <AiOutlineShoppingCart  className="AiOutlineShoppingCart"/>,
  euro: <AiOutlineEuro className="AiOutlineDesktop"/>,
  user: <AiOutlineUser className="AiOutlineUser" />
};


const Page = () => {
  return (
    <LayoutCustom>
      <div className="c-categories">
        <h2>{"Bilan d'affaires"}</h2>
        <div className="c-users__users">
          <div className="container-card">
            <h1>ZOLA</h1>
          </div>
        </div>
      </div>
    </LayoutCustom>
  )
}

export default Page
