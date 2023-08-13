/* eslint-disable react/display-name */

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

export const Icon = ({
  children,
  link,
  type,
}: {
  children: any;
  link?: string;
  type: "red" | "blue";
}) => {
  return (
    <>
      {link && (
        <Link href={link && link} target="_blank" rel="noopener noreferrer">
          <IconButton
            size="large"
            sx={{
              transition: "transform .8s",
              "&:hover": {
                transform: "rotateY(360deg)",
                backgroundSize: "10% 10%",
                backgroundColor: "#E0E0E0",
              },
            }}
          >
            <Avatar
              sx={{
                width: "70px",
                height: "70px",
                backgroundColor: "white",
                border:
                  type === "red"
                    ? "1px solid #F8C0C0"
                    : type === "blue"
                    ? "1px solid #C8EDFC"
                    : "1px solid transparent",
              }}
            >
              {children}
            </Avatar>
          </IconButton>
        </Link>
      )}
    </>
  );
};
