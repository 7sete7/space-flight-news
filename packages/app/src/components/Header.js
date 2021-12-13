import React from "react";

import { Grid, Box, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "20px 30px" }}>
      <Grid container spacing={1}>
        <Grid item xs={2} md={6} />
        <Grid item>
          <Box sx={{ position: "relative" }}>
            <TextField type="search" placeholder="Search..." />
            <SearchIcon style={{ position: "absolute", right: 5, top: 5 }} />
          </Box>
        </Grid>
        <Grid item>
          <FormControl>
            <InputLabel id="sort-label">Ordem</InputLabel>
            <Select value="publishedAt:asc" label="Ordem" labelId="sort-label" placeholder="Sort">
              <MenuItem value="publishedAt:desc">Mais antigas</MenuItem>
              <MenuItem value="publishedAt:asc">Mais novas</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
