import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddSpotDialog = ({
  open,
  onClose,
  newSpot,
  onInputChange,
  onCategoryChange,
  onAddBusinessHour,
  onBusinessHourChange,
  onImageChange,
  onAddSpot,
}) => {
  const categories = [
    "Historical Landmark",
    "Natural",
    "Religious Site",
    "Museum",
    "Urban Attractions",
    "Sports and Recreation",
  ];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Add Tourist Spot</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={2} mt={1}>
          <input
            label="Picture"
            accept="image/*"
            type="file"
            onChange={onImageChange}
          />
          <TextField
            label="Name"
            name="name"
            value={newSpot.name}
            onChange={onInputChange}
            fullWidth
          />
          <TextField
            label="Address"
            name="address"
            value={newSpot.address}
            onChange={onInputChange}
            fullWidth
          />
          <TextField
            label="Description"
            name="description"
            value={newSpot.description}
            onChange={onInputChange}
            multiline
            rows={3}
            fullWidth
          />

          <FormControl fullWidth>
            <InputLabel>Categories</InputLabel>
            <Select
              multiple
              value={newSpot.categories}
              onChange={onCategoryChange}
              input={<OutlinedInput label="Categories" />}
              renderValue={(selected) => selected.join(", ")}
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  <Checkbox checked={newSpot.categories.indexOf(cat) > -1} />
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
              onChange={onInputChange}
              fullWidth
            />
          </Stack>

          {newSpot.businessHours.map((hour, index) => (
            <TextField
              key={index}
              label={`Business Hour ${index + 1}`}
              value={hour}
              onChange={(e) => onBusinessHourChange(index, e.target.value)}
              fullWidth
            />
          ))}
          <Button
            onClick={onAddBusinessHour}
            startIcon={<AddIcon />}
            variant="outlined"
          >
            Add Business Hour
          </Button>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onAddSpot} variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddSpotDialog;