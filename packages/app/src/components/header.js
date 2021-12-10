import React from "react";

import { styled, alpha } from "@mui/material/styles";
import { Toolbar, Grid, Box, InputBase, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "20px 30px" }}>
      <Grid container>
        <Grid item xs={2} md={6} />
        <Grid item>
          <Box sx={{ position: "relative" }}>
            <TextField type="search" placeholder="Search..." />
            <SearchIcon  style={{ position: "absolute", right: 5, top: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
