import { Avatar, Tooltip } from "@mui/material";

export const AvatarIcon = () => {
  return (
    <Tooltip title="あぞちゃん">
      <Avatar
        alt="Azo"
        src="/static/images/avatar/azo.jpg"
        sx={{
          width: { xs: "200px", sm: "300px" },
          height: { xs: "200px", sm: "300px" },
          margin: 0,
        }}
      />
    </Tooltip>
  );
};
