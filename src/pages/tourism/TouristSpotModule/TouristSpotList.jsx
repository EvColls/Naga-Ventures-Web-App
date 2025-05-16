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
  "Historical Landmark",
  "Natural",
  "Religious Site",
  "Museum",
  "Urban Attractions",
  "Sports and Recreation",
];

const data = [
  {
    id: 1,
    name: "The Porta Mariae",
    address: "Barlin St., Naga City, Camarines Sur, Philippines",
    description:
      "The Porta Mariae is a historic arch built to commemorate the 300th anniversary of the devotion to Our Lady of Peñafrancia. A symbol of faith and architectural beauty, it stands beside the Naga Metropolitan Cathedral.",
    categories: ["Historical Landmark", "Religious Site", "Architecture"],
    businessHours: ["Monday to Sunday: Open 24 hours"],
    admissionFee: "Free",
    profilePicture: null,
    stats: {
      rating: 4.8,
      views: 356,
      clicks: 1823,
      reviews: 26,
    },
  },
  {
    id: 2,
    name: "Ateneo de Naga University",
    address: "Ateneo Avenue, Bagumbayan Sur, Naga City, Camarines Sur",
    description:
      "A prestigious university in Bicol Region known for its academic excellence.",
    categories: ["Historical Landmark", "Education"],
    businessHours: ["Monday to Friday: 8am - 5pm"],
    admissionFee: "Free",
    profilePicture: null,
    stats: {
      rating: 4.6,
      views: 420,
      clicks: 2100,
      reviews: 45,
    },
  },
  {
    id: 3,
    name: "Naga Metropolitan Cathedral",
    address: "Peñafrancia Avenue, Naga City, Camarines Sur",
    description:
      "The main cathedral of the Archdiocese of Caceres, a historic religious site.",
    categories: ["Religious Site", "Historical Landmark"],
    businessHours: ["Daily: 6am - 7pm"],
    admissionFee: "Free",
    profilePicture: null,
    stats: {
      rating: 4.7,
      views: 390,
      clicks: 1850,
      reviews: 32,
    },
  },
  {
    id: 4,
    name: "Museo ni Jesse Robredo",
    address: "Rizal St, Naga City, Camarines Sur",
    description:
      "Museum dedicated to the late Jesse Robredo showcasing local heritage.",
    categories: ["Historical Landmark", "Museum"],
    businessHours: ["Tuesday to Sunday: 9am - 5pm"],
    admissionFee: "Free",
    profilePicture: null,
    stats: {
      rating: 4.5,
      views: 300,
      clicks: 1700,
      reviews: 25,
    },
  },
  {
    id: 5,
    name: "Mount Isarog National Park",
    address: "Camarines Sur Province",
    description:
      "A protected area known for its biodiversity and hiking trails.",
    categories: ["Natural"],
    businessHours: ["Daytime only"],
    admissionFee: "Minimal fee may apply",
    profilePicture: null,
    stats: {
      rating: 4.9,
      views: 500,
      clicks: 2500,
      reviews: 55,
    },
  },
  {
    id: 6,
    name: "CWC Watersports Complex",
    address: "Provincial Capitol Complex, Pili, Camarines Sur",
    description: "A popular watersports complex.",
    categories: ["Sports and Recreation"],
    businessHours: ["9:00 AM - 6:00 PM Daily"],
    admissionFee: "Varies based on activity",
    profilePicture: null,
    stats: {
      rating: 4.4,
      views: 220,
      clicks: 950,
      reviews: 19,
    },
  },
  {
    id: 7,
    name: "Plaza Rizal",
    address: "General Luna St, Naga, Camarines Sur",
    description: "A central urban plaza.",
    categories: ["Urban Attractions", "Historical Landmark"],
    businessHours: ["Always Open"],
    admissionFee: "Free",
    profilePicture: null,
    stats: {
      rating: 4.3,
      views: 310,
      clicks: 1200,
      reviews: 27,
    },
  },
  {
    id: 8,
    name: "Caramoan Islands",
    address: "Caramoan Peninsula, Camarines Sur",
    description:
      "Beautiful group of islands known for stunning beaches and island hopping.",
    categories: ["Natural"],
    businessHours: ["Daytime"],
    admissionFee: "Island hopping fees apply",
    profilePicture: null,
    stats: {
      rating: 4.9,
      views: 780,
      clicks: 3000,
      reviews: 70,
    },
  },
  {
    id: 9,
    name: "SM City Naga",
    address: "Roxas Ave, Triangulo, Naga, Camarines Sur",
    description: "A large shopping mall.",
    categories: ["Urban Attractions"],
    businessHours: ["10:00 AM - 9:00 PM Daily"],
    admissionFee: "Free",
    profilePicture: null,
    stats: {
      rating: 4.1,
      views: 510,
      clicks: 2600,
      reviews: 40,
    },
  },
  {
    id: 10,
    name: "Bicol Medical Center",
    address: "Concepcion Pequeña, Naga City",
    description: "A major hospital in the region.",
    categories: ["Urban Attractions"],
    businessHours: ["24/7 (Visiting hours may vary)"],
    admissionFee: "N/A",
    profilePicture: null,
    stats: {
      rating: 4.0,
      views: 400,
      clicks: 1800,
      reviews: 30,
    },
  },
  {
    id: 11,
    name: "Ateneo de Naga University - Arrupe Hall",
    address: "Ateneo Avenue, Bagumbayan Sur, Naga City",
    description: "Event venue within the university.",
    categories: ["Urban Attractions"],
    businessHours: ["Varies based on events"],
    admissionFee: "Varies based on events",
    profilePicture: null,
    stats: {
      rating: 4.2,
      views: 280,
      clicks: 1100,
      reviews: 22,
    },
  },
  {
    id: 12,
    name: "Magsaysay Avenue",
    address: "Naga City",
    description: "A vibrant street with restaurants and nightlife.",
    categories: ["Urban Attractions"],
    businessHours: ["Varies"],
    admissionFee: "Free (for walking around)",
    profilePicture: null,
    stats: {
      rating: 4.3,
      views: 360,
      clicks: 1300,
      reviews: 28,
    },
  },
  {
    id: 13,
    name: "The Basilica Minore",
    address: "Balatas Road, Naga City, Camarines Sur",
    description:
      "A historic religious site and important pilgrimage destination.",
    categories: ["Religious Site", "Historical Landmark"],
    businessHours: ["Daily: 5:00 AM - 8:00 PM"],
    admissionFee: "Free",
    profilePicture: null,
    stats: {
      rating: 4.7,
      views: 460,
      clicks: 2200,
      reviews: 38,
    },
  },
];

const ITEMS_PER_PAGE = 12;

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
                        navigate(
                          `/tourism/TouristSpotModule/TouristSpotDetails/${spot.id}`
                        )
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
