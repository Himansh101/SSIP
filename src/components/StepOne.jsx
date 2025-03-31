import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Typography, Box } from "@mui/material";

const StepOne = ({ nextStep }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => nextStep(data);
  const [isMale, setIsMale] = useState(true);

  const toggleGender = () => setIsMale((prev) => !prev);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Typography sx={{ fontSize: 28, fontWeight: 700, mb: 3,mt:2 }}>Personal Details</Typography>
      
      {['FullName', 'Contact', 'Address'].map((label) => (
        <TextField
          key={label}
          {...register(label)}
          required
          fullWidth
          label={label}
          variant="outlined"
          margin="normal"
          InputProps={{ style: { borderRadius: 8 } }}
          InputLabelProps={{ style: { color: "#555", fontWeight: 500 } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#ccc' },
              '&:hover fieldset': { borderColor: '#3F4F44' },
              '&.Mui-focused fieldset': { borderColor: '#2C3930', borderWidth: '2px' },
            },
          }}
        />
      ))}

      <Box display="flex" alignItems="center" gap={2} mt={2}>
        <Typography sx={{color:"#777"}} >Male</Typography>
        <Box
          onClick={toggleGender}
          sx={{
            position: 'relative',
            width: 48,
            height: 24,
            borderRadius: 12,
            backgroundColor: isMale ? '#007BFF' : '#FF69B4',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: 24,
              height: 24,
              borderRadius: '50%',
              backgroundColor: '#FFF',
              transform: isMale ? 'translateX(0)' : 'translateX(24px)',
              transition: 'transform 0.3s',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          />
        </Box>
        <Typography sx={{color:"#777"}} >Female</Typography>
      </Box>

      <Button 
        type="submit" 
        variant="contained" 
        sx={{ mt: 3, width: '100%', backgroundColor: '#2C3930', borderRadius: 8 }}
      >
        <Typography sx={{ fontSize: 18, fontWeight: 800 }}>Continue</Typography>
      </Button>
    </form>
  );
};

export default StepOne;
