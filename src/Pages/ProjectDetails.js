import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// import BlogrImg from "../assets/blogr.png";
// import LHG from "../assets/lakehousegame-mockup.png";
// import Bookmark from "../assets/Bookmark-mockweb.png";

// import video from "../assets/veil-demo.mp4";

// const videoUrl =
//   "https://portfolio-assets-reznicek.s3.amazonaws.com/assets/veil-demo.mp4";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "2rem",
    background:
      "linear-gradient(0deg, rgba(51, 80, 69, 0.2) 0%, rgba(255,165,0, 0.2)100%)",
    color: "black",
    paddingBottom: "10%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
  },
  videoTitle: {
    display: "flex",
    padding: "20px 0",
    justifySelf: "flexStart",
    color: "black",
  },
  textTitleLeft: {
    display: "flex",
    justifyContent: "flexEnd",
    padding: "20px 0",
    textAlign: "end",
    color: "black",
  },
  textpRight: {
    textAlign: "right",
  },
  textpLeft: {
    textAlign: "left",
  },
  textTitleRight: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "20px 0",
    color: "black",
  },
  containerTitle: {
    display: "flex",
    justifyContent: "center",
    fontSize: "25px",
    fontFamily: "Roboto",
    marginBottom: "5%",
  },
  imgStyle: {
    display: "flex",
    maxWidth: "50%",
  },
  textDiv: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "5%",
  },
  imgDiv: {
    display: "flex",
    justifyContent: "center",
  },
  grdCont: {
    maxWidth: "90%",
    flexGrow: "1",
    display: "flex",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const projectArr = [
  {
    name: "Blogr",
    mainImg:
      "https://portfolio-assets-reznicek.s3.amazonaws.com/assets/blogr.png",
    summary:
      "My first full page level CSS challenge. It taught me so much about patience and styling. Made with react and typical CSS styling sheets. This version was the first site I made into a mobile friendly and responsively designed site. ",
    site: "https://blogr-front-end.netlify.app/",
  },
  {
    name: "Lake House Games",
    mainImg:
      "https://portfolio-assets-reznicek.s3.amazonaws.com/assets/lakehousegames-mockup.png",
    summary:
      "I pushed myself to create some fun games to play when on vacation, (not yet mobile supported). There are some fairly tricky javascript game logic code blocks that I am proud of, such as searching and finding matches in connect four as well as keeping track of state when rolling dice and keeping score for Greedy Dice.",
    site: "https://lakehousegames.netlify.app/",
  },
  {
    name: "Bookmark",
    mainImg:
      "https://portfolio-assets-reznicek.s3.amazonaws.com/assets/Bookmark-mockup.png",
    summary:
      "I went for a slightly stronger single page from the blogr side. It will soon include valid email screening, a slider similar to a carousel, and mobile styling that will change aspects of the layout. The project is still being worked on but should be completed in the coming week or so.",
    site: "blank",
  },
];

export default function ProjectDetails() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.containerTitle}>
        Take a look at some of my personal projects
      </p>

      <Grid container xs={12} className={classes.grdCont} spacing={5}>
        {projectArr.map((proj) => {
          return (
            <>
              <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                  <img className={classes.imgStyle} src={proj.mainImg} />
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                  <h4 className={classes.textDiv}>Summay</h4>
                  <p className={classes.textDiv}>{proj.summary}</p>
                  <Button
                    size="small"
                    href={proj.site}
                    target="_blank"
                    variant="contained"
                    color="primary"
                    style={{ alignSelf: "flex-end" }}
                  >
                    Visit Site
                  </Button>
                </Paper>
              </Grid>
            </>
          );
        })}
      </Grid>
    </div>
  );
}

// {
//   name: "Veil Shark",
//   mainImg: videoUrl,
//   summary:
//     "This project was made using Node.js and a popular JavaScript webscraping library called Puppeteer. I combined my prior knowledge of JavaScript array methods and data structures with my aptitude to test documentation. I learned to use both Puppeteer and Cron Scheduler to mimic user engagement with a popular retail website.",
// },
