import React, { useCallback, useState } from "react";

import { Grid, Box, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = ({ filter, mergeFilter }) => {
  const [text, setText] = useState("");

  const onChange = useCallback(({ target }) => setText(target.value), []);
  const onSearchClick = useCallback(
    () => mergeFilter({ text, shouldReset: filter.text !== text }),
    [text, filter.text]
  );

  const onSelect = useCallback(
    ({ target }) => mergeFilter({ order: target.value, shouldReset: filter.order != target.value }),
    [filter.order]
  );

  return (
    <Box sx={{ flexGrow: 1, padding: "20px 30px" }}>
      <Grid container spacing={1}>
        <Grid item xs={0} sm={2} md={6} />
        <Grid item>
          <Box sx={{ position: "relative" }}>
            <TextField placeholder="Search..." onChange={onChange} />
            <SearchIcon style={{ position: "absolute", right: 5, top: 5 }} onClick={onSearchClick} />
          </Box>
        </Grid>
        <Grid item>
          <FormControl>
            <InputLabel id="sort-label">Ordem</InputLabel>
            <Select onChange={onSelect} defaultValue="publishedAt:asc" label="Ordem" labelId="sort-label" placeholder="Sort">
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
