import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sectionCont: {
    padding: "50px 0px",
    background:
      "linear-gradient(0deg, rgba(51, 80, 69, 0.2) 0%, rgba(255,165,0, 0.2)100%)",
  },
  header: {
    padding: "20px 50px",
  },
  paragraph: {
    padding: "20px 50px",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <section className={classes.sectionCont}>
      <Grid container xs={12}>
        <Grid md={2}></Grid>
        <Grid xs={12} md={8}>
          <Paper>
            <h1 className={classes.header}>How did I get here?</h1>
            <div className={classes.paragraph}>
              <p>
                I have been interested in IT ever since I started my first
                MySpace page in 2008. It was my first glimpse of what was behind
                the scenes of a webpage, and how useful it was to be able to
                spot tags and insert code snippets. I didn't realize at the time
                how that moment would stick with me. As I progressed in school I
                simultaneously learned about the perils climate change, and how
                important it was to help steer the future to a more sustainable
                path. So when it came time to pick a major for university I put
                my interest in IT on hold to pursue Environmental Science.{" "}
              </p>
              <br />
              <p>
                Fast forward through a Science degree and starting what I
                thought would be my dream job, as an Environmental Scientist for
                the Depart of Environmental Quality, I found myself unsure how
                to advance my career. While I loved the idea of helping to
                protect the environment, the day to day work of interpreting
                regulations and proof-reading applications was a far cry from
                the Science Degree I had just earned. My work life met all the
                qualifications on paper, yet I still somehow felt unfulfilled. I
                decided to plot out a new course for my future and rediscovered
                my love of programming along the way.{" "}
              </p>
              <br />
              <p>
                I began learning T-SQL after someone in my networked suggested I
                could become a DBA. I studied hard for months on end and ended
                up passing the 70-461 exam in October, 2020 with no professional
                experience. However, I quickly learned companies aren't willing
                to hand the reigns to their databases without a proven track
                record and years of experience. But I was still absolutely
                exstatic that I taught myself a 'new to me' technology. But most
                importantly I proved to myself I could do this. I then
                transitioned to JavaScript and found it easier to measure my
                progress when I had a visual interface in front of me.{" "}
              </p>
              <br />
              <p>
                I spent many hours learning with tutorials and exercises, until
                I was able to manipulate my first DOM element. That was the
                magic moment for me when things came full circle and I found my
                perfect career path was there for me all along. I have been
                steadily progressing ever since!
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid md={2}></Grid>
      </Grid>
    </section>
  );
}
