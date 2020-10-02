import React from "react";
import { Grid, TextField } from "@material-ui/core";
import "../../Css/InformacionPersonal.css";

export default function DatosPersonales() {
  return (
    <Grid container className="ColumInformacionPersonal">
      <Grid item md={12}>
        <h3 className="TitleDatosContacto">Datos Personales</h3>
      </Grid>
      <Grid item md={12}>
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            disabled={true}
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            className="InputsDato"
          />
          <TextField
            fullWidth
            disabled={true}
            id="outlined-basic"
            label="Apellido"
            variant="outlined"
            className="InputsDato"
          />
          <TextField
            fullWidth
            disabled={true}
            id="outlined-basic"
            label="Documento"
            variant="outlined"
            className="InputsDato"
          />
          <h3>Cambiar Contraseña</h3>
          <TextField
            fullWidth
            type="password"
            id="outlined-basic"
            label="Clave"
            variant="outlined"
            className="InputsDato"
          />
          <TextField
            fullWidth
            type="password"
            id="outlined-basic"
            label="Confirmar Clave"
            variant="outlined"
            className="InputsDato"
          />
        </form>
      </Grid>
    </Grid>
  );
}
