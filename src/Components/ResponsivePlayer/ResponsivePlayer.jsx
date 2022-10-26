import { Box } from "@mui/material";
import ReactPlayer from "react-player/lazy";

export default function ResponsivePlayer({ url }) {
  return (
    <Box>
      <ReactPlayer width={"auto"} url={url} controls />
    </Box>
  );
}
