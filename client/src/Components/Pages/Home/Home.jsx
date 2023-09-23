// import * as React from "react";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import Button from "@mui/material/Button";
// import BackgroundImage from "../../Image/you.jpg";
// import { useState } from "react";
// import Service from "../Service/Service";
// import { useNavigate,Link } from "react-router-dom";

// const containerStyle = {
//   backgroundColor: "white",
//   minHeight: "100vh",
//   padding: "20px",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   width: "100%",
// };

// const ButtonStyle = {
//   backgroundColor: "white",
//   color: "#ff9000",
//   marginTop: "30px",
//   height: "40px",
// };

// const textStyle = {
//   textAlign: "center",
//   fontSize: "24px",
//   fontWeight: "bold",
// };

// const BoxStyle1 = {
//   backgroundColor: "#ff9000",
//   display: "inline-block",
//   maxWidth: "auto",
//   borderRadius: "10px",
// };

// const BoxStyle2 = {
//   backgroundColor: "#ff9000",
//   display: "inline-block",
//   maxWidth: "auto",
//   borderRadius: "10px",
// };

// const BoxStyle3 = {
//   backgroundColor: "#ff9000",
//   marginRight: "30px",
//   display: "inline-block",
//   maxWidth: "auto",
//   borderRadius: "10px",
// };

// export default function BasicSelect() {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [inputValue, setInputValue] = useState({
//     username: "",
//     to: "",
//     from: "",
//     time: "",
//   }); // Added inputValue state
//   const [missingFields, setMissingFields] = useState([]);
//   const [time, setTime] = useState("");

//   const Navigator = useNavigate();


//   const handleChange = (event) => {
//     setFrom(event.target.value);
//   };
//   const handelSecondChange = (event) => {
//     setTo(event.target.value);
//   };
//   const inputTime = (e) => {
//     setTime(e.target.value);
//   };

//   const handleSubmit = () => {
//     setInputValue({
//       username: "",
//       to: to,
//       from: from,
//       time: time,
//     });
//     Navigator("/ride")
//     // history.push('/rider');
//   };

//   return (
//     <div style={containerStyle}>
//       <div
//         style={{
//           width: "800px",
//           height: "250px",
//           overflow: "hidden",
//           objectFit: "cover",
//         }}
//       >
//         <img src={BackgroundImage} alt="Background" />
//       </div>
//       <h1 style={textStyle}>
//         <span style={{ color: "#ff9000" }}>#Book your</span>
//         <span style={{ color: "#ff9000" }}> own ride</span>
//       </h1>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <Box sx={{ minWidth: 180, borderradius: 50 }}>
//           <FormControl fullWidth style={BoxStyle1}>
//             <InputLabel
//               id="from-select-label"
//               style={{ color: "black", fontWeight: "700px" }}
//             >
//               From
//             </InputLabel>
//             <Select
//               labelId="from-select-label"
//               id="from-select"
//               value={from}
//               onChange={handleChange}
//               style={{ width: "100%", fontSize: "15px" }}
//             >
//               <MenuItem value={"Amity"}>Amity</MenuItem>
//               <MenuItem value={"Panvel Station"}>Panvel Station</MenuItem>

//               <MenuItem value={"India Bulls"}>India Bulls</MenuItem>
//               <MenuItem value={"Ajivali"}>Ajivali</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>
//         <div
//           style={{
//             backgroundColor: "white",
//             marginTop: "25px",
//             height: "2px",
//             width: "170px",
//           }}
//         />

//         <Box sx={{ minWidth: 180, borderradius: 10 }}>
//           <FormControl fullWidth style={BoxStyle2}>
//             <InputLabel id="to-select-label">To</InputLabel>
//             <Select
//               labelId="to-select-label"
//               id="to-select"
//               value={to}
//               onChange={handelSecondChange}
//               style={{ width: "100%", fontSize: "14px" }}
//             >
//               <MenuItem value={"Amity"}>Amity</MenuItem>
//               <MenuItem value={"Panvel Station"}>Panvel Station</MenuItem>
//               <MenuItem value={"India Bulls"}>India Bulls</MenuItem>
//               <MenuItem value={"Ajivali"}>Ajivali</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>
//         <div
//           style={{
//             backgroundColor: "white",
//             marginTop: "25px",
//             height: "2px",
//             width: "170px",
//           }}
//         />
//         <Box sx={{ minWidth: 180, borderradius: 10 }} style={BoxStyle3}>
//           <input
//             type="text"
//             placeholder="Enter Time"
//             value={time}
//             name="time"
//             onChange={inputTime}
//             style={{
//               width: "98%",
//               height: "91%",
//               margin: "2.5px",
//               borderRadius: "10px",
//               border: "none",
//               backgroundColor: "#ff9000",
//               textAlign: "center",
//               color: "black",
//             }}
//           />
//         </Box>
//       </div>
//       <Button variant="contained" style={ButtonStyle} onClick={handleSubmit}>
//         Request
//       </Button>

//       <Link to="/ride">
//         <Button variant="contained" style={ButtonStyle}>
//           Check for Ride
//         </Button>
//       </Link>
//       {missingFields.length > 0 && (
//         <p style={{ color: "red", marginTop: "10px" }}>
//           Please fill in the following fields: {missingFields.join(", ")}
//         </p>
//       )}

//       <Service />
//     </div>
//   );
// }
import * as React from "react";
import Box from "@mui/material/Box";
import BackgroundImage from "../../Image/you.jpg";
import Service from "../Service/Service";
import { Link } from "react-router-dom";

const containerStyle = {
  backgroundColor: "white",
  minHeight: "100vh",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};

const textStyle = {
  textAlign: "center",
  fontSize: "24px",
  fontWeight: "bold",
};

const buttonStyle = {
  backgroundColor: "grey",
  color: "blue",
  padding: "10px 20px", // Added padding
  borderRadius: "5px", // Added border radius
  transition: "background-color 0.3s ease", // Added transition for hover effect
};

const buttonHoverStyle = {
  backgroundColor: "blue", // Change background color on hover
  color: "white", // Change text color on hover
};

export default function BasicSelect() {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          width: "800px",
          height: "250px",
          overflow: "hidden",
          objectFit: "cover",
        }}
      >
        <img src={BackgroundImage} alt="Background" />
      </div>
      <h1 style={textStyle}>
        <span style={{ color: "#ff9000" }}>#Book your</span>
        <span style={{ color: "#ff9000" }}> own ride</span>
      </h1>

      <Link to="/ride">
        <button
          style={{
            ...buttonStyle,
            ...(isHovered && buttonHoverStyle), // Apply hover styles
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Check for Ride
        </button>
      </Link>

      <Service />
    </div>
  );
}
