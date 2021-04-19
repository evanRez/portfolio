import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import video from "../assets/VeilDemo.mp4";
import video from "../assets/veil-demo.mp4";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    paddingTop: "2rem",
    background:
      "linear-gradient(0deg, rgba(51, 80, 69, 0.2) 0%, rgba(255,165,0, 0.2)100%)",
    color: "black",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
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
  },
}));

export default function ProjectDetails() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container xs={12}>
        <Grid item xs={1}></Grid>
        <Grid container spacing={3} xs={10}>
          <Grid item xs={12}>
            <p className={classes.containerTitle}>
              Dig deeper into my coding process
            </p>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
              <h4 className={classes.videoTitle}>Veil Shark</h4>
              <video width="500px" height="300px" controls="controls">
                <source src={video} />
              </video>
            </Paper>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
              <h4 className={classes.textTitleRight}>Take Away</h4>
              <p className={classes.textpRight}>
                This project was made using Node.js and a popular JavaScript
                webscraping library called "Puppeteer". I combined my prior
                knowledge of JavaScript array methods and data structures with
                my aptitude to test documentation. I learned to use both
                Puppeteer and Cron Scheduler to mimic user engagement with a
                popular retail website.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
              <h4 className={classes.textTitleLeft}>Challenges</h4>
              <p className={classes.textpLeft}>
                This project was the most challenging app I had done at the
                time. While the code is not lengthy, it felt like I learned a
                new technology is under two weeks. In the future I would like to
                apply web scraping to legally capture data to support projects
                and I would like to run the scheduler to update a blog type
                website with new content from a variety of sources.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}></Grid>
        </Grid>

        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}

{
  /* <div className={classes.root}>
      <Grid
        container
        spacing={3}
        xs={10}
        justify="center"
        style={{ marginTop: "1.5rem" }}
      >
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <video
              src="https://www.youtube.com/watch?v=UNCq01LNNrg&list=PLQg6GaokU5CwiVmsZ0d_9Zsg_DnIP_xwr&index=12"
              width="600"
              height="300"
              controls="controls"
              autoplay="false"
            ></video>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <h4>Veil Shark</h4>
            <p>
              This project was made using Node.js and a popular JavaScript
              webscraping library called "Puppeteer".
            </p>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <h4>Challenges</h4>
            <p>
              I had to learn what webscraping was from scratch. I had to find a
              way to manipulate specific dom elements and search for items based
              on deeply nested code. This was my forray into Node.js on my own
              as well.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <img
              src="https://pentesterslife.files.wordpress.com/2018/06/sample1.png?w=773"
              width="600"
              height="300"
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div> */
}
