import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

// const Topbar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const colorMode = useContext(ColorModeContext);

//   return (
//     <Box display="flex" justifyContent="space-between" p={2}>
//       {/* SEARCH BAR */}
//       <Box
//         display="flex"
//         backgroundColor={colors.primary[400]}
//         borderRadius="3px"
//       >
//         <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
//         <IconButton type="button" sx={{ p: 1 }}>
//           <SearchIcon />
//         </IconButton>
//       </Box>

//       {/* ICONS */}
//       <Box display="flex">
//         <IconButton onClick={colorMode.toggleColorMode}>
//           {theme.palette.mode === "dark" ? (
//             <DarkModeOutlinedIcon />
//           ) : (
//             <LightModeOutlinedIcon />
//           )}
//         </IconButton>
//         <IconButton>
//           <NotificationsOutlinedIcon />
//         </IconButton>
//         <IconButton>
//           <SettingsOutlinedIcon />
//         </IconButton>
//         <IconButton>
//           <PersonOutlinedIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };

// export default Topbar;


//try 1

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2} bgcolor={colors.primary[400]}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        alignItems="center"
        bgcolor={theme.palette.mode === "light" ? colors.grey[200] : colors.grey[800]}
        borderRadius="20px"
        px={2}
        py={0.5}
        width="250px"
      >
        <InputBase sx={{ flex: 1, color: "black" }} placeholder="Search..." />
        <IconButton>
          <SearchIcon sx={{ color: colors.grey[100] }} />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex" alignItems="center" gap={1.5}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "light" ? (
            <LightModeOutlinedIcon sx={{ color: colors.grey[100] }} />
          ) : (
            <DarkModeOutlinedIcon sx={{ color: colors.grey[100] }} />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon sx={{ color: colors.grey[100] }} />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon sx={{ color: colors.grey[100] }} />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon sx={{ color: colors.grey[100] }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;