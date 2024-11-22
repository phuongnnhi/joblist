import React from "react";
import { Pagination } from "@mui/material";

function PaginationControl({ totalPage, currentPage, onPageChange }) {
  return (
    <Pagination
      count={totalPage}
      page={currentPage}
      onChange={onPageChange}
      variant="outlined"
      color="primary"
      sx={{ justifyContent: "center", display: "flex", marginTop: 5, marginBottom: 5 }}
    />
  );
}

export default PaginationControl;