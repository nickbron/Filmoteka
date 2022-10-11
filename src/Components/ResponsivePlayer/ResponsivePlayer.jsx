import { Box } from "@mui/material";
import { padding } from "@mui/system";
import ReactPlayer from "react-player/lazy";

export default function ResponsivePlayer({ url }) {
  return (
    <Box>
      <ReactPlayer url={url} controls />
    </Box>
  );
}
