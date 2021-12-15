import { Box, Typography, Card, CardContent, CardMedia, Button, Grid } from "@mui/material";
import { formatDate } from "../utils/format";
import truncate from "lodash/truncate";

// import Button from "./Button";

// orientation={index%2}
const Article = ({ orientation, data = {} }) => {
  return (
    <Card raised={false} sx={{ marginBottom: "3rem" }}>
      {!!orientation && <CardMedia src={data.media} />}

      <CardContent>
        <Box display="flex" flexDirection="column">
          <Typography variant="h4" color="text.primary">
            {data.title}
          </Typography>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography variant="caption">{formatDate(data.createdAt)}</Typography>
            <Button variant="outlined" color="auxiliar" style={{ padding: "2px 8px" }}>
              new site
            </Button>
          </Box>

          <Typography>{truncate(data.description, 120)}</Typography>
          <Grid container>
            <Grid item xs={8} sm={4}>
              <Button fullWidth variant="contained" disableElevation>
                Ver mais
              </Button>
            </Grid>
          </Grid>

        </Box>
      </CardContent>

      {!!orientation || <CardMedia src={data.media} />}
    </Card>
  );
};

export default Article;
