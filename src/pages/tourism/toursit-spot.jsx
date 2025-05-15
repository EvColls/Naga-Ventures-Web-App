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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Checkbox,
  ListItemText,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
    description: "A school.",
    categories: ["Historical"],
    businessHours: ["Mon-Fri 8AM-5PM"],
    admissionFee: "",
    profilePicture: null,
  },
  {
    id: 2,
    name: "Ateneo de Naga University",
    address: "Ateneo Avenue, ...",
    description: "A school.",
    categories: ["Historical"],
    businessHours: ["Mon-Fri 8AM-5PM"],
    admissionFee: "",
    profilePicture: null,
  },
  {
    id: 3,
    name: "Ateneo de Naga University",
    address: "Ateneo Avenue, ...",
    description: "A school.",
    categories: ["Historical"],
    businessHours: ["Mon-Fri 8AM-5PM"],
    admissionFee: "",
    profilePicture: null,
  },
  {
    id: 4,
    name: "Ateneo de Naga University",
    address: "Ateneo Avenue, ...",
    description: "A school.",
    categories: ["Historical"],
    businessHours: ["Mon-Fri 8AM-5PM"],
    admissionFee: "",
    profilePicture: null,
  },
  {
    id: 5,
    name: "Ateneo de Naga University",
    address: "Ateneo Avenue, ...",
    description: "A school.",
    categories: ["Historical"],
    businessHours: ["Mon-Fri 8AM-5PM"],
    admissionFee: "",
    profilePicture: null,
  },
  {
    id: 6,
    name: "Ateneo de Naga University",
    address: "Ateneo Avenue, ...",
    description: "A school.",
    categories: ["Historical"],
    businessHours: ["Mon-Fri 8AM-5PM"],
    admissionFee: "",
    profilePicture: null,
  },
  {
    id: 7,
    name: "Ateneo de Naga University",
    address: "Ateneo Avenue, ...",
    description: "A school.",
    categories: ["Historical"],
    businessHours: ["Mon-Fri 8AM-5PM"],
    admissionFee: "",
    profilePicture: null,
  },
  {
    id: 8,
    name: "Ateneo de Naga University",
    address: "Ateneo Avenue, ...",
    description: "A school.",
    categories: ["Historical"],
    businessHours: ["Mon-Fri 8AM-5PM"],
    admissionFee: "",
    profilePicture: null,
  },
  {
    id: 9,
    name: "Ateneo de Naga University",
    address: "Ateneo Avenue, ...",
    description: "A school.",
    categories: ["Historical"],
    businessHours: ["Mon-Fri 8AM-5PM"],
    admissionFee: "",
    profilePicture: null,
  },
  {
    id: 10,
    name: "Ateneo de Naga University",
    address: "Ateneo Avenue, ...",
    description: "A school.",
    categories: ["Historical"],
    businessHours: ["Mon-Fri 8AM-5PM"],
    admissionFee: "",
    profilePicture: null,
  },
  {
    id: 11,
    name: "Ateneo de Naga University",
    address: "Ateneo Avenue, ...",
    description: "A school.",
    categories: ["Historical"],
    businessHours: ["Mon-Fri 8AM-5PM"],
    admissionFee: "",
    profilePicture: null,
  },
  {
    id: 12,
    name: "Ateneo de Naga University",
    address: "Ateneo Avenue, ...",
    description: "A school.",
    categories: ["Historical"],
    businessHours: ["Mon-Fri 8AM-5PM"],
    admissionFee: "",
    profilePicture: null,
  },
];

const ITEMS_PER_PAGE = 10;

function TouristSpot() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const filteredData = data.filter(
    (spot) =>
      (selectedCategory === "All" ||
        spot.categories.includes(selectedCategory)) &&
      (spot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        spot.address.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getDisplayCategory = (spot) => {
    if (!spot.categories || spot.categories.length === 0) return "—";
    if (selectedCategory === "All") return spot.categories[0];
    const match = spot.categories.find((cat) => cat === selectedCategory);
    return match || spot.categories[0];
  };

  const pageCount = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  // Slice data for current page
  const paginatedData = filteredData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const [openDialog, setOpenDialog] = useState(false);
  const [newSpot, setNewSpot] = useState({
    name: "",
    address: "",
    description: "",
    categories: [],
    admissionFee: "",
    businessHours: [""],
    profilePicture: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSpot({ ...newSpot, [name]: value });
  };

  const handleCategoryChange = (e) => {
    setNewSpot({ ...newSpot, categories: e.target.value });
  };

  const handleAddBusinessHour = () => {
    setNewSpot({ ...newSpot, businessHours: [...newSpot.businessHours, ""] });
  };

  const handleBusinessHourChange = (index, value) => {
    const updated = [...newSpot.businessHours];
    updated[index] = value;
    setNewSpot({ ...newSpot, businessHours: updated });
  };

  const handleImageChange = (e) => {
    setNewSpot({
      ...newSpot,
      profilePicture: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleAddSpot = () => {
    const newId = data.length + 1;
    const newEntry = { id: newId, ...newSpot };
    data.push(newEntry);
    setOpenDialog(false);
    setNewSpot({
      name: "",
      address: "",
      description: "",
      categories: [],
      admissionFee: "",
      businessHours: [""],
      profilePicture: null,
    });
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
            onClick={() => setOpenDialog(true)}
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
            <TableHead>
              <TableRow sx={{ backgroundColor: "#002c5f" }}>
                <TableCell sx={{ color: "white", width: "5%" }}>ID</TableCell>
                <TableCell sx={{ color: "white", width: "20%" }}>
                  Name
                </TableCell>
                <TableCell sx={{ color: "white", width: "45%" }}>
                  Address
                </TableCell>
                <TableCell sx={{ color: "white", width: "15%" }}>
                  Category
                </TableCell>
                <TableCell sx={{ color: "white", width: "15%" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedData.map((spot) => (
                <TableRow key={spot.id}>
                  <TableCell>{spot.id}</TableCell>
                  <TableCell>{spot.name}</TableCell>
                  <TableCell>{spot.address}</TableCell>
                  <TableCell>{getDisplayCategory(spot)}</TableCell>
                  <TableCell>
                    <Button variant="contained" size="small">
                      View Full Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
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
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>Add Tourist Spot</DialogTitle>
          <DialogContent dividers>
            <Stack spacing={2} mt={1}>
              <input
                label="Picture"
                accept="image/*"
                type="file"
                onChange={handleImageChange}
              />
              <TextField
                label="Name"
                name="name"
                value={newSpot.name}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                label="Address"
                name="address"
                value={newSpot.address}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                label="Description"
                name="description"
                value={newSpot.description}
                onChange={handleInputChange}
                multiline
                rows={3}
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel>Categories</InputLabel>
                <Select
                  multiple
                  value={newSpot.categories}
                  onChange={handleCategoryChange}
                  input={<OutlinedInput label="Categories" />}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {categories
                    .filter((c) => c !== "All")
                    .map((cat) => (
                      <MenuItem key={cat} value={cat}>
                        <Checkbox
                          checked={newSpot.categories.indexOf(cat) > -1}
                        />
                        <ListItemText primary={cat} />
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>

              <Stack direction="row" spacing={1} alignItems="center">
                <TextField
                  label="Admission Fee"
                  name="admissionFee"
                  type="number"
                  value={newSpot.admissionFee}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Stack>

              {newSpot.businessHours.map((hour, index) => (
                <TextField
                  key={index}
                  label={`Business Hour ${index + 1}`}
                  value={hour}
                  onChange={(e) =>
                    handleBusinessHourChange(index, e.target.value)
                  }
                  fullWidth
                />
              ))}
              <Button
                onClick={handleAddBusinessHour}
                startIcon={<AddIcon />}
                variant="outlined"
              >
                Add Business Hour
              </Button>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button onClick={handleAddSpot} variant="contained">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}

export default TouristSpot;
