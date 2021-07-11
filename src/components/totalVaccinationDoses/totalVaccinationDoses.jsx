import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 12,
  },
});

function TotalVaccinationDoses({ darkMode }) {
  const classes = useStyles();

  let totalVaccinationDosesCardColor = "";

  if (darkMode) {
    totalVaccinationDosesCardColor = "#023123";
    console.log("DarkMode True in Home Page", darkMode);
  } else {
    totalVaccinationDosesCardColor = "#93fadb";
    console.log("DarkMode False");
  }

  return (
    <Card
      style={{ backgroundColor: totalVaccinationDosesCardColor }}
      className={classes.root}
    >
      <CardContent>
        <Typography variant="h4">Total Vaccinations Done</Typography>
        <Typography variant="h3" className={classes.pos}>
          36,38,66,177
        </Typography>
        <Typography variant="body2" component="p">
          +34,54,323 ↑
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TotalVaccinationDoses;
