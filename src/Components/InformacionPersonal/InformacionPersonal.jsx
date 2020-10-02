import React from "react";
import { Grid, Divider, Button } from "@material-ui/core";
import DatosContacto from "./DatosContacto";
import DatosPersonales from "./DatosPersonales";
import InformeAnalitico from "./InformeAnalitico";
import "../../Css/InformacionPersonal.css";
export default function InformacionPersonal() {
  return (
    <div className="InformacionPersonal">
      <Grid container>
        <Grid item md={6}>
          <DatosContacto />
        </Grid>
        <Grid item md={6}>
          <DatosPersonales />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        className="ButtonGuardarInformacionPersonal"
      >
        Guardar Cambios
      </Button>
      <Divider variant="middle" />

      <InformeAnalitico />
    </div>
  );
}
