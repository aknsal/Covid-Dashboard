import { Typography, Container, Grid } from "@material-ui/core";
import FirstOrSecondDoseCard from "../firstOrSecondDoseCard/firstOrSecondDoseCard";

function Doses1And2({ darkMode }) {
  let doseCardColor = "";

  if (darkMode) {
    doseCardColor = "#2b302e";
    console.log("DarkMode True");
  } else {
    doseCardColor = "#ebfff6";
    console.log("DarkMode False");
  }
  return (
    <div style={{ paddingTop: 20 }}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item md={6} sm={6} xs={6}>
          <FirstOrSecondDoseCard
            title="Dose 1"
            data="34,76,564"
            increment="21,21,324"
            cardColor={doseCardColor}
          />
        </Grid>
        <Grid item md={6} sm={6} xs={6}>
          <FirstOrSecondDoseCard
            title="Dose 2"
            data="6,54,543"
            increment="217,21,324"
            cardColor={doseCardColor}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Doses1And2;
