import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { formatDate } from "../utils/format";
import truncate from "lodash/truncate";

import Button from "./Button";

// orientation={intex%2}
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
            <Typography>{formatDate(data.createdAt)}</Typography>
            <Button variant="outline" style={{ paddin: "3px 2px", background: "none", border: "1px solid grey" }}>new site</Button>
          </Box>

          <Typography>{truncate(data.description, 120)}</Typography>
          <Button variant="contained" bg="primary.main" style={{ border: "none" }}>Ver mais</Button>
        </Box>
      </CardContent>

      {!!orientation || <CardMedia src={data.media} />}
    </Card>
  );
};

export default Article;
