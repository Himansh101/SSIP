// import { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import { formatDate } from "@fullcalendar/core"; 
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import listPlugin from "@fullcalendar/list";
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import Header from "../../components/Header";
// import { tokens } from "../../theme";

// const Calendar = () => {
//   const [isSidebar, setIsSidebar] = useState(true);
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [currentEvents, setCurrentEvents] = useState([]);

//   const handleDateClick = (selected) => {
//     const title = prompt("Please enter a new title for your event");
//     const calendarApi = selected.view.calendar;
//     calendarApi.unselect();

//     if (title) {
//       calendarApi.addEvent({
//         id: `${selected.dateStr}-${title}`,
//         title,
//         start: selected.startStr,
//         end: selected.endStr,
//         allDay: selected.allDay,
//       });
//     }
//   };

//   const handleEventClick = (selected) => {
//     if (
//       window.confirm(
//         `Are you sure you want to delete the event '${selected.event.title}'`
//       )
//     ) {
//       selected.event.remove();
//     }
//   };

//   return (
//     <Box m="20px">
//       <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

//       <Box display="flex" justifyContent="space-between">
//         {/* CALENDAR SIDEBAR */}
//         <Box
//           flex="1 1 20%"
//           backgroundColor={colors.primary[400]}
//           p="15px"
//           borderRadius="4px"
//         >
//           <Typography variant="h5">Events</Typography>
//           <List>
//             {currentEvents.map((event) => (
//               <ListItem
//                 key={event.id}
//                 sx={{
//                   backgroundColor: colors.greenAccent[500],
//                   margin: "10px 0",
//                   borderRadius: "2px",
//                 }}
//               >
//                 <ListItemText
//                   primary={event.title}
//                   secondary={
//                     <Typography>
//                       {formatDate(event.start, {
//                         year: "numeric",
//                         month: "short",
//                         day: "numeric",
//                       })}
//                     </Typography>
//                   }
//                 />
//               </ListItem>
//             ))}
//           </List>
//         </Box>

//         {/* CALENDAR */}
//         <Box flex="1 1 100%" ml="15px">
//           <FullCalendar
//             height="75vh"
//             plugins={[
//               dayGridPlugin,
//               timeGridPlugin,
//               interactionPlugin,
//               listPlugin,
//             ]}
//             headerToolbar={{
//               left: "prev,next today",
//               center: "title",
//               right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
//             }}
//             initialView="dayGridMonth"
//             editable={true}
//             selectable={true}
//             selectMirror={true}
//             dayMaxEvents={true}
//             select={handleDateClick}
//             eventClick={handleEventClick}
//             eventsSet={(events) => setCurrentEvents(events)}
//             initialEvents={[
//               {
//                 id: "12315",
//                 title: "All-day event",
//                 date: "2022-09-14",
//               },
//               {
//                 id: "5123",
//                 title: "Timed event",
//                 date: "2022-09-28",
//               },
//             ]}
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Calendar;


// import { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import { formatDate } from "@fullcalendar/core"; 
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import listPlugin from "@fullcalendar/list";
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import Header from "../../components/Header";
// import { tokens } from "../../theme";
// import Sidebar from "../global/Sidebar";
// import Topbar from "../global/Topbar"; // Import Topbar component

// const Calendar = () => {
//   const [isSidebar, setIsSidebar] = useState(true);
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [currentEvents, setCurrentEvents] = useState([]);

//   const handleDateClick = (selected) => {
//     const title = prompt("Please enter a new title for your event");
//     const calendarApi = selected.view.calendar;
//     calendarApi.unselect();

//     if (title) {
//       calendarApi.addEvent({
//         id: `${selected.dateStr}-${title}`,
//         title,
//         start: selected.startStr,
//         end: selected.endStr,
//         allDay: selected.allDay,
//       });
//     }
//   };

//   const handleEventClick = (selected) => {
//     if (
//       window.confirm(
//         `Are you sure you want to delete the event '${selected.event.title}'`
//       )
//     ) {
//       selected.event.remove();
//     }
//   };

//   return (
//     <Box display="flex">
//       {/* Sidebar */}
//       <Sidebar isSidebar={isSidebar} />

//       <Box flexGrow={1}>
//         {/* Topbar */}
//         <Topbar />

//         {/* Main Content */}
//         <Box m="20px">
//           <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

//           <Box display="flex" justifyContent="space-between">
//             {/* Calendar Sidebar */}
//             <Box
//               flex="1 1 20%"
//               backgroundColor={colors.primary[400]}
//               p="15px"
//               borderRadius="4px"
//             >
//               <Typography variant="h5">Events</Typography>
//               <List>
//                 {currentEvents.map((event) => (
//                   <ListItem
//                     key={event.id}
//                     sx={{
//                       backgroundColor: colors.greenAccent[500],
//                       margin: "10px 0",
//                       borderRadius: "2px",
//                     }}
//                   >
//                     <ListItemText
//                       primary={event.title}
//                       secondary={
//                         <Typography>
//                           {formatDate(event.start, {
//                             year: "numeric",
//                             month: "short",
//                             day: "numeric",
//                           })}
//                         </Typography>
//                       }
//                     />
//                   </ListItem>
//                 ))}
//               </List>
//             </Box>

//             {/* Calendar */}
//             <Box flex="1 1 100%" ml="15px">
//               <FullCalendar
//                 height="75vh"
//                 plugins={[
//                   dayGridPlugin,
//                   timeGridPlugin,
//                   interactionPlugin,
//                   listPlugin,
//                 ]}
//                 headerToolbar={{
//                   left: "prev,next today",
//                   center: "title",
//                   right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
//                 }}
//                 initialView="dayGridMonth"
//                 editable={true}
//                 selectable={true}
//                 selectMirror={true}
//                 dayMaxEvents={true}
//                 select={handleDateClick}
//                 eventClick={handleEventClick}
//                 eventsSet={(events) => setCurrentEvents(events)}
//                 initialEvents={[
//                   {
//                     id: "12315",
//                     title: "All-day event",
//                     date: "2022-09-14",
//                   },
//                   {
//                     id: "5123",
//                     title: "Timed event",
//                     date: "2022-09-28",
//                   },
//                 ]}
//               />
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Calendar;


// import { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import { formatDate } from "@fullcalendar/core"; 
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import listPlugin from "@fullcalendar/list";
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import Header from "../../components/Header";
// import { tokens } from "../../theme";
// // import Sidebar from "../global/Sidebar";
// // import Topbar from "../global/Topbar";

// const Calendar = () => {
//   // const [isSidebar, setIsSidebar] = useState(true);
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [currentEvents, setCurrentEvents] = useState([]);

//   const textColor = theme.palette.mode === "light" ? colors.grey[900] : colors.grey[100];

//   const handleDateClick = (selected) => {
//     const title = prompt("Please enter a new title for your event");
//     const calendarApi = selected.view.calendar;
//     calendarApi.unselect();

//     if (title) {
//       calendarApi.addEvent({
//         id: `${selected.dateStr}-${title}`,
//         title,
//         start: selected.startStr,
//         end: selected.endStr,
//         allDay: selected.allDay,
//       });
//     }
//   };

//   const handleEventClick = (selected) => {
//     if (
//       window.confirm(
//         `Are you sure you want to delete the event '${selected.event.title}'`
//       )
//     ) {
//       selected.event.remove();
//     }
//   };

//   return (
//     <Box display="flex">
//       {/* Sidebar */}
//       {/* <Sidebar isSidebar={isSidebar} /> */}

//       <Box flexGrow={1}>
//         {/* Topbar */}
//         {/* <Topbar /> */}

//         {/* Main Content */}
//         <Box m="20px">
//           <Header color={textColor} title="Calendar" subtitle="Full Calendar Interactive Page" />

//           <Box display="flex" justifyContent="space-between">
//             {/* Calendar Sidebar */}
//             <Box
//               flex="1 1 20%"
//               backgroundColor={colors.primary[400]}
//               color={textColor}
//               p="15px"
//               borderRadius="4px"
//             >
//               <Typography variant="h5" 
//               // sx={{ color: textColor }}
//               >
//                 Events
//               </Typography>
//               <List>
//                 {currentEvents.map((event) => (
//                   <ListItem
//                     key={event.id}
//                     sx={{
//                       backgroundColor: colors.greenAccent[500],
//                       margin: "10px 0",
//                       borderRadius: "2px",
//                     }}
//                   >
//                     <ListItemText
//                       primary={event.title}
//                       primaryTypographyProps={{ sx: { color: textColor } }}
//                       secondary={
//                         <Typography sx={{ color: textColor }}>
//                           {formatDate(event.start, {
//                             year: "numeric",
//                             month: "short",
//                             day: "numeric",
//                           })}
//                         </Typography>
//                       }
//                     />
//                   </ListItem>
//                 ))}
//               </List>
//             </Box>

//             {/* Calendar */}
//             <Box flex="1 1 100%" ml="15px">
//               <FullCalendar
//                 height="75vh"
//                 plugins={[
//                   dayGridPlugin,
//                   timeGridPlugin,
//                   interactionPlugin,
//                   listPlugin,
//                 ]}
//                 headerToolbar={{
//                   left: "prev,next today",
//                   center: "title",
//                   right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
//                 }}
//                 initialView="dayGridMonth"
//                 editable={true}
//                 selectable={true}
//                 selectMirror={true}
//                 dayMaxEvents={true}
//                 select={handleDateClick}
//                 eventClick={handleEventClick}
//                 eventsSet={(events) => setCurrentEvents(events)}
//                 initialEvents={[
//                   {
//                     id: "12315",
//                     title: "All-day event",
//                     date: "2022-09-14",
//                   },
//                   {
//                     id: "5123",
//                     title: "Timed event",
//                     date: "2022-09-28",
//                   },
//                 ]}
//               />
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Calendar;
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core"; 
import dayGridPlugin from "@fullcalendar/daygrid";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const textColor = theme.palette.text.primary;
  const bgColor = theme.palette.background.default;
  const eventBgColor = theme.palette.mode === "light" ? colors.grey[300] : colors.grey[800];

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent = {
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      };
      calendarApi.addEvent(newEvent);
      setCurrentEvents([...currentEvents, newEvent]);
    }
  };

  const handleEventClick = (selected) => {
    if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
      selected.event.remove();
      setCurrentEvents(currentEvents.filter(event => event.id !== selected.event.id));
    }
  };

  return (
    <Box display="flex" bgcolor={bgColor} minHeight="100vh">
      {/* Sidebar (Left) */}
      {isSidebar && <Sidebar isSidebar={isSidebar} />}
  
      {/* Main Content (Right) */}
      <Box flexGrow={1} display="flex" flexDirection="column">
        {/* Topbar (Above Main Content) */}
        <Topbar />
  
        {/* Page Content */}
        <Box p={3}>
          <Header color={textColor} title="Calendar" subtitle="Full Calendar Interactive Page" />
  
          <Box display="flex" gap={3} mt={2}>
            {/* Events Sidebar (Left) */}
            <Box
              flex="1 1 20%"
              bgcolor={eventBgColor}
              p={2}
              borderRadius="8px"
              minHeight="75vh"
            >
              <Typography variant="h5" color={textColor} mb={2}>
                Events
              </Typography>
              <List>
                {currentEvents.map((event) => (
                  <ListItem
                    key={event.id}
                    sx={{
                      bgcolor: colors.greenAccent[500],
                      mb: 1,
                      borderRadius: "4px",
                    }}
                  >
                    <ListItemText
                      primary={event.title}
                      primaryTypographyProps={{ sx: { color: textColor, fontWeight: "bold" } }}
                      secondaryTypographyProps={{ sx: { color: textColor } }}
                      secondary={
                        <Typography variant="body2" sx={{ color: textColor }}>
                          {formatDate(event.start, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
  
            {/* Calendar (Right) */}
            <Box flex="1 1 100%" bgcolor={theme.palette.background.paper} p={2} borderRadius="8px">
              <FullCalendar
                height="75vh"
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                }}
                initialView="dayGridMonth"
                editable
                selectable
                selectMirror
                dayMaxEvents
                select={handleDateClick}
                eventClick={handleEventClick}
                eventsSet={setCurrentEvents}
                initialEvents={[
                  { id: "12315", title: "All-day event", date: "2022-09-14" },
                  { id: "5123", title: "Timed event", date: "2022-09-28" },
                ]}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
  
};

export default Calendar;



