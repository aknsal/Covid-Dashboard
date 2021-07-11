import VaccinationDetails from "../../components/vaccinationDetails/vaccinationDetails";
import PercentageVaccinated from "../../components/percentageVaccinated/percentageVaccinated";
import CentersAvailable from "../../components/centersAvailable/centersAvailable";
import CovidUpdates from "../../components/covidUpdates/covidUpdates";
import { Container, Grid, Typography } from "@material-ui/core";
import "./homepage.css";
import { useAuth } from "../../context/authContext";

function HomePage({ darkMode, socialMediaUser }) {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <div className="content-container">
      <Container>
        <Typography variant="h3">DASHBOARD </Typography>
        <Typography>{currentUser ? currentUser.email : ""}</Typography>
        <Typography>{socialMediaUser ? socialMediaUser.email : ""}</Typography>
        <hr />
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item md={6} sm={10} xs={11}>
            <VaccinationDetails darkMode={darkMode} />
          </Grid>
          <Grid item md={3} sm={5} xs={11}>
            <PercentageVaccinated darkMode={darkMode} />
          </Grid>
          <Grid item md={3} sm={5} xs={11}>
            <CentersAvailable darkMode={darkMode} />
          </Grid>
        </Grid>
      </Container>
      <CovidUpdates darkMode={darkMode} />
    </div>
  );
}

export default HomePage;
