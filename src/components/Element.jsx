import React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useStyles from "./style";

export const Element = ({ card }) => {
  const classes = useStyles();
  return (
    <Grid item key={card} xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={card.img}
          title="Image Title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
            {card.title}
          </Typography>
          <Typography>{card.type}</Typography>
          <Typography>{card.fund}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" className={classes.cardButton}>
            See more
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
