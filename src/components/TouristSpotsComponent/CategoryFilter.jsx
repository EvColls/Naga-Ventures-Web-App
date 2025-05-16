import React from "react";
import { Button, Stack } from "@mui/material";

const categories = [
  "All",
  "Historical Landmark",
  "Natural",
  "Religious Site",
  "Museum",
  "Urban Attractions",
  "Sports and Recreation",
];

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
      {categories.map((cat) => (
        <Button
          key={cat}
          variant={selectedCategory === cat ? "contained" : "outlined"}
          onClick={() => onCategoryChange(cat)}
        >
          {cat}
        </Button>
      ))}
    </Stack>
  );
};

export default CategoryFilter;