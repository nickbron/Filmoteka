import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Alert,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Snackbar,
} from "@mui/material";

export default function SearchAppBar({ onSearch }) {
  const [openAlert, setOpenAlert] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.elements.filmName.value.trim() === "") {
      setOpenAlert(true);
      return;
    }
    onSearch(e.target.elements.filmName.value);
  };

  return (
    <Paper
      component="form"
      elevation={8}
      onSubmit={handleSearch}
      sx={{
        mt: "100px",
        display: "flex",
        width: "100%",
      }}
    >
      <IconButton
        type="submit"
        autoComplete="off"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <InputBase
        name="filmName"
        placeholder="Search Film…"
        inputProps={{ "aria-label": "search" }}
        autoComplete="off"
        sx={{ ml: 1, flex: 1 }}
      />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openAlert}
        autoHideDuration={1000}
        onClose={() => {
          setOpenAlert(false);
        }}
      >
        <Alert severity="error">Please Enter Film Name!</Alert>
      </Snackbar>
    </Paper>
  );
}
