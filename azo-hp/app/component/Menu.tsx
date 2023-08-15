import { Box, List, ListItem, ListItemText } from "@mui/material";

const Overlay = ({ isOpen, handleChangeMenu }: any) => {
  return (
    <Box
      sx={{
        opacity: isOpen ? "0.4" : "0",
        bgcolor: "#FFFFFF",
        position: "absolute",
        right: "0",
        left: "0",
        top: "0",
        bottom: "0",
        zIndex: isOpen ? "1" : "-2",
      }}
      onClick={handleChangeMenu}
    ></Box>
  );
};

const MenuList = ({ isOpen, appBarHeight }: any) => {
  return (
    <List
      sx={{
        position: "absolute",
        top: `${appBarHeight}px`,
        left: 0,
        bgcolor: "background.paper",
        boxShadow: 2,
        borderRadius: "4px",
        width: { xs: "100%", lg: "30%" },
        zIndex: "2",
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <ListItem>
        <ListItemText primary="まだ何もないよ" sx={{ color: "black" }} />
      </ListItem>
      <ListItem>
        <ListItemText primary="あぞちゃんの" sx={{ color: "black" }} />
      </ListItem>
      <ListItem>
        <ListItemText primary="今後の活動に期待" sx={{ color: "black" }} />
      </ListItem>
    </List>
  );
};

export const Menu = ({ isOpen, handleChangeMenu, appBarHeight }: any) => {
  return (
    <>
      <Overlay handleChangeMenu={handleChangeMenu} isOpen={isOpen} />
      <MenuList isOpen={isOpen} appBarHeight={appBarHeight} />
    </>
  );
};
