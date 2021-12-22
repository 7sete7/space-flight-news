import { Box, Typography, Card, CardContent, CardMedia, Button, Grid } from "@mui/material";
import { formatDate } from "../utils/format";
import truncate from "lodash/truncate";

import { withStyles } from "@mui/styles";

// orientation == {index % 2} == [1 | 0]
const Article = ({ orientation, data = {}, classes }) => (
  <Card raised={false} className={classes.card}>
    <CardMedia image={data.imageUrl} className={classes.image} />

    <CardContent className={classes.cardContent}>
      <Box display="flex" flexDirection="column">
        <Typography variant="h6" color="text.primary">
          {data.title}
        </Typography>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Typography variant="caption">{formatDate(data.publishedAt)}</Typography>
          {data.newsSite ? (
            <Typography variant="subtitle2" color="blue">
              {data.newsSite}
            </Typography>
          ) : null}
        </Box>

        <Typography paragraph sx={{ maxHeight: "75", overflow: "hidden" }}>
          {truncate(data.summary, { length: 120 })}
        </Typography>

        <Grid container>
          <Grid item xs={8} sm={4}>
            <Button href={data.url} target="_blank" fullWidth variant="contained" disableElevation disabled={data.url == null}>
              Ver mais
            </Button>
          </Grid>
        </Grid>
      </Box>
    </CardContent>
  </Card>
);

const style = theme => ({
  card: {
    marginBottom: "5rem",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("sm")]: {
      flexDirection: ({ orientation }) => (orientation ? "row" : "row-reverse"),
    },
  },

  cardContent: {
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      padding: ({ orientation }) => `0 ${orientation ? 0 : 16}px 0 ${orientation ? 16 : 0}px`,
    },
  },

  image: {
    width: "95%",
    backgroundSize: "contain",
    backgroundPosition: "top",

    [theme.breakpoints.down("sm")]: {
      height: 150,
      marginBottom: 10,
    },
  },
});

export default withStyles(style)(Article);
