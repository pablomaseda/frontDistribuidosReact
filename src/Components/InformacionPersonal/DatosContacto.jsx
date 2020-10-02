import React from "react";
import { Grid, TextField } from "@material-ui/core";
import "../../Css/InformacionPersonal.css";

export default function DatosContacto() {
  return (
    <Grid container className="ColumInformacionPersonal">
      <Grid item md={12}>
        <h3 className="TitleDatosContacto">Datos de Contacto</h3>
      </Grid>
      <Grid item md={12}>
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Teléfono"
            variant="outlined"
            className="InputsDato"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="InputsDato"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Dirección"
            variant="outlined"
            className="InputsDato"
          />
        </form>
      </Grid>
    </Grid>
  );
}
