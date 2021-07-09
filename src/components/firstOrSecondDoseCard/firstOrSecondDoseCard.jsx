import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function FirstOrSecondDoseCard({ title, data, increment }) {
  return (
    <Card style={{ backgroundColor: "#e0fffa" }}>
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

export default FirstOrSecondDoseCard;
