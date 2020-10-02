import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import "../../Css/Materias.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellSlash, faBell } from "@fortawesome/free-solid-svg-icons";

export default function DataMaterias() {
  const [tipoBell, setTipoBell] = useState(faBell);

  return (
    <Grid container className="ContainerDataGrid">
      <Grid item xs={12} sm={3} className="DataGrid">
        <FontAwesomeIcon
          className="IconMateriaOn"
          icon={tipoBell}
          title="Recordatorios Examenes Finales"
          onClick={() =>
            setTipoBell(tipoBell === faBellSlash ? faBell : faBellSlash)
          }
        />
        Desarrollo de Sistemas Distribuidos
      </Grid>
      <Grid item xs={12} sm={1} className="DataGrid">
        8627-1 TM
      </Grid>
      <Grid item xs={12} sm={2} className="DataGrid">
        Diego Azcurra
      </Grid>
      <Grid item xs={12} sm={1} className="DataGrid">
        Mañana
      </Grid>
      <Grid item xs={12} sm={2} className="DataGrid">
        2º Cuatrimestre
      </Grid>
      <Grid item xs={12} sm={1} className="DataGrid">
        <Button variant="contained" color="primary">
          Horarios
        </Button>
      </Grid>
      <Grid item xs={12} sm={2} className="DataGrid">
        <Button variant="contained" color="secondary">
          Anular Inscripción
        </Button>
      </Grid>
    </Grid>
  );
}
