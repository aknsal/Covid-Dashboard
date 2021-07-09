import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

function CentersAvailable() {
  return (
    <Card style={{ backgroundColor: "#fff9c2" }}>
      <CardHeader title="Total Vaccination Centers"></CardHeader>
      <CardContent>
        <Typography variant="h5">19,342</Typography>
      </CardContent>
    </Card>
  );
}

export default CentersAvailable;
