import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../components/Header';
import { Box, Typography, Stack, Chip, Divider, Paper } from '@mui/material';

const dummyData = [
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

function TouristSpotDetails() {
  const { id } = useParams();
  const spotId = parseInt(id);
  const spot = dummyData.find((item) => item.id === spotId);

  if (!spot) {
    return (
      <>
        <Header title="Tourist Spot Details" />
        <Box p={3}>
          <Typography variant="h6" color="error">Tourist spot not found.</Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      <Header title="Tourist Spot Details" />
      <Box p={3}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>{spot.name}</Typography>
          <Typography variant="body1" gutterBottom color="text.secondary">
            {spot.address}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle1" fontWeight="bold">Description</Typography>
          <Typography variant="body2" paragraph>{spot.description}</Typography>

          <Typography variant="subtitle1" fontWeight="bold" mt={2}>Categories</Typography>
          <Stack direction="row" spacing={1} mt={1} mb={2}>
            {spot.categories.map((cat, index) => (
              <Chip key={index} label={cat} color="primary" />
            ))}
          </Stack>

          <Typography variant="subtitle1" fontWeight="bold">Business Hours</Typography>
          <ul>
            {spot.businessHours.map((hour, index) => (
              <li key={index}>{hour}</li>
            ))}
          </ul>

          <Typography variant="subtitle1" fontWeight="bold" mt={2}>Admission Fee</Typography>
          <Typography variant="body2">{spot.admissionFee || "Free / None"}</Typography>
        </Paper>
      </Box>
    </>
  );
}

export default TouristSpotDetails;
