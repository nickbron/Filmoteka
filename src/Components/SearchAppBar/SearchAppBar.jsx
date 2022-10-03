import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

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
    </Paper>
  );
}
