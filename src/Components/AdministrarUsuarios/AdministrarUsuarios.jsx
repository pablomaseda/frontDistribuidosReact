import React from "react";
import HeaderAdministrarUsuarios from "./HeaderAdministrarUsuarios";
import DataAdministrarUsuarios from "./DataAdministrarUsuarios";
import ToolBarMaterias from "./ToolBarAdministrarUsuarios";
import "../../Css/Materias.css";

export default function Materias() {
  return (
    <div className="Materias">
      <ToolBarMaterias />
      <HeaderAdministrarUsuarios />
      <div className="OverflowTable">
        <DataAdministrarUsuarios />
        <DataAdministrarUsuarios />
        <DataAdministrarUsuarios />
        <DataAdministrarUsuarios />
        <DataAdministrarUsuarios />
        <DataAdministrarUsuarios />
        <DataAdministrarUsuarios />
        <DataAdministrarUsuarios />
      </div>
    </div>
  );
}
