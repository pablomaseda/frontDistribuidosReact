import React from "react";
import HeaderExamenesFinales from "./HeaderExamenesFinales";
import DataExamenesFinales from "./DataExamenesFinales";
import ToolBarExamenesFinales from "./ToolBarExamenesFinales";
import "../../Css/Materias.css";

export default function ExamenesFinales() {
  return (
    <div className="Materias">
      <ToolBarExamenesFinales />
      <HeaderExamenesFinales />
      <div className="OverflowTable">
        <DataExamenesFinales />
        <DataExamenesFinales />
        <DataExamenesFinales />
        <DataExamenesFinales />
        <DataExamenesFinales />
        <DataExamenesFinales />
        <DataExamenesFinales />
        <DataExamenesFinales />
        <DataExamenesFinales />
        <DataExamenesFinales />
        <DataExamenesFinales />
        <DataExamenesFinales />
        <DataExamenesFinales />
        <DataExamenesFinales />
        <DataExamenesFinales />
        <DataExamenesFinales />
      </div>
    </div>
  );
}
