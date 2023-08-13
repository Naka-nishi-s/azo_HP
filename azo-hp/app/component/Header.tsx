import ListIcon from "@mui/icons-material/List";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Menu } from "./Menu";

export const Header = () => {
  // Menuのopen状態
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Menuを開閉する
   */
  const handleChangeMenu = () => {
    setIsOpen(!isOpen);
  };

  // AppBarの高さを知る用
  const appRef = useRef<HTMLDivElement>(null);
  const [appBarHeight, setAppBarHeight] = useState(0);

  // AppBarの高さを取得
  useEffect(() => {
    if (appRef.current) {
      setAppBarHeight(appRef.current.clientHeight);
    }
  }, []);

  return (
    <AppBar position="static" ref={appRef} sx={{ backgroundColor: "black" }}>
      <Menu
        isOpen={isOpen}
        handleChangeMenu={handleChangeMenu}
        appBarHeight={appBarHeight}
      />
      <Toolbar>
        <IconButton edge="start" onClick={handleChangeMenu}>
          <ListIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
        <Typography variant="h6" component="div">
          Menu
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
