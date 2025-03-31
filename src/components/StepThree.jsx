import React, { useState } from "react";
import { Button, TextField, Typography, Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const StepThree = ({ nextStep, prevStep, formData }) => {
  const [irrigationType, setIrrigationType] = useState("");
  const [irrigationMethod, setIrrigationMethod] = useState("");
  const [plotSize, setPlotSize] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const plotData = {
      ...formData,
      irrigationType,
      irrigationMethod,
      plotSize,
    };
    nextStep(plotData);
  };
  

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Typography sx={{ fontSize: 28, fontWeight: 700, mb: 3, mt: 2 }}>Plot Details</Typography>

      {/* Plot Name (Plot ID) */}
      <TextField
        label="Plot Name"
        value={formData?.farmId || ""}
        fullWidth
        margin="normal"
        InputProps={{ style: { borderRadius: 8 } }}
        disabled
      />

      {/* Plot Size */}
      <TextField
        label="Plot Size"
        type="number"
        fullWidth
        margin="normal"
        value={plotSize}
        onChange={(e) => setPlotSize(e.target.value)}
        InputProps={{ style: { borderRadius: 8 } }}
        required
      />

      {/* Irrigation Type Dropdown */}
      <FormControl fullWidth margin="normal" required>
        <InputLabel>Irrigation Type</InputLabel>
        <Select
          value={irrigationType}
          onChange={(e) => setIrrigationType(e.target.value)}
        >
          <MenuItem value="Drip">Drip</MenuItem>
          <MenuItem value="Sprinkler">Sprinkler</MenuItem>
          <MenuItem value="Flood">Flood</MenuItem>
        </Select>
      </FormControl>

      {/* Irrigation Method Dropdown */}
      <FormControl fullWidth margin="normal" required>
        <InputLabel>Irrigation Method</InputLabel>
        <Select
          value={irrigationMethod}
          onChange={(e) => setIrrigationMethod(e.target.value)}
        >
          <MenuItem value="Manual">Manual</MenuItem>
          <MenuItem value="Automatic">Automatic</MenuItem>
        </Select>
      </FormControl>

      {/* Navigation Buttons */}
      <Box display="flex" justifyContent="space-between" mt={4} gap={2}>
        <Button
          onClick={prevStep}
          variant="outlined"
          sx={{
            flex: 0.24,
            borderRadius: 8,
            padding: "12px 24px",
            borderColor: "#2C3930",
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
        >
          <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#2C3930" }}>Back</Typography>
        </Button>

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#2C3930",
            flex: 0.74,
            borderRadius: 8,
            padding: "12px 24px",
            "&:hover": { backgroundColor: "#1f2925" },
          }}
        >
          <Typography sx={{ fontSize: 16, fontWeight: 600, color: "#ffffff" }}>Continue</Typography>
        </Button>
      </Box>
    </form>
  );
};

export default StepThree;