import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import "../../Css/Materias.css";

export default function ToolBarMaterias() {
  return (
    <Grid container>
      <Grid item xs={12} sm={3} className="ToolBarMaterias">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Buscar Materia"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={7}></Grid>
      <Grid item xs={12} sm={2} className="ToolBarMaterias">
        <Button variant="contained" className="ButtonNuevaMateria">
          Nueva Materia +
        </Button>
      </Grid>
    </Grid>
  );
}
