import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Grid,
  Container,
} from "@material-ui/core";
import PercentageVaccinatedChart from "../percentageVaccinatedChart/percentageVaccinatedChart";

function PercentageVaccinated({ darkMode }) {
  let percentageVaccinatedCardColor = "";

  if (darkMode) {
    percentageVaccinatedCardColor = "#023300";
    console.log("DarkMode True");
  } else {
    percentageVaccinatedCardColor = "#c4ffc2";
    console.log("DarkMode False");
  }

  return (
    <div>
      <Card style={{ backgroundColor: percentageVaccinatedCardColor }}>
        <CardHeader title="Percentage of Population Vaccinated"></CardHeader>

        <PercentageVaccinatedChart />
        <Container>
          <Grid container spacing={1} justifyContent="center">
            <Grid item>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <div
                    style={{
                      backgroundColor: "#FFBB28",
                      width: 15,
                      height: 15,
                    }}
                  ></div>
                </Grid>
                <Grid item>
                  <Typography variant="caption">Non-Vaccinated</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <div
                    style={{
                      backgroundColor: "#0088FE",
                      width: 15,
                      height: 15,
                    }}
                  ></div>
                </Grid>
                <Grid item>
                  <Typography variant="caption">Fully Vaccinated</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <div
                    style={{
                      backgroundColor: "#00C49F",
                      width: 15,
                      height: 15,
                    }}
                  ></div>
                </Grid>
                <Grid item>
                  <Typography variant="caption">
                    Partially Vaccinated
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Card>
    </div>
  );
}

export default PercentageVaccinated;
