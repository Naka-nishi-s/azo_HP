import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { COLORS } from "./Colors";

export const LineTop = styled(Box)({
  position: "absolute",
  left: "0",
  right: "0",
  top: "0%",
  height: "50%",
  zIndex: "3",
  backgroundColor: COLORS.white,
  borderBottom: "1px solid black",
  animation: "slideUp 1s forwards",
  "@keyframes slideUp": {
    "0%": {
      transform: "translateY(0%)",
      opacity: 1,
    },
    "99%": {
      transform: "translateY(-100%)",
      opacity: 1,
    },
    "100%": {
      transform: "translateY(-100%)",
      opacity: 0,
    },
  },
});

export const LineBottom = styled(Box)({
  position: "absolute",
  left: "0",
  right: "0",
  top: "50%",
  height: "50%",
  zIndex: "3",
  backgroundColor: "white",
  borderTop: "1px solid black",
  animation: "slideDown 1s forwards",
  "@keyframes slideDown": {
    "0%": {
      transform: "translateY(0%)",
      opacity: 1,
    },
    "99%": {
      transform: "translateY(100%)",
      opacity: 1,
    },
    "100%": {
      transform: "translateY(100%)",
      opacity: 0,
    },
  },
});
