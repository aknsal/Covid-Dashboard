import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import CovidCard from "../covidCard/covidCard";
import "./covidUpdates.css";

function CovidUpdates({ darkMode }) {
  return (
    <React.Fragment>
      <div className="covid-updates-title">
        <Typography variant="h4" gutterBottom>
          Covid-19 Cases In India
        </Typography>
      </div>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item md={4} sm={10} xs={10}>
            <CovidCard
              title="Total Cases"
              data="3.08Cr"
              increment="43,393"
              darkMode={darkMode}
            />
          </Grid>
          <Grid item md={4} sm={5} xs={10}>
            <CovidCard
              title="Recovered"
              data="2.99Cr"
              increment="43,393"
              darkMode={darkMode}
            />
          </Grid>
          <Grid item md={4} sm={5} xs={10}>
            <CovidCard
              title="Deaths"
              data="4.06L"
              increment="43,393"
              darkMode={darkMode}
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default CovidUpdates;
