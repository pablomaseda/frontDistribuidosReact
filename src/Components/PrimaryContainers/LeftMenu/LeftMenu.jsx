import React from "react";
import TopElement from "./TopElement";
import MenuItems from "./MenuItems";
import "../../../Css/LeftMenu.css";

export default function LeftMenu() {
  return (
    <div className="LeftMenu">
      <TopElement />
      <MenuItems />
    </div>
  );
}
