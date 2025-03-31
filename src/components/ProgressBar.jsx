import React from "react";
import { LinearProgress, Typography, Box } from "@mui/material";

const ProgressBar = ({ step }) => {
  const progress = (step / 4) * 100;

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress
        variant="determinate"
        sx={{
          backgroundColor: "#283618",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#80ed99", // Progress bar color
          },
        }}
        value={progress}
      />
    </Box>
  );
};

export default ProgressBar;
