import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const ComposeModal = ({ isOpen, onClose }) => {
  const [to, setTo] = useState("");
  const [cc, setCC] = useState("");
  const [bcc, setBCC] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState([]);

  const handleSend = () => {
    onClose();
  };

  const handleAttachment = (e) => {
    const files = e.target.files;
    // Update attachments array with new files
    setAttachments([...attachments, ...files]);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 999999,
      }}
    >
      <DialogTitle>
        <div style={{ display: "flex", alignItems: "center" }}>
          Compose Mail
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
            style={{ marginLeft: "auto" }}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <TextField
          label="To"
          fullWidth
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <TextField
          label="CC"
          fullWidth
          value={cc}
          onChange={(e) => setCC(e.target.value)}
        />
        <TextField
          label="BCC"
          fullWidth
          value={bcc}
          onChange={(e) => setBCC(e.target.value)}
        />
        <TextField
          label="Subject"
          fullWidth
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          label="Message"
          multiline
          rows={6}
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="file"
          id="attachments"
          multiple
          onChange={handleAttachment}
          style={{ display: "none" }}
        />
        <label htmlFor="attachments" style={{ marginTop: "16px" }}>
          <Button
            variant="outlined"
            component="span"
            startIcon={<AttachFileIcon />}
          >
            Attach files
          </Button>
        </label>
        {attachments.map((file, index) => (
          <div key={index} style={{ marginTop: "8px" }}>
            {file.name}
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleSend}
          variant="contained"
          color="primary"
          // startIcon={<SendIcon />}
        >
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ComposeModal;
