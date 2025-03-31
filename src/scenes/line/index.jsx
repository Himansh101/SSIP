// import { Box } from "@mui/material";
// import { useState } from "react";
// import { tokens } from "../../theme";
// import Header from "../../components/Header";
// import LineChart from "../../components/LineChart";
// import Sidebar from "../global/Sidebar";
// import { useTheme } from "@mui/material/styles";
// import Topbar from "../global/Topbar";

// const Line = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//    const [isSidebar, setIsSidebar] = useState(true);

//   //  const textColor = theme.palette.text.primary;
//   // const bgColor = theme.palette.background.default;
//   // const eventBgColor = theme.palette.mode === "light" ? colors.grey[300] : colors.grey[800];
//   return (
//     <Box m="20px">
//       <Header title="Line Chart" subtitle="Simple Line Chart" />
//       <Box height="75vh">
//       {isSidebar && <Sidebar isSidebar={isSidebar} />}
//       <Topbar />
//         <LineChart />
//       </Box>
//     </Box>
//   );
// };

// export default Line;

import { Box } from "@mui/material";
import { useState } from "react";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import Sidebar from "../global/Sidebar";
import { useTheme } from "@mui/material/styles";
import Topbar from "../global/Topbar";

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <Box display="flex">
      {/* Sidebar */}
      {isSidebar && <Sidebar isSidebar={isSidebar} />}

      {/* Main Content */}
      <Box flexGrow={1} display="flex" flexDirection="column">
        {/* Topbar */}
        <Topbar />

        {/* Content Section */}
        <Box m={3}>
          <Header title="Line Chart" subtitle="Simple Line Chart" />
          <Box height="75vh" p={2} bgcolor={colors.primary[400]} borderRadius="8px">
            <LineChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Line;
