import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const newsData = [
  { date: "2023年8月14日", content: "いっぱい動画を投稿するよ" },
  { date: "2023年8月13日", content: "HPを開設しました。" },
  { date: "2023年8月11日", content: "動画を投稿しました。" },
  { date: "2023年8月10日", content: "メンテナンスのお知らせ" },
  // その他のニュースデータ...
];

export const News = () => {
  return (
    <Box flex={1}>
      <Typography variant="h4" borderBottom="1px solid">
        News
      </Typography>
      <List>
        {newsData.map((news, index) => (
          <ListItem key={index}>
            <ListItemText primary={news.date} secondary={news.content} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
