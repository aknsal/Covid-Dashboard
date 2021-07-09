import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

function TotalRegistrations() {
  return (
    <Card style={{ backgroundColor: "#fff9c2" }}>
      <CardHeader title="Total Registrations"></CardHeader>
      <CardContent>
        <Typography variant="h5">38,43,343</Typography>
      </CardContent>
    </Card>
  );
}

export default TotalRegistrations;
