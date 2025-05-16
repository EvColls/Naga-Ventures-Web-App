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
    profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Porta_mariae.jpg/500px-Porta_mariae.jpg",
    stats: {
      rating: 4.8,
      views: 356,
      clicks: 1823,
      reviews: 26,
    },
  },
];

function TouristSpotDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const spot = dummyData.find((item) => item.id === parseInt(id));
  
  const defaultImagePath = "https://via.placeholder.com/500x300?text=No+Image+Available";

  if (!spot) {
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
          onClick={() => navigate("/tourism/TouristSpotModule/TouristSpotList")}
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
                src={spot.profilePicture || defaultImagePath}
                alt={spot.name}
                style={{ 
                  width: "100%", 
                  height: 300, 
                  objectFit: "cover",
                  backgroundColor: "#f5f5f5"
                }}
                onError={(e) => {
                  e.target.src = defaultImagePath;
                }}
              />
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {spot.name}
                </Typography>
                {spot.stats && (
                  <Typography variant="body2" color="text.secondary">
                    ⭐ {spot.stats.rating} Average Rating — {spot.stats.reviews}{" "}
                    Reviews
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
