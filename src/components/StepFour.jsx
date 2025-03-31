import React from "react";
import { Button, TextField, Typography, Box, FormControl, InputLabel, Select, MenuItem, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const StepFour = ({ prevStep, formData }) => {
  const { register, handleSubmit, control } = useForm();
  const navigate=useNavigate()

  const onSubmit = (data) => {
    const finalData = { ...formData, ...data };
    console.log("Final Submitted Data:", finalData);
    alert("Form submitted successfully!");
    navigate('/')
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Typography sx={{ fontSize: 28, fontWeight: 700, mb: 3, mt: 2 }}>
        Crop Details
      </Typography>

      {/* Crop Name */}
      <TextField
        {...register("cropName", { required: true })}
        label="Crop Name"
        fullWidth
        InputProps={{ style: { borderRadius: 8, marginBottom: 8 } }}
      />

      {/* Crop Type Dropdown */}
      <FormControl fullWidth sx={{mb:2}}  >
        <InputLabel>Crop Type</InputLabel>
        <Controller
          name="cropType"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select {...field}>
              <MenuItem value="Grain">Grain</MenuItem>
              <MenuItem value="Fruit">Fruit</MenuItem>
              <MenuItem value="Vegetable">Vegetable</MenuItem>
            </Select>
          )}
        />
      </FormControl>

      {/* Crop Variety Dropdown */}
      <FormControl fullWidth sx={{mb:2}} >
        <InputLabel>Crop Variety</InputLabel>
        <Controller
          name="cropVariety"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select {...field}>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
              <MenuItem value="Organic">Organic</MenuItem>
              <MenuItem value="GMO">GMO</MenuItem>
            </Select>
          )}
        />
      </FormControl>

      {/* Season Selection (Radio Buttons) */}
      <FormControl component="fieldset" sx={{mb:2}} >
        <Typography sx={{ fontWeight: 500, mb: 1 }}>Season</Typography>
        <Controller
          name="season"
          control={control}
          defaultValue="Summer"
          render={({ field }) => (
            <RadioGroup {...field} row>
              <FormControlLabel value="Summer" control={<Radio />} label="Summer" />
              <FormControlLabel value="Winter" control={<Radio />} label="Winter" />
              <FormControlLabel value="Monsoon" control={<Radio />} label="Monsoon" />
            </RadioGroup>
          )}
        />
      </FormControl>

      {/* Crop Duration (Date) */}
      <TextField sx={{mb:2}}
        {...register("cropDuration", { required: true })}
        label="Crop Duration"
        type="date"
        InputLabelProps={{ shrink: true }}
        fullWidth
        InputProps={{ style: { borderRadius: 8, marginBottom: 8 } }}
      />

      {/* Planting Date */}
      <TextField sx={{mb:2}}
        {...register("plantingDate", { required: true })}
        label="Planting Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        fullWidth
        InputProps={{ style: { borderRadius: 8, marginBottom: 8 } }}
      />

      <Box display="flex" justifyContent="space-between" mt={2} gap={2}>
        {/* Back Button */}
        <Button
          onClick={prevStep}
          variant="outlined"
          sx={{
            flex: 0.24,
            borderRadius: 8,
            padding: "12px 24px",
            borderColor: "#2C3930",
            '&:hover': { backgroundColor: '#f5f5f5' }
          }}
        >
          <Typography sx={{ fontSize: 16, fontWeight: 500, color: '#2C3930' }}>
            Back
          </Typography>
        </Button>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#2C3930",
            flex: 0.74,
            borderRadius: 8,
            padding: "12px 24px",
            '&:hover': { backgroundColor: '#1f2925' }
          }}
        >
          <Typography sx={{ fontSize: 16, fontWeight: 600, color: '#ffffff' }}>
            Submit
          </Typography>
        </Button>
      </Box>
    </form>
  );
};

export default StepFour;