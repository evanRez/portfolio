import * as React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import Me from "../assets/gitPhoto.jpeg";
import Me from "assets/gitPhoto.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  sectionCont: {
    padding: "50px 0px",
    height: "100vh",
    background:
      "linear-gradient(0deg, rgba(51, 80, 69, 0.2) 0%, rgba(255,165,0, 0.2)100%)",
  },
  header: {
    padding: "20px 50px",
  },
  paragraph: {
    padding: "20px 50px",
  },
  imgDetails: {
    maxWidth: "50%",
    maxHeight: "50%",
    display: "flex",
    justifySelf: "center",
    marginLeft: "25%",
    marginTop: "5%",
    borderRadius: "25px",
    boxShadow: "0 4px 12px 0px rgba(0, 0, 0, .25)",
  },
  send: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "5%",
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <section className={classes.sectionCont}>
      <Grid container xs={12}>
        <Grid md={3}></Grid>
        <Grid xs={12} md={6}>
          <Paper>
            <div style={{ paddingTop: "10px" }}>
              <img
                src="assets/gitPhoto.jpeg"
                className={classes.imgDetails}
              ></img>
            </div>
            <br />
            <div className={classes.send}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                target="_top"
                rel="noopener noreferrer"
                href={`mailto:ereznice@gmail.com`}
              >
                <Typography
                  variant="button"
                  style={{
                    fontSize: "0.69rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Send Me A Message
                </Typography>
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid md={3}></Grid>
      </Grid>
    </section>
  );
}
