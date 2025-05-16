import React from "react";
import { TextField, Box, Button, Stack } from "@mui/material";

const SearchBar = ({ searchTerm, onSearchChange, onAddClick }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
      spacing={2}
    >
      <Box sx={{ flexGrow: 1 }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={onSearchChange}
          fullWidth
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ whiteSpace: "nowrap" }}
        onClick={onAddClick}
      >
        Add
      </Button>
    </Stack>
  );
};

export default SearchBar;