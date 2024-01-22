import React, { useState } from "react";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import CalendarIcon from "../Assets/calendar_2020q4_2x.png";
import Keep from "../Assets/keep_2020q4v3_2x.png";
import Task from "../Assets/tasks_2021_2x.png";
import Contact from "../Assets/contacts_2022_2x.png";

const RightSidebar = (props) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "0",
        zIndex: 1000,
        top: 80,
      }}
    >
      <List sx={{ width: "100%", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IconButton>
            <img
              src={CalendarIcon}
              alt="calender"
              width={20}
              style={{ padding: 10 }}
            />
          </IconButton>
          <IconButton>
            <img src={Keep} alt="keep" width={20} style={{ padding: 10 }} />
          </IconButton>
          <IconButton>
            <img src={Task} alt="task" width={20} style={{ padding: 10 }} />
          </IconButton>
          <IconButton>
            <img
              src={Contact}
              alt="contact"
              width={20}
              style={{ padding: 10 }}
            />
          </IconButton>
        </div>
      </List>
    </div>
  );
};

export default RightSidebar;
