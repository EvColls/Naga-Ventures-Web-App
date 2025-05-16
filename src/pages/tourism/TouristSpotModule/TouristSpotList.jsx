import React, { useState } from "react";
import Header from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
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
    description: "A school.",
    categories: ["Historical"],
    businessHours: ["Mon-Fri 8AM-5PM"],
    admissionFee: "",
    profilePicture: null,
  },
  {
    id: 2,
    name: "Holy Rosary Minor Seminary",
    address: "Elias Angeles St, Naga, 4400 Camarines Sur",
    description: "A historical and religious seminary.",
    categories: ["Historical", "Religious Sites"],
    businessHours: ["Always Open"],
    admissionFee: "Free",
    profilePicture: null,
  },
  {
    id: 3,
    name: "Naga Metropolitan Cathedral",
    address: "Peñafrancia Ave, Naga, Camarines Sur",
    description: "The main cathedral of the Archdiocese of Caceres.",
    categories: ["Religious Sites"],
    businessHours: ["6:00 AM - 7:00 PM Daily"],
    admissionFee: "Free",
    profilePicture: null,
  },
  {
    id: 4,
    name: "Museo ni Jesse Robredo",
    address: "Rizal St, Naga, Camarines Sur",
    description: "Museum dedicated to the late Jesse Robredo.",
    categories: ["Historical", "Museum"],
    businessHours: ["9:00 AM - 5:00 PM (Tue-Sun)"],
    admissionFee: "Free",
    profilePicture: null,
  },
  {
    id: 5,
    name: "Plaza Rizal",
    address: "General Luna St, Naga, Camarines Sur",
    description: "A central urban plaza.",
    categories: ["Urban Attractions", "Historical"],
    businessHours: ["Always Open"],
    admissionFee: "Free",
    profilePicture: null,
  },
  {
    id: 6,
    name: "Mount Isarog National Park",
    address: "Part of Camarines Sur province",
    description: "A protected area with natural beauty.",
    categories: ["Natural"],
    businessHours: ["Daytime"],
    admissionFee: "Minimal fee may apply",
    profilePicture: null,
  },
  {
    id: 7,
    name: "CWC Watersports Complex",
    address: "Provincial Capitol Complex, Pili, Camarines Sur",
    description: "A popular watersports complex.",
    categories: ["Sports and Recreation"],
    businessHours: ["9:00 AM - 6:00 PM Daily"],
    admissionFee: "Varies based on activity",
    profilePicture: null,
  },
  {
    id: 8,
    name: "Ateneo de Naga University - Arrupe Hall",
    address: "Ateneo Avenue, Bagumbayan Sur, Naga City",
    description: "Event venue within the university.",
    categories: ["Urban Attractions"],
    businessHours: ["Varies based on events"],
    admissionFee: "Varies based on events",
    profilePicture: null,
  },
  {
    id: 9,
    name: "Bicol Medical Center",
    address: "Concepcion Pequeña, Naga City",
    description: "A major hospital in the region.",
    categories: ["Urban Attractions"], // Could be debated, but for example
    businessHours: ["24/7 (Visiting hours may vary)"],
    admissionFee: "N/A",
    profilePicture: null,
  },
  {
    id: 10,
    name: "SM City Naga",
    address: "Roxas Ave, Triangulo, Naga, Camarines Sur",
    description: "A large shopping mall.",
    categories: ["Urban Attractions"],
    businessHours: ["10:00 AM - 9:00 PM Daily"],
    admissionFee: "Free",
    profilePicture: null,
  },
  {
    id: 11,
    name: "Magsaysay Avenue",
    address: "Naga City",
    description: "A vibrant street with restaurants and nightlife.",
    categories: ["Urban Attractions"],
    businessHours: ["Varies"],
    admissionFee: "Free (for walking around)",
    profilePicture: null,
  },
  {
    id: 12,
    name: "Caramoan Islands",
    address: "Caramoan Peninsula, Camarines Sur",
    description: "Beautiful group of islands (further from Naga but a tourist spot).",
    categories: ["Natural"],
    businessHours: ["Daytime"],
    admissionFee: "Island hopping fees apply",
    profilePicture: null,
  },
];

const ITEMS_PER_PAGE = 10;

function TouristSpot() {

  const navigate = useNavigate();

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
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() =>
                        navigate(`/tourism/TouristSpotModule/TouristSpotDetails/${spot.id}`)
                      }
                    >
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
