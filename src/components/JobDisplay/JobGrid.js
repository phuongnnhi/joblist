import React from "react";
import { Grid } from "@mui/material";
import JobCard from "./JobCard";

function JobGrid({ jobs, onJobClick }) {
  return (
    <Grid container spacing={2} sx={{ alignItems: "stretch" }}>
      {jobs.map((job, index) => (
        <Grid item xs={12} md={4} key={index}>
          <JobCard job={job} onClick={onJobClick} />
        </Grid>
      ))}
    </Grid>
  );
}

export default JobGrid;