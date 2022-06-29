import React, { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  StorefrontOutlined,
  Home,
  GroupsOutlined,
  SportsEsportsOutlined,
  OndemandVideo,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function NavTabs() {
  const [underline, setUnderline] = useState(3);
  return (
    <Box sx={{ paddingLeft: "140px" }}>
      <Tabs>
        <Link to="/">
          {underline === 1 ? (
            <Tab
              sx={{
                color: "#1b74e4",
                borderBottom: 3,
                display: { mobile: "none", laptop: "block" },
              }}
              label={
                <Home
                  sx={{
                    fontSize: "30px",
                  }}
                />
              }
            />
          ) : (
            <Tab
              onClick={() => {
                setUnderline(1);
              }}
              sx={{ color: "#65676b" }}
              label={<Home sx={{ fontSize: "30px" }} />}
            />
          )}
        </Link>
        <Link to="/watch">
          {underline === 2 ? (
            <Tab
              sx={{
                color: "#1b74e4",
                borderBottom: 3,
                display: { mobile: "none", laptop: "block" },
              }}
              label={<OndemandVideo sx={{ fontSize: "30px" }} />}
            />
          ) : (
            <Tab
              onClick={() => {
                setUnderline(2);
              }}
              sx={{
                color: "#65676b",
                display: { mobile: "none", laptop: "block" },
              }}
              label={<OndemandVideo sx={{ fontSize: "30px" }} />}
            />
          )}
        </Link>
        <Link to="/marketplace">
          {underline === 3 ? (
            <Tab
              sx={{
                color: "#1b74e4",
                borderBottom: 3,
                display: { mobile: "none", laptop: "block" },
              }}
              label={<StorefrontOutlined sx={{ fontSize: "30px" }} />}
            />
          ) : (
            <Tab
              onClick={() => {
                setUnderline(3);
              }}
              sx={{
                color: "#65676b",
                display: { mobile: "none", laptop: "block" },
              }}
              label={<StorefrontOutlined sx={{ fontSize: "30px" }} />}
            />
          )}
        </Link>
        <Link to="/groups">
          {underline === 4 ? (
            <Tab
              sx={{
                color: "#1b74e4",
                borderBottom: 3,
                display: { mobile: "none", laptop: "block" },
              }}
              label={<GroupsOutlined sx={{ fontSize: "30px" }} />}
            />
          ) : (
            <Tab
              onClick={() => {
                setUnderline(4);
              }}
              sx={{
                color: "#65676b",
                display: { mobile: "none", laptop: "block" },
              }}
              label={<GroupsOutlined sx={{ fontSize: "30px" }} />}
            />
          )}
        </Link>
        <Link to="/gaming">
          {underline === 5 ? (
            <Tab
              sx={{
                color: "#1b74e4",
                borderBottom: 3,
                display: { mobile: "none", laptop: "block" },
              }}
              label={<SportsEsportsOutlined sx={{ fontSize: "30px" }} />}
            />
          ) : (
            <Tab
              onClick={() => {
                setUnderline(5);
              }}
              sx={{
                color: "#65676b",
                display: { mobile: "none", laptop: "block" },
              }}
              label={<SportsEsportsOutlined sx={{ fontSize: "30px" }} />}
            />
          )}
        </Link>
      </Tabs>
    </Box>
  );
}
