import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import "../../Css/ExamenesFinales.css";

export default function ToolBarExamenesFinales() {
  return (
    <Grid container>
      <Grid item xs={12} sm={3} className="ToolBarExamenesFinales">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Buscar Examen Final"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={7}></Grid>
      <Grid item xs={12} sm={2} className="ToolBarExamenesFinales">
        <Button variant="contained" className="ButtonNuevoExamenFinal">
          Nuevo Examen Final +
        </Button>
      </Grid>
    </Grid>
  );
}
