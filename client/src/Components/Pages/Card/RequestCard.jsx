// import { Box, Typography, styled } from "@mui/material";
// import "../../../index.css";
// const RequestBox = styled(Box)`
//   border: 1px solid #000;
//   padding: 20px;
//   margin-top: 20px;
//   width: 90%;
//   text-align: center;
//   background-color: #fff; /* White background for the request details box */
// `;

// const RequestCard = (props) => {
//   const { form } = props;

//   return (
//     <RequestBox>
//       <Typography variant="h6" style={{ color: "#000" }}>
//         Ride Request Details:
//       </Typography>
//       <Typography style={{ color: "#000" }}>From: {form.from}</Typography>
//       <Typography style={{ color: "#000" }}>To: {form.to}</Typography>
//       <Typography style={{ color: "#000" }}>
//         Leaving Time: {form.leaveTime}
//       </Typography>
//       <Typography style={{ color: "#000" }}>
//         CreatedBY: {form.username}
//       </Typography>
//       <Typography style={{ color: "#000" }}>
//         Status: {form.status}
//       </Typography>
//     </RequestBox>
//   );
// };




// export default RequestCard;
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  styled,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from '@mui/icons-material/Done';
import {deletUserBooking} from "../../API/fetchApi.js"

const RequestBox = styled(Box)`
  border: 1px solid #000;
  padding: 20px;
  margin-top: 20px;
  width: 90%;
  text-align: center;
  background-color: #fff; 
`;

const RequestCard = ({ form, viewMode }) => {

    //deleting the request

    const onDelete = async(username)=>{
         const res = await deletUserBooking(username)
        
    }
   const onAccept = ()=>{}




  if (viewMode === "compact") {
    return (
      <Card style={{ marginBottom: "10px" }}>
        <CardContent>
          <Typography variant="body1" style={{ display: "inline-block" }}>
            {form.from} --To--  {form.to}  -- Created By -- {form.username}
          </Typography>
          <IconButton
            aria-label="delete"
            style={{ float: "right" }}
            onClick={() => onAccept(form.id)} // You should pass a unique identifier like form.id for each booking
          >
            <DoneIcon />
          </IconButton>
        </CardContent>
      </Card>
    );
  } else if (viewMode === "detailed") {
    return (
      <RequestBox>
        <IconButton
            aria-label="delete"
            style={{ float: "right" }}
            onClick={() => onDelete(form.username)} // You should pass a unique identifier like form.id for each booking
          >
            <DeleteIcon />
          </IconButton>
        <Typography variant="h6" style={{ color: "#000" }}>
          Ride Request Details:
        </Typography>
        <Typography style={{ color: "#000" }}>From: {form.from}</Typography>
        <Typography style={{ color: "#000" }}>To: {form.to}</Typography>
        <Typography style={{ color: "#000" }}>
          Leaving Time: {form.leaveTime}
        </Typography>
        <Typography style={{ color: "#000" }}>
          CreatedBY: {form.username}
        </Typography>
        <Typography style={{ color: "#000" }}>Status: {form.status === 1 ? "Active" : form.status}</Typography>
      </RequestBox>
    );
  }
};

export default RequestCard;
