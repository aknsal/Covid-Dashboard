import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  Link,
  Typography,
  Box,
  CssBaseline,
  Container,
} from "@material-ui/core";
import Copyright from "../copyright/copyright";
import "./vaccinationSlotsByPin.css";
import { DataGrid } from "@material-ui/data-grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#eef7f4",
    borderRadius: "1rem",
    paddingBottom: theme.spacing(3),
  },
  form: {
    width: "90%",
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "60%",
  },
}));

const columns = [
  { field: "name", headerName: "Name", width: "340px" },
  //   { field: "district_name", headerName: "Address", width: "200px" },
  {
    field: "available_capacity",
    headerName: "Avaiable Capacity",
    width: "200px",
  },
  //   { field: "available_capacity_dose1", headerName: "Dose 1", width: "200px" },
  //   { field: "available_capacity_dose2", headerName: "Dose 2", width: "200px" },
  //   { field: "fee", headerName: "Fee", width: "50px" },
];

export default function VaccinationSlotsByPin({ darkMode }) {
  const classes = useStyles();
  const [pincode, setPincode] = useState();
  const [data, setData] = useState({ sessions: [] });

  //   const [pincodeError, setPincodeError] = useState(false);

  //   if (!pincode) {
  //     setPincodeError(true);
  //   }
  console.log(pincode);

  async function loadSlots() {
    const response = await fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=31-03-2021`
    );
    const data = await response.json();
    return data;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Inside Handle Function");
    let data;
    try {
      data = await loadSlots();

      console.log("inside Try");
    } catch (error) {
      console.log("Error!");
      console.log(error);
    }
    console.log(data);
    data.sessions.map((data) => {
      data["id"] = data.center_id;
    });
    setData(data);
    console.log(data);
  }

  let vaccinationBackgroundColor = "";

  if (darkMode) {
    vaccinationBackgroundColor = "#2b302e";
    console.log("DarkMode True");
  } else {
    vaccinationBackgroundColor = "#ebfff6";
    console.log("DarkMode False");
  }
  console.log(data.sessions);

  return (
    <div className="vaccination-slot-by-pin-card">
      <div>
        <Container
          style={{
            backgroundColor: vaccinationBackgroundColor,
          }}
          maxWidth="xs"
          className={classes.container}
        >
          <CssBaseline />
          <div className={classes.paper}>
            <Typography variant="h4">Enter Pincode of the District</Typography>

            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                id="email"
                label="Pincode"
                name="pincode"
                autoComplete="pincode"
                type="number"
                autoFocus
                required
                onChange={(e) => setPincode(e.target.value)}
                // error={pincodeError}
              />

              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
                className={classes.submit}
                // disabled={loading}
              >
                Find Slots
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Login
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
        <br />
        {/* Data Grid */}
        <Container
          style={{
            backgroundColor: vaccinationBackgroundColor,
          }}
          maxWidth="sm"
          className={classes.container}
        >
          <br />
          <div style={{ height: 300, width: "100%" }}>
            <DataGrid columns={columns} rows={data.sessions} />
          </div>
        </Container>
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
    </div>
  );
}
