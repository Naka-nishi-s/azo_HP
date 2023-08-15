import { Avatar, Box, Tooltip } from "@mui/material";
import { useState } from "react";
import { COLORS } from "./Colors";
import { Goroku } from "./Goroku";

export const AvatarIcon = () => {
  // クリックカウント
  const [clickCount, setClickCount] = useState(0);
  const [talk, setTalk] = useState("あぞです");

  /**
   * クリック10回したらなんか出す
   */
  const handleAvatarClick = () => {
    // クリックしたら+1
    const newCount = clickCount + 1;

    // 10回以上のクリックで語録が出荷
    if (newCount >= 10) {
      // ランダム値を取得
      const number = Math.floor(Math.random() * 8) + 1;
      const talk = Goroku[number];

      // 語録をセット
      setTalk(talk);
    }

    setClickCount(newCount);
  };

  return (
    <>
      <Box
        sx={{ backgroundColor: COLORS.white, p: "16px", borderRadius: "6%" }}
      >
        {talk}
      </Box>
      <Tooltip title="あぞちゃん">
        <Avatar
          alt="Azo"
          src="/images/avatar/azo.jpg"
          sx={{
            width: { xs: "200px", sm: "300px" },
            height: { xs: "200px", sm: "300px" },
            margin: 0,
          }}
          onClick={handleAvatarClick}
        />
      </Tooltip>
    </>
  );
};
