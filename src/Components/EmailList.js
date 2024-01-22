import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InboxIcon from "@mui/icons-material/Inbox";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const EmailList = ({ emails, onEmailClick }) => {
  const CustomTab = ({ label, icon }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginLeft: 13,
      }}
    >
      {React.cloneElement(icon, { fontSize: "small" })}
      <span style={{ fontSize: "0.7rem" }}>{label}</span>
    </div>
  );

  const [activeTab, setActiveTab] = useState(0);
  const [hoveredEmail, setHoveredEmail] = useState(null);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleEmailMouseEnter = (email) => {
    setHoveredEmail(email);
  };

  const handleEmailMouseLeave = () => {
    setHoveredEmail(null);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "15px",
          position: "sticky",
          top: 80,
          borderRadius: "15px",
          backgroundColor: "#fff",
          zIndex: 1000,
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "auto" }}
        >
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ margin: "0 10px" }}>1 of 10</span>
          <IconButton>
            <KeyboardArrowLeftOutlinedIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="standard"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label={<CustomTab label="Primary" icon={<InboxIcon />} />} />
          <Tab
            label={
              <CustomTab label="Promotions" icon={<LocalOfferOutlinedIcon />} />
            }
          />
          <Tab
            label={
              <CustomTab
                label="Social"
                style={{ color: activeTab ? "#0B57D0" : "#000" }}
                icon={<PeopleAltOutlinedIcon />}
              />
            }
          />
        </Tabs>
      </div>
      <List style={{}}>
        {emails.map((email) => (
          <ListItem
            key={email.subject}
            button
            onClick={() => onEmailClick(email)}
            onMouseEnter={() => handleEmailMouseEnter(email)}
            onMouseLeave={handleEmailMouseLeave}
            sx={{
              boxShadow:
                hoveredEmail && hoveredEmail.subject === email.subject
                  ? "0 4px 8px rgba(0, 0, 0, 0.1)"
                  : "none",
            }}
          >
            <Checkbox {...label} />
            <StarBorderOutlinedIcon />
            <ListItemText
              primaryTypographyProps={{
                fontWeight: email.unread ? "bold" : "normal",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              <Tooltip>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Typography
                    variant="subtitle2"
                    noWrap
                    sx={{ mx: 2, flexBasis: "13%" }}
                  >
                    {email.from}
                  </Typography>
                  <Typography variant="body1">{email.subject}</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    noWrap
                    sx={{ flexBasis: "60%" }}
                  >
                    -
                    {email.body.length > 200
                      ? `${email.body.substring(0, 150)}...`
                      : email.body}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    noWrap
                    sx={{
                      flexBasis: "10%",
                      textAlign: "center",
                      fontWeight: 700,
                    }}
                  >
                    {email.time}
                  </Typography>
                  {hoveredEmail && hoveredEmail.subject === email.subject && (
                    <div>
                      <IconButton>
                        <ArchiveOutlinedIcon />
                      </IconButton>
                      <IconButton>
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                      <IconButton>
                        <DraftsOutlinedIcon />
                      </IconButton>
                      <IconButton>
                        <AccessTimeIcon />
                      </IconButton>
                    </div>
                  )}
                </Box>
              </Tooltip>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default EmailList;
