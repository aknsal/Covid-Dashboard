import TotalVaccinationDoses from "../totalVaccinationDoses/totalVaccinationDoses";
import Doses1And2 from "../doses1And2/doses1And2";
import { Container, Grid } from "@material-ui/core";

function VaccinationDetails() {
  return (
    <div>
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <TotalVaccinationDoses />
        </Grid>
      </Grid>
      <Doses1And2 />
    </div>
  );
}

export default VaccinationDetails;
