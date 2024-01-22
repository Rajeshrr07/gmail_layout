import React from "react";
import Typography from "@mui/material/Typography";
import { Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { emails } from "../Components/Emails";

const EmailContent = ({ email, onClose }) => {
  return (
    <div>
      <Typography variant="h6" component="div">
        {email.from}
      </Typography>
      <Typography variant="body2" component="div">
        {email.subject}
      </Typography>
      <Typography variant="body1" component="div">
        {email.body}
      </Typography>
      <IconButton
        onClick={onClose}
        style={{ right: 0, position: "absolute", top: 0 }}
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
};

export default EmailContent;
