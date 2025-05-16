import React, { useState } from "react";
import Header from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import { Box, Pagination } from "@mui/material";
import TouristSpotTable from "./TouristSpotTable";
import CategoryFilter from "./CategoryFilter";
import AddSpotDialog from "./AddSpotDialog";
import SearchBar from "./SearchBar";
import { data } from "./touristSpotData"; // Move your data to a separate file

const ITEMS_PER_PAGE = 12;

function TouristSpot() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
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
  const paginatedData = filteredData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

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
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
          onAddClick={() => setOpenDialog(true)}
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => {
            setSelectedCategory(cat);
            setPage(1);
          }}
        />

        <TouristSpotTable
          data={paginatedData}
          onViewDetails={(id) =>
            navigate(`/tourism/TouristSpotModule/TouristSpotDetails/${id}`)
          }
          getDisplayCategory={getDisplayCategory}
        />

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

        <AddSpotDialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          newSpot={newSpot}
          onInputChange={handleInputChange}
          onCategoryChange={handleCategoryChange}
          onAddBusinessHour={handleAddBusinessHour}
          onBusinessHourChange={handleBusinessHourChange}
          onImageChange={handleImageChange}
          onAddSpot={handleAddSpot}
        />
      </Box>
    </>
  );
}

export default TouristSpot;