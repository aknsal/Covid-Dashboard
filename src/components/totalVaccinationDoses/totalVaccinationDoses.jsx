import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#93fadb",
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

function TotalVaccinationDoses() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4">Total Vaccination Doses</Typography>
        <Typography variant="h3" className={classes.pos} color="default">
          36,38,66,177
        </Typography>
        <Typography variant="body2" component="p" color="green">
          +34,54,323 ↑
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TotalVaccinationDoses;
