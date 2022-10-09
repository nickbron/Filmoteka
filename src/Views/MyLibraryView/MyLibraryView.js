import { Box } from "@mui/material";
import backImage from "../../Images/my_library_desktop.jpg";

export default function MyLibraryView(params) {
  return (
    <>
      <Box component="img" src={backImage}></Box>
    </>
  );
}
