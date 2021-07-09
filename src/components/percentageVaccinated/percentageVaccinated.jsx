import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

function PercentageVaccinated() {
  return (
    <Card style={{ backgroundColor: "#c4ffc2" }}>
      <CardHeader title="Percentage of Population Vaccintage"></CardHeader>
      <CardContent>
        <Typography variant="h6">1st Dose Vaccinated</Typography>
        <Typography variant="h4">22%</Typography>
        <br />
        <Typography variant="h6">Fully Vaccinated</Typography>
        <Typography variant="h4">4%</Typography>
      </CardContent>
    </Card>
  );
}

export default PercentageVaccinated;
