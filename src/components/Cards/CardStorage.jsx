import React from "react";
import { Grid } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
  gridContainer: {
    paddingRight: "25px",
    paddingLeft: "25px",
    paddingTop: "1.5rem",
  },
  gridItem: {
    display: "flex",
  },
}));

const CardStorage = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.gridContainer}>
      <Grid item xs={12} sm={4} className={classes.gridItem}>
        <ProjectCard
          title={"Claim Assist"}
          imgSrc={
            "https://www.deq.virginia.gov/Project/Contents/Main/_gfx/cmn/logo.png"
          }
          description={
            "Built to parse excel data to locate and assess specific tasks and materials that had to be deliberately searched for in the past. This consolidates several micro tasks into one easy to use page."
          }
          siteUrl={"https://claim-assistant.netlify.app/"}
          codeUrl={"https://github.com/evanRez/claimAssist"}
        />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.gridItem}>
        <ProjectCard
          title={"Veil Shark"}
          imgSrc={
            "https://craftpeak-cooler-images.imgix.net/craft-collective/The-Veil-Brewing-Co-01.jpg?auto=compress%2Cformat&ixlib=php-1.2.1"
          }
          description={
            "A back-end (node.js) web scraping bot used to traverse the Veil Brewing's website in order to fulfill a predetermined purchase at a time scheduled by the user. Made in anticipation for hyped-up online releases."
          }
          siteUrl={"#"}
          codeUrl={"https://github.com/evanRez/veilShark"}
        />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.gridItem}>
        <ProjectCard
          title={"Pomodoro Timer"}
          avatarSrc={
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/271/tomato_1f345.png"
          }
          imgSrc={"https://i.morioh.com/200508/44b8fff1.jpg"}
          description={
            "My very first application. A pomodoro based timer made with love & Vanilla Javascript. It includes a sound functionality, time resets and promotes productivity by displying a tomato for each completed cycle."
          }
          siteUrl={"https://pomodororez.netlify.app/"}
          codeUrl={"https://github.com/evanRez/PomodoroReznicek"}
        />
      </Grid>
    </Grid>
  );
};

export default CardStorage;
