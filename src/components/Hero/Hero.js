import React from "react";
import "./Hero.css";
// import forest from "../../assets/forest-bridge.jpeg";

import { makeStyles } from "@material-ui/styles";

const bgUrl =
  "https://portfolio-assets-reznicek.s3.amazonaws.com/assets/forest-bridge.jpeg";

const useStyles = makeStyles((theme) => ({
  typographyStyles: {
    flex: 1,
  },
  heroWrapper: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgUrl})`,

    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    opacity: "80%",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroText: {
    textAlign: "center",
    position: "relative",
    fontSize: "2rem",
    color: "#d9d9d9",
    textShadow: "4px 4px 4px rgba(0, 0, 0, 1)",
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <section>
      <div className={classes.heroWrapper}>
        <div className={classes.heroText}>
          <h1>
            Hi, I'm Evan Reznicek, <br />
            Web App Developer.
          </h1>
        </div>
      </div>
    </section>
  );
}
