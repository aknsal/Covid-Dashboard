import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Switch,
} from "@material-ui/core";

function CentersAvailable({ darkMode }) {
  let centersAvailableCardColor = "";

  if (darkMode) {
    centersAvailableCardColor = "#332e00";
    console.log("DarkMode True");
  } else {
    centersAvailableCardColor = "#fff9c2";
    console.log("DarkMode False");
  }
  return (
    <Card style={{ backgroundColor: centersAvailableCardColor }}>
      <CardHeader title="Total Vaccination Centers"></CardHeader>
      <CardContent>
        <Typography variant="h5">19,342</Typography>
      </CardContent>
    </Card>
  );
}

export default CentersAvailable;
