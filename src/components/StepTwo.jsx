import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  TextField,
  Typography,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const StepTwo = ({ nextStep, prevStep }) => {
  const { register, handleSubmit } = useForm();
  const [areaUnit, setAreaUnit] = useState("Acre");

  const onSubmit = (data) => nextStep({ ...data, areaUnit });

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Typography sx={{ fontSize: 28, fontWeight: 700, mb: 3, mt: 2 }}>
        Farm Details
      </Typography>

      <TextField
        {...register("farmName")}
        label="Farm Name"
        fullWidth
        InputProps={{ style: { borderRadius: 8, marginBottom: 8 } }}
      />

      <TextField
        {...register("farmId", { required: true })}
        label="Farm ID"
        fullWidth
        InputProps={{ style: { borderRadius: 8, marginBottom: 8 } }}
      />

      <TextField
        {...register("location", { required: true })}
        label="Location"
        placeholder="e.g., 12.3456, 78.9101"
        fullWidth
        InputProps={{ style: { borderRadius: 8, marginBottom: 8 } }}
      />

      <TextField
        {...register("village", { required: true })}
        label="Village Name"
        fullWidth
        InputProps={{ style: { borderRadius: 8, marginBottom: 8 } }}
      />

      <Box display="flex" alignItems="center" gap={2}>
        <TextField
          {...register("totalArea", { required: true })}
          label="Total Area"
          type="number"
          fullWidth
          InputProps={{ style: { borderRadius: 8 } }}
        />

        <FormControl component="fieldset">
          <RadioGroup
            row
            value={areaUnit}
            onChange={(e) => setAreaUnit(e.target.value)}
          >
            <FormControlLabel value="Acre" control={<Radio />} label="Acre" />
            <FormControlLabel
              value="Hectare"
              control={<Radio />}
              label="Hectare"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <FormControl fullWidth>
        <InputLabel>Soil Type</InputLabel>
        <Select {...register("soilType", { required: true })} defaultValue="">
          <MenuItem value="Sandy">Sandy</MenuItem>
          <MenuItem value="Clay">Clay</MenuItem>
          <MenuItem value="Silty">Silty</MenuItem>
          <MenuItem value="Peaty">Peaty</MenuItem>
          <MenuItem value="Loamy">Loamy</MenuItem>
        </Select>
      </FormControl>

      <Box display="flex" justifyContent="space-between" mt={4} gap={2}>
        {/* Back Button */}
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
          <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#2C3930" }}>
            Back
          </Typography>
        </Button>

        {/* Continue Button */}
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
          <Typography sx={{ fontSize: 16, fontWeight: 600, color: "#ffffff" }}>
            Continue
          </Typography>
        </Button>
      </Box>
    </form>
  );
};

export default StepTwo;
