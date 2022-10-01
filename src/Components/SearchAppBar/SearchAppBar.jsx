import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({ onSearch }) {
  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.elements.filmName.value.trim() === "") {
      alert("Enter Film");
      return;
    }
    onSearch(e.target.elements.filmName.value);
  };

  return (
    <Paper
      component="form"
      elevation={8}
      onSubmit={handleSearch}
      sx={{ display: "flex", alignItems: "center", width: 400 }}
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
      <StyledInputBase
        name="filmName"
        placeholder="Search Film…"
        inputProps={{ "aria-label": "search" }}
        autoComplete="off"
      />
    </Paper>
  );
}
