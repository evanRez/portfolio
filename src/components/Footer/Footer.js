import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright ©Evan Reznicek "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  blurb: {
    display: "flex",
    justifyContent: "flexStart",
  },
  cr: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    justifyContent: "flex-end",
    "& i": {
      fontSize: "2rem",
      "&:hover": {
        color: "rgb(51, 80, 69)",
      },
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText("ereznice@gmail.com");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container>
          <div className={classes.blurb}>
            <Typography variant="body1">Let's Talk Code.</Typography>
          </div>
          <div className={classes.cr}>
            <Button color="secondary" size="small" onClick={handleClick}>
              Copy my Email!
              <AssignmentIcon />
            </Button>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message="Copied!"
              action={
                <React.Fragment>
                  <Button color="secondary" size="small" onClick={handleClose}>
                    UNDO
                  </Button>
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            />
          </div>
          <div className={classes.title}>
            <a
              href="https://www.linkedin.com/in/evan-reznicek-09050b8a/"
              target="_blank"
              style={{
                color: "orange",
                textDecoration: "none",
                padding: "10px 15px",
              }}
            >
              <i class="devicon-linkedin-plain"></i>
            </a>

            <a
              href="https://github.com/evanRez"
              target="_blank"
              style={{
                color: "orange",
                textDecoration: "none",
                padding: "10px 15px",
              }}
            >
              <i class="devicon-github-original"></i>
            </a>
          </div>
          <div className={classes.cr}>
            <Copyright />
          </div>
        </Container>
      </footer>
    </div>
  );
}
