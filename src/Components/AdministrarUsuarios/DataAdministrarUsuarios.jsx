import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import "../../Css/Materias.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellSlash, faBell } from "@fortawesome/free-solid-svg-icons";

export default function DataMaterias() {
  const [tipoBell, setTipoBell] = useState(faBell);

  return (
    <Grid container className="ContainerDataGrid">
      <Grid item xs={12} sm={2} className="DataGrid">
        Gonzalo
      </Grid>
      <Grid item xs={12} sm={2} className="DataGrid">
        Berro
      </Grid>
      <Grid item xs={12} sm={1} className="DataGrid">
        38993013
      </Grid>
      <Grid item xs={12} sm={2} className="DataGrid">
        berro.gonza2195@gmail.com
      </Grid>
      <Grid item xs={12} sm={2} className="DataGrid">
        Estudiante
      </Grid>
      <Grid item xs={12} sm={1} className="DataGrid">
        <Button variant="contained" color="primary">
          Editar
        </Button>
      </Grid>
      <Grid item xs={12} sm={2} className="DataGrid">
        <Button variant="contained" color="secondary">
          Deshabilitar Usuario
        </Button>
      </Grid>
    </Grid>
  );
}
