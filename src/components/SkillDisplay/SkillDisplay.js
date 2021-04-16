// import { CardContent } from "@material-ui/core";
import React, { Component } from "react";
import "./SkillDisplay.css";
import CardStorage from "../Cards/CardStorage";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  typographyStyles: {
    flex: 1,
  },
  sectionTitle: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "1rem",
    paddingTop: "1rem",
    marginTop: "1rem",
    marginLeft: "20%",
    marginRight: "20%",
    marginBottom: "2rem",
    fontFamily: "Roboto",
    fontSize: "30px",
    backgroundColor: "rgb(51, 80, 69)",
    borderRadius: "5px",
    color: "white",
  },
  skillsText: {
    marginTop: "10vh",
    marginLeft: "10vw",
    marginRight: "10vw",
    marginBottom: "10vh",
    fontSize: "25px",
    padding: "15px",
    fontFamily: "Roboto",
  },
}));

export default function SkillDisplay() {
  const classes = useStyles();
  return (
    <div
      className="section-wrapper"
      style={{
        background:
          "linear-gradient(0deg, rgba(51, 80, 69, 0.2) 0%, rgba(255,165,0, 0.2)100%)",
      }}
    >
      <p className={classes.sectionTitle}>Current Projects</p>
      <div className="fake-display">
        <CardStorage />
      </div>

      <div className={classes.skillsText}>
        <p className="stack-icons">
          Preferred Stack:
          <div className="devicons">
            <i class="devicon-mongodb-plain-wordmark colored"></i>
            <i class="devicon-express-original-wordmark colored"></i>
            <i class="devicon-react-original-wordmark colored"></i>
            <i class="devicon-nodejs-plain-wordmark colored"></i>
          </div>
        </p>
        <p className="moreIcons">
          Additional Skills:
          <div className="devicons">
            <div className="icon-row-1">
              <i class="devicon-css3-plain-wordmark colored"></i>
              <i class="devicon-html5-plain colored"></i>
              <i class="devicon-javascript-plain colored"></i>
              <i class="devicon-microsoftsqlserver-plain-wordmark colored"></i>
              <i class="devicon-git-plain colored"></i>
            </div>
            <br />
            <div className="icon-row-2">
              <i class="devicon-materialui-plain colored"></i>
              <i class="devicon-webpack-plain colored"></i>
              <i class="devicon-wordpress-plain colored"></i>
              <i class="devicon-php-plain colored"></i>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}
