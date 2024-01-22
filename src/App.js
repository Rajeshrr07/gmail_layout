import React, { useState } from "react";
import Header from "../src/Components/Header";
import Sidebar from "../src/Components/Sidebar";
import EmailList from "../src/Components/EmailList";
import EmailContent from "../src/Components/EmailContent";
import ComposeModal from "../src/Components/ComposeModal";
import { emails } from "../src/Components/Emails";
import { IconButton, Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./App.css";
import RightSidebar from "./Components/RightSidebar";

function App() {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [composeModalOpen, setComposeModalOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [siderBar, setSiderBar] = useState(false);

  const handleEmailSelect = (email) => {
    setSelectedEmail(email);
    setOpenModal(true);
  };

  const handleComposeModalOpen = () => {
    setComposeModalOpen(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const toggleSidebarWidth = () => {
    setSiderBar(!siderBar);
  };

  return (
    <div className="app">
      <Header onMenuClick={toggleSidebarWidth} />
      <div className="app-content">
        <Sidebar
          onComposeClick={handleComposeModalOpen}
          sidebarWidth={siderBar}
        />
        <div className="app-main">
          <EmailList emails={emails} onEmailClick={handleEmailSelect} />
          {selectedEmail && (
            <Modal
              style={{ zIndex: 999999 }}
              open={openModal}
              onClose={handleCloseModal}
              className="custom-modal"
            >
              <Box className="modal-container">
                <EmailContent
                  onClose={handleCloseModal}
                  email={selectedEmail}
                />
              </Box>
            </Modal>
          )}
          {composeModalOpen && (
            <ComposeModal
              isOpen={composeModalOpen}
              onClose={() => setComposeModalOpen(false)}
            />
          )}
          <RightSidebar onComposeClick={handleComposeModalOpen} />
        </div>
      </div>
    </div>
  );
}

export default App;
