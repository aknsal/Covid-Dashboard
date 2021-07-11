import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function CovidCard({ title, data, increment, darkMode }) {
  let color = "";
  if (title === "Total Cases") {
    if (darkMode) {
      color = "#4d3d00";
    } else {
      color = "#ffe785";
    }
  } else if (title === "Recovered") {
    if (darkMode) {
      color = "#123300";
    } else {
      color = "#9cff66";
    }
  } else {
    if (darkMode) {
      color = "#330000";
    } else {
      color = "#ff8787";
    }
  }
  return (
    <Card style={{ backgroundColor: color }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h5">{data}</Typography>
        <Typography style={{ color: "green" }} variant="body2" component="p">
          +{increment} ↑
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CovidCard;
