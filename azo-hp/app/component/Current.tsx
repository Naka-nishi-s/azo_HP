import { Box, Typography } from "@mui/material";

export const Current = () => {
  return (
    <Box flex={1}>
      <Typography variant="h4" borderBottom="1px solid black">
        オススメ
      </Typography>
      <Box>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/J5Hz9IHHTxU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
};
