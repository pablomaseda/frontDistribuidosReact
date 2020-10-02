import React from "react";
import { Grid, Button } from "@material-ui/core";
import "../../Css/InformacionPersonal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
export default function InformeAnalitico() {
  return (
    <Grid container className="ColumInformacionPersonal">
      <Grid item md={12}>
        <h4>Informe Analítico</h4>
      </Grid>
      <Grid item md={12}>
        <Button variant="contained" color="primary">
          Descargar
          <FontAwesomeIcon
            className="IconMateriaOn"
            icon={faDownload}
            title="Recordatorios Examenes Finales"
            style={{ color: "white" }}
          />
        </Button>
      </Grid>
    </Grid>
  );
}
