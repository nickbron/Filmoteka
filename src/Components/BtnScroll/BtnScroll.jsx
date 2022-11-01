import { Fab, Zoom } from "@mui/material";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTheme } from "@emotion/react";
import { orange } from "@mui/material/colors";

const fabStyle = {
  position: "fixed",
  bottom: 50,
  right: 0,
};
const fabGreenStyle = {
  color: "common.white",
  bgcolor: orange[500],
  "&:hover": {
    bgcolor: orange[600],
  },
};

export default function BtnScroll() {
  const handleClick = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  const theme = useTheme();
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Zoom
      in={true}
      timeout={transitionDuration}
      style={{
        transitionDelay: `${transitionDuration.exit}ms`,
      }}
      unmountOnExit
    >
      <Fab
        sx={{ ...fabStyle, ...fabGreenStyle }}
        aria-label="expand"
        size="small"
        onClick={handleClick}
      >
        <UpIcon />
      </Fab>
    </Zoom>
  );
}
