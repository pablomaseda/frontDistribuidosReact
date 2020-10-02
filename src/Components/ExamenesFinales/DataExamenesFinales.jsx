import React from "react";
import { Grid, Button } from "@material-ui/core";
import "../../Css/ExamenesFinales.css";

export default function DataExamenesFinales() {
  return (
    <Grid container className="ContainerDataGrid">
      <Grid item xs={12} sm={3} className="DataGrid">
        Desarrollo de Sistemas Distribuidos
      </Grid>
      <Grid item xs={12} sm={1} className="DataGrid">
        8627-1 TM
      </Grid>
      <Grid item xs={12} sm={2} className="DataGrid">
        Diego Azcurra
      </Grid>
      <Grid item xs={12} sm={1} className="DataGrid">
        1º Llamado
      </Grid>
      <Grid item xs={12} sm={1} className="DataGrid">
        23/11/2020
      </Grid>
      <Grid item xs={12} sm={1} className="DataGrid">
        11:00 AM
      </Grid>
      <Grid item xs={12} sm={1} className="DataGrid">
        9
      </Grid>
      <Grid item xs={12} sm={2} className="DataGrid">
        <Button variant="contained" color="secondary">
          Anular Inscripción
        </Button>
      </Grid>
    </Grid>
  );
}
