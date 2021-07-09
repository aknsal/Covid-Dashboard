import VaccinationDetails from "../../components/vaccinationDetails/vaccinationDetails";
import PercentageVaccinated from "../../components/percentageVaccinated/percentageVaccinated";
import CentersAvailable from "../../components/centersAvailable/centersAvailable";
import TotalRegistrations from "../../components/totalRegistrations/totalRegistrations";
import { Container, Grid } from "@material-ui/core";
import "./homepage.css";

function HomePage() {
  return (
    <div className="content-container">
      <Container>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item md={6} sm={10} xs={11}>
            <VaccinationDetails />
          </Grid>
          <Grid item md={3} sm={5} xs={11}>
            <PercentageVaccinated />
          </Grid>
          <Grid item md={3} sm={5} xs={11}>
            <CentersAvailable />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomePage;
