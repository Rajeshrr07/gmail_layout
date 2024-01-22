import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

const Header = ({ onMenuClick }) => {
  const userName = "R";
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // const handleSidebarToggle = () => {
  //   setSidebarOpen(!isSidebarOpen);
  // };

  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          top: 0,
          zIndex: 9999,
          borderBottom: 1,
          borderColor: "divider",
          border: "none",
          padding: "8px",
          backgroundColor: "#F6F8FC",
        }}
      >
        <Toolbar disableGutters justifyContent="space-between">
          <div style={{ display: "flex", alignItems: "center", width: "25%" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={onMenuClick}
              style={{ marginLeft: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <img
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png"
              alt="logo"
              style={{ marginLeft: "20px", width: 109, height: 40 }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", width: "65%" }}>
            <TextField
              size="small"
              placeholder="Search Mail"
              sx={{
                width: 600,
                mr: 2,
                borderRadius: 15,
                backgroundColor: "#eaf1fb",
                border: "none",
                // height: "48px",
                py: 1,
              }}
              InputProps={{
                startAdornment: (
                  <SearchIcon
                    sx={{
                      color: "action.active",
                      marginRight: "10px",
                    }}
                  />
                ),
                endAdornment: (
                  <TuneOutlinedIcon
                    sx={{
                      color: "action.active",
                      borderRadius: 15,
                    }}
                  />
                ),
              }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", width: "15%" }}>
            <IconButton size="medium" sx={{ mr: 1 }}>
              <HelpOutlineOutlinedIcon />
            </IconButton>
            <IconButton size="medium" sx={{ mr: 1 }}>
              <SettingsIcon />
            </IconButton>
            <IconButton size="medium">
              <AppsOutlinedIcon />
            </IconButton>
            <IconButton size="medium">
              <Avatar
                alt="user avatar"
                sx={{ width: "30px", height: "30px", background: "#8D6E63" }}
              >
                {userName.charAt(0)}
              </Avatar>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
