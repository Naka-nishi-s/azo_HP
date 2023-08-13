import { Avatar, Tooltip } from "@mui/material";

export const AvatarIcon = () => {
  return (
    <Tooltip title="あぞちゃん">
      <Avatar
        alt="Azo"
        src="/static/images/avatar/azo.jpg"
        sx={{
          width: "300px",
          height: "300px",
          margin: 0,
        }}
      />
    </Tooltip>
  );
};
