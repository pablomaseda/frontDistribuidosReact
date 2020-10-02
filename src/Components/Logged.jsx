import React from "react";
import LeftMenu from "./PrimaryContainers/LeftMenu/LeftMenu";
import RightContainer from "./PrimaryContainers/RightContainer/RightContainer";

export default function Logged() {
  return (
    <div
      style={{
        height: "100vh",
        maxHeight: "100vh",
        display: "block",
      }}
    >
      <LeftMenu />
      <RightContainer />
    </div>
  );
}
