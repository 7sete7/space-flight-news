import { Box, Typography, Card, CardContent, CardMedia, Button, Grid } from "@mui/material";
import { formatDate } from "../utils/format";
import truncate from "lodash/truncate";

import { withStyles } from "@mui/styles";

// orientation == {index % 2} == [1 | 0]
const Article = ({ orientation, data = {}, classes }) => (
  <Card raised={false} sx={{ marginBottom: "5rem", display: "flex" }}>
    {!!orientation ? <CardMedia image={data.imageUrl} className={classes.image} /> : null}

    <CardContent className={classes.cardContent}>
      <Box display="flex" flexDirection="column">
        <Typography variant="h6" color="text.primary">
          {data.title}
        </Typography>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Typography variant="caption">{formatDate(data.createdAt)}</Typography>
          {data.newsSite ? (
            <Typography variant="subtitle2" color="blue">
              {data.newsSite}
            </Typography>
          ) : null}
        </Box>

        <Typography paragraph sx={{ maxHeight: "75", overflow: "hidden" }}>
          {truncate(
            data.summary ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
            { length: 120 }
          )}
        </Typography>

        <Grid container>
          <Grid item xs={8} sm={4}>
            <Button href={data.url} fullWidth variant="contained" disableElevation disabled={data.url == null}>
              Ver mais
            </Button>
          </Grid>
        </Grid>
      </Box>
    </CardContent>

    {!!orientation ? null : <CardMedia image={data.imageUrl} className={classes.image} />}
  </Card>
);

const style = theme => ({
  cardContent: {
    padding: 0,
    [theme.breakpoints.up("md")]: {
      padding: ({ orientation }) => `0 ${orientation ? 0 : 16}px 0 ${orientation ? 16 : 0}px`,
    },
  },

  image: {
    width: "95%",
    backgroundSize: "contain",
    backgroundPosition: "top",
  },
});

export default withStyles(style)(Article);
