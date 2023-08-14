"use client";

import InstaIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YoutubeIcon from "@mui/icons-material/YouTube";
import { Avatar, Box, IconButton, Tooltip } from "@mui/material";

import { AvatarIcon } from "./AvatarIcon";
import { Current } from "./Current";
import { Icon } from "./Icon";
import { News } from "./News";
import { ThreeText } from "./ThreeText";

export const HomePage = () => {
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <ThreeText />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={10}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={{ lg: 6 }}
          pt={{ xs: 8, lg: 16 }}
          mr={{ lg: "auto" }}
          ml={{ lg: "18%" }}
        >
          <AvatarIcon />

          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Icon
              link="https://www.youtube.com/channel/UCBw-a0HQnFZrQxrcbNqBdxg"
              type="red"
            >
              <YoutubeIcon color="error" sx={{ width: "60%", height: "60%" }} />
            </Icon>

            <Icon link="https://twitter.com/azo_a01?s=20" type="blue">
              <TwitterIcon
                color="primary"
                sx={{ width: "60%", height: "60%" }}
              />
            </Icon>

            <Tooltip title="近日公開！">
              <IconButton
                size="large"
                sx={{
                  transition: "transform .8s",
                  "&:hover": {
                    transform: "rotateY(360deg)",
                    backgroundSize: "100% 100%",
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: "white",
                  }}
                >
                  <InstaIcon
                    color="primary"
                    sx={{ width: "60%", height: "60%" }}
                  />
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Box
          display="flex"
          gap={{ xs: 2, sm: 4, lg: 16 }}
          pl="10%"
          pr="10%"
          width="100%"
          zIndex="1"
        >
          <News />
          <Current />
        </Box>
      </Box>
    </main>
  );
};
