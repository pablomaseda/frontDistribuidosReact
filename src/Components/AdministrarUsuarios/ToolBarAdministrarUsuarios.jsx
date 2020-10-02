import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import "../../Css/AdministrarUsuarios.css";

export default function ToolBarAdministrarUsuarios() {
  return (
    <Grid container>
      <Grid item xs={12} sm={3} className="ToolBarUsuarios">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Buscar Usuario"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={7}></Grid>
      <Grid item xs={12} sm={2} className="ToolBarUsuarios">
        <Button variant="contained" className="ButtonNuevoUsuario">
          Nuevo Usuario +
        </Button>
      </Grid>
    </Grid>
  );
}
