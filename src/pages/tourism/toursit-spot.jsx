import React, { useState } from "react";
import Header from "../../components/Header";
import {
  Box,
  Button,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  Stack,
  Pagination,
} from "@mui/material";

const categories = [
  "All",
  "Historical",
  "Natural",
  "Religious Sites",
  "Museum",
  "Urban Attractions",
  "Sports and Recreation",
];

const data = [
  {
    id: 1,
    name: "Ateneo de Naga University",
    address: "Ateneo Avenue, ...",
    category: "Historical Landmarks",
  },
  {
    id: 2,
    name: "Camarines Sur National High School",
    address: "Peñafrancia Avenue, ...",
    category: "Historical Landmarks",
  },
  {
    id: 3,
    name: "Holy Rosary Minor Seminary",
    address: "Elias Angeles Street, ...",
    category: "Historical Landmarks",
  },
  {
    id: 4,
    name: "Some other spot",
    address: "Address 4",
    category: "Historical Landmarks",
  },
  {
    id: 5,
    name: "Another spot",
    address: "Address 5",
    category: "Historical Landmarks",
  },
  {
    id: 6,
    name: "Ateneo de Naga University",
    address: "Ateneo Avenue, ...",
    category: "Historical Landmarks",
  },
  {
    id: 7,
    name: "Camarines Sur National High School",
    address: "Peñafrancia Avenue, ...",
    category: "Historical Landmarks",
  },
  {
    id: 8,
    name: "Holy Rosary Minor Seminary",
    address: "Elias Angeles Street, ...",
    category: "Historical Landmarks",
  },
  {
    id: 9,
    name: "Some other spot",
    address: "Address 4",
    category: "Historical Landmarks",
  },
  {
    id: 10,
    name: "Another spot",
    address: "Address 5",
    category: "Historical Landmarks",
  },
  {
    id: 11,
    name: "Another spot",
    address: "Address 5",
    category: "Historical Landmarks",
  },
  // and so on, with unique IDs for all entries
];

const ITEMS_PER_PAGE = 10;

function TouristSpot() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const filteredData = data.filter(
    (spot) =>
      (selectedCategory === "All" ||
        spot.category.includes(selectedCategory)) &&
      (spot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        spot.address.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const pageCount = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  // Slice data for current page
  const paginatedData = filteredData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Header title="Tourist Spots" />
      <Box p={3}>
        {/* Search and Add Button */}
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
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ whiteSpace: "nowrap" }}
          >
            Add
          </Button>
        </Stack>

        {/* Category Filters */}
        <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "contained" : "outlined"}
              onClick={() => {
                setSelectedCategory(cat);
                setPage(1); // Reset page on category change
              }}
            >
              {cat}
            </Button>
          ))}
        </Stack>

        {/* Data Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>{/* header cells */}</TableHead>
            <TableBody>
              {paginatedData.length > 0 ? (
                paginatedData.map((spot) => (
                  <TableRow key={spot.id}>
                    <TableCell>{spot.id}</TableCell>
                    <TableCell>{spot.name}</TableCell>
                    <TableCell>{spot.address}</TableCell>
                    <TableCell>{spot.category}</TableCell>
                    <TableCell>
                      <Button variant="contained" size="small">
                        View Full Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No records found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        {pageCount > 1 && (
          <Box mt={2} display="flex" justifyContent="center">
            <Pagination
              count={pageCount}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        )}
      </Box>
    </>
  );
}

export default TouristSpot;
