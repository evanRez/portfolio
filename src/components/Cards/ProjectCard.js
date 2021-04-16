import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

import "./CardStorage.jsx";
import { CardActionArea } from "@material-ui/core";
import theme from "../Theme.js";

const useStyles = makeStyles({
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
    display: "flex",
    justifyContent: "center",
  },
  linkBtn: {
    alignSelf: "end",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    "& :hover": {
      backgroundColor: "orange",
    },
  },
  cHead: {
    backgroundColor: "rgb(51, 80, 69)",
    color: "white",
    textAlign: "center",
  },
});

const ProjectCard = (props) => {
  const classes = useStyles();
  const { title, description, imgSrc, siteUrl, codeUrl } = props;
  return (
    <Card>
      <CardActionArea>
        <CardHeader title={title} className={classes.cHead} />
        <CardMedia style={{ height: "150px" }} image={imgSrc} />
        <CardContent>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions className={classes.pos}>
          <Button
            size="small"
            href={siteUrl}
            target="_blank"
            className={classes.linkBtn}
          >
            Visit Site
          </Button>
          <Button
            size="small"
            href={codeUrl}
            target="_blank"
            className={classes.linkBtn}
          >
            Code
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
