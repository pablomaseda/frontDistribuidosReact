import React from "react";
import HeaderMaterias from "./HeaderMaterias";
import DataMaterias from "./DataMaterias";
import ToolBarMaterias from "./ToolBarMaterias";
import "../../Css/Materias.css";

export default function Materias() {
  return (
    <div className="Materias">
      <ToolBarMaterias />
      <HeaderMaterias />
      <div className="OverflowTable">
        <DataMaterias />
        <DataMaterias />
        <DataMaterias />
        <DataMaterias />
        <DataMaterias />
        <DataMaterias />
        <DataMaterias />
        <DataMaterias />
        <DataMaterias />
        <DataMaterias />

        <DataMaterias />
        <DataMaterias />
        <DataMaterias />
        <DataMaterias />
        <DataMaterias />
        <DataMaterias />
      </div>
    </div>
  );
}
