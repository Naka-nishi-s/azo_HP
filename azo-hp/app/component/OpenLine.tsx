import styled from "@emotion/styled";
import { Box } from "@mui/material";

const LineTop = styled(Box)({
  position: "absolute",
  left: "100%",
  right: "0%",
  top: "50%",
  height: ".6px",
  backgroundColor: "black",
  animation: "slideUp 2s forwards",
  "@keyframes slideUp": {
    "0%": {
      left: "100%",
      top: "50%",
    },
    "25%": {
      left: "50%",
      top: "50%",
    },
    "50%": {
      left: "0%",
      top: "50%",
    },
    "100%": {
      left: "0%",
      top: "0%",
    },
  },
});

const LineBottom = styled(Box)({
  position: "absolute",
  left: "0",
  right: "100%",
  bottom: "50%",
  height: ".6px",
  backgroundColor: "black",
  animation: "slideDown 2s none",
  "@keyframes slideDown": {
    "0%": {
      right: "100%",
      bottom: "50%",
    },
    "25%": {
      right: "50%",
      bottom: "50%",
    },
    "50%": {
      right: "0%",
      bottom: "50%",
    },
    "100%": {
      right: "0%",
      bottom: "0%",
    },
  },
});

const Back = ({ children }: any) => {
  return (
    <Box
      component="div"
      bgcolor="#F1F3F4"
      width="100%"
      sx={{
        clipPath: "inset(50% 0 50% 0)",
        animation: "reveal 2s forwards",
        "@keyframes reveal": {
          "0%": {
            clipPath: "inset(50% 0 50% 0)",
          },
          "50%": {
            clipPath: "inset(50% 0 50% 0)",
          },
          "100%": {
            clipPath: "inset(0% 0 0% 0)",
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

export const OpenLine = ({ HomePage }: any) => {
  return (
    <Box>
      <Back>{HomePage}</Back>
      <LineTop />
      <LineBottom />
    </Box>
  );
};
