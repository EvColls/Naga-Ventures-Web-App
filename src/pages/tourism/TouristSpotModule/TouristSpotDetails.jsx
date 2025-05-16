import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  Chip,
  Paper,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import Header from "../../../components/Header";

const dummyData = [
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
  },  {
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

function TouristSpotDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const spot = dummyData.find((item) => item.id === parseInt(id));

  if (!spot) {
    return (
      <>
        <Header title="Tourist Spot Details" />
        <Box p={3}>
          <Typography variant="h6" color="error">
            Tourist spot not found.
          </Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      <Header title="Tourist Spot Details" />
      <Box p={3}>
        <Button
          variant="outlined"
          onClick={() =>
            navigate("/tourism/TouristSpotModule/TouristSpotList")
          }
          sx={{ mb: 2 }}
        >
          ← Back to List
        </Button>

        <Grid container spacing={3}>
          {/* Stats */}
          {spot.stats &&
            Object.entries(spot.stats).map(([label, value], idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Paper elevation={2} sx={{ p: 2, textAlign: "center" }}>
                  <Typography variant="h6">{value}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {label
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (s) => s.toUpperCase())}
                  </Typography>
                </Paper>
              </Grid>
            ))}

          {/* Image and Title */}
          <Grid item xs={12}>
            <Card>
              <img
                src={spot.profilePicture || "/your-image-path.jpg"}
                alt={spot.name}
                style={{ width: "100%", height: 300, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {spot.name}
                </Typography>
                {spot.stats && (
                  <Typography variant="body2" color="text.secondary">
                    ⭐ {spot.stats.rating} Average Rating — {spot.stats.reviews} Reviews
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Main Details */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6">About the Attraction</Typography>
              <Typography color="text.secondary" mb={2}>
                {spot.description}
              </Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Categories
              </Typography>
              <Stack direction="row" spacing={1} mt={1} mb={2}>
                {spot.categories.map((cat, index) => (
                  <Chip key={index} label={cat} color="primary" />
                ))}
              </Stack>

              <Typography variant="subtitle1" fontWeight="bold">
                Business Hours
              </Typography>
              <Typography variant="body2" mb={2}>
                {spot.businessHours.length > 0
                  ? spot.businessHours.join(", ")
                  : "Not specified"}
              </Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Admission Fee
              </Typography>
              <Typography variant="body2">
                {spot.admissionFee || "Free / None"}
              </Typography>
            </Paper>
          </Grid>

          {/* Additional Info / Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6">Additional Information</Typography>
              <Box mt={2}>
                <img
                  src="/map-placeholder.png"
                  alt="Map"
                  style={{
                    width: "100%",
                    height: 150,
                    objectFit: "cover",
                    borderRadius: 4,
                  }}
                />
              </Box>
              <Typography variant="subtitle1" fontWeight="bold" mt={2}>
                Address
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {spot.address}
              </Typography>

              <Typography variant="subtitle1" fontWeight="bold" mt={2}>
                Contact Number
              </Typography>
              <Typography variant="body2" color="text.secondary">
                -
              </Typography>

              <Typography variant="subtitle1" fontWeight="bold" mt={2}>
                Website
              </Typography>
              <Typography variant="body2" color="text.secondary">
                (Optional)
              </Typography>

              <Typography variant="subtitle1" fontWeight="bold" mt={2}>
                Social Apps
              </Typography>
              <Typography variant="body2" color="text.secondary">
                (Optional)
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default TouristSpotDetails;
