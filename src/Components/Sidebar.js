import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ScheduleSendOutlinedIcon from "@mui/icons-material/ScheduleSendOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

const Sidebar = (props, onMenuClick) => {
  const { sidebarWidth, onComposeClick } = props;
  const [showMore, setShowMore] = useState(false);
  const [more, setMore] = useState(false);
  console.log("props", sidebarWidth);

  const toggleShowMore = () => {
    setMore(!more);
  };

  const folders = [
    { icon: <InboxIcon />, text: "Inbox" },
    { icon: <StarBorderOutlinedIcon />, text: "Starred" },
    { icon: <AccessTimeIcon />, text: "Snoozed" },
    { icon: <SendOutlinedIcon />, text: "Sent" },
    { icon: <DraftsOutlinedIcon />, text: "Drafts" },
  ];

  const labels = [
    { icon: <LabelImportantOutlinedIcon />, text: "Important" },
    { icon: <MessageOutlinedIcon />, text: "Chats" },
    { icon: <ScheduleSendOutlinedIcon />, text: "Scheduled" },
    { icon: <LocalPostOfficeOutlinedIcon />, text: "All Mail" },
    { icon: <ReportGmailerrorredOutlinedIcon />, text: "Spam" },
    { icon: <DeleteOutlineOutlinedIcon />, text: "Trash" },
    { icon: <LabelOutlinedIcon />, text: "Categories" },
    { icon: <PeopleAltOutlinedIcon />, text: "Social" },
    { icon: <InfoOutlinedIcon />, text: "Updates" },
    { icon: <ForumOutlinedIcon />, text: "Forums" },
    { icon: <LocalOfferOutlinedIcon />, text: "Promotions" },
  ];

  return (
    <div
      onMouseEnter={() => setShowMore(true)}
      onMouseLeave={() => setShowMore(false)}
      className={"sidebar"}
      style={{
        width: showMore || sidebarWidth === true ? "200px" : "50px",
        height: showMore || sidebarWidth === true ? "100vh" : "auto",
        transition: "width 0.3s",
        position: "fixed",
        zIndex: 10000,
        top: 80,
        overflowY: "auto",
        backgroundColor: "#F6F8FC",
        marginBottom: "10px",
      }}
    >
      <List sx={{ width: "100%" }}>
        <IconButton
          onClick={props.onComposeClick}
          sx={{
            marginLeft: "10px",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "#C2E7FF",
            "&:hover": { backgroundColor: "#C2E7FF", borderRadius: "10px" },
          }}
        >
          <CreateOutlinedIcon
            style={{
              color: "#000",
            }}
          />
          {showMore || sidebarWidth === true ? (
            <span style={{ fontSize: 15, marginLeft: "15px", color: "#000" }}>
              {" "}
              Compose
            </span>
          ) : null}
        </IconButton>
        {folders.map((folder) => (
          <ListItem key={folder.text} button sx={{ gap: "15px" }}>
            {folder.icon}
            {showMore || sidebarWidth === true ? (
              <ListItemText primary={folder.text} />
            ) : null}
          </ListItem>
        ))}
        <div>
          <div onClick={toggleShowMore}>
            {more ? (
              <>
                <ListItem
                  style={{
                    marginLeft: "16px",
                    color: "#000",
                    marginTop: "15px",
                  }}
                >
                  <Box sx={{ flexGrow: 1, cursor: "pointer", gap: "15px" }}>
                    <Grid container spacing={2}>
                      <Grid>
                        <KeyboardArrowUpOutlinedIcon />
                      </Grid>
                      <Grid sx={{ marginLeft: "15px", color: "#000" }}>
                        Less
                      </Grid>
                    </Grid>
                  </Box>
                </ListItem>
              </>
            ) : (
              <>
                <ListItem
                  style={{
                    marginLeft: "16px",
                    color: "#000",
                    marginTop: "15px",
                  }}
                >
                  <Box sx={{ flexGrow: 1, cursor: "pointer", gap: "15px" }}>
                    <Grid container spacing={2}>
                      <Grid>
                        <KeyboardArrowDownOutlinedIcon />
                      </Grid>
                      {showMore === true || sidebarWidth === true ? (
                        <Grid sx={{ marginLeft: "15px", color: "#000" }}>
                          More
                        </Grid>
                      ) : null}
                    </Grid>
                  </Box>
                </ListItem>
              </>
            )}
          </div>
        </div>
        {more === true &&
          labels.map((label) => (
            <ListItem key={label.text} button sx={{ gap: "15px" }}>
              {label.icon}
              {showMore || sidebarWidth === true ? (
                <ListItemText primary={label.text} />
              ) : null}
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default Sidebar;
