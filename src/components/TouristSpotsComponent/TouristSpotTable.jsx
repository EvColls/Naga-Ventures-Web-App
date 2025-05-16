import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Button,
} from "@mui/material";

const TouristSpotTable = ({ data, onViewDetails, getDisplayCategory }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#002c5f" }}>
            <TableCell sx={{ color: "white", width: "5%" }}>ID</TableCell>
            <TableCell sx={{ color: "white", width: "20%" }}>Name</TableCell>
            <TableCell sx={{ color: "white", width: "45%" }}>Address</TableCell>
            <TableCell sx={{ color: "white", width: "15%" }}>Category</TableCell>
            <TableCell sx={{ color: "white", width: "15%" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((spot) => (
            <TableRow key={spot.id}>
              <TableCell>{spot.id}</TableCell>
              <TableCell>{spot.name}</TableCell>
              <TableCell>{spot.address}</TableCell>
              <TableCell>{getDisplayCategory(spot)}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => onViewDetails(spot.id)}
                >
                  View Full Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TouristSpotTable;