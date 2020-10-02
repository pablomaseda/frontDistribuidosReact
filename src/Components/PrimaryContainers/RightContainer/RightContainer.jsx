import React from "react";
import "../../../Css/RightContainer.css";
import { useSelector } from "react-redux";
import { MenuOptions } from "../../../actions/types";
import Materias from "../../Materias/Materias";
import ExamenesFinales from "../../ExamenesFinales/ExamenesFinales";
import InformacionPersonal from "../../InformacionPersonal/InformacionPersonal";
import AdministrarUsuarios from "../../AdministrarUsuarios/AdministrarUsuarios";
export default function RightContainer() {
  const menuSelected = useSelector((state) => state.menuSelected.menuSelected);

  const SwitchMenu = () => {
    switch (menuSelected) {
      case MenuOptions.Materias:
        return <Materias />;
      case MenuOptions.ExamenesFinales:
        return <ExamenesFinales />;
      case MenuOptions.InformacionPersonal:
        return <InformacionPersonal />;
      case MenuOptions.AdministrarUsuarios:
        return <AdministrarUsuarios />;
      default:
        return <div></div>;
    }
  };

  return (
    <div className="RightContainer">
      <SwitchMenu />
    </div>
  );
}
