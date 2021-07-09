import { AppBar, Toolbar, Button, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    toolbar: theme.mixins.toolbar,
  };
});

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <AppBar style={{ backgroundColor: "#386b5f" }}>
        <Toolbar>
          <Typography variant="h4">CoviC</Typography>
          <Grid
            container
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            flexGrow={1}
          >
            <Grid item>
              <Button color="inherit">Home</Button>
            </Grid>
            <Grid item>
              <Button color="inherit">Find Vaccination Centre</Button>
            </Grid>
            <Grid item>
              <Button color="inherit">FAQ's</Button>
            </Grid>
            <Grid item>
              <Button color="inherit">Login</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar}></div>
      <div>{children}</div>
    </div>
  );
}
