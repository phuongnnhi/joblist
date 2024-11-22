import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function JobDetailsModal({ open, onClose, job }) {
  if (!job) return null; // Prevent rendering if no job data is passed

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="job-details-title"
      aria-describedby="job-details-description"
    >
      <Box sx={style}>
        <Typography id="job-details-title" variant="h6" component="h2">
          {job.title}
        </Typography>
        <Typography id="job-details-description" sx={{ mt: 2 }}>
          <b>City:</b> {job.city}
          <br />
          <br />
          <b>Description:</b> {job.description}
          <br />
          <br />
          <b>Salary:</b> {job.salaryLow} - {job.salaryHigh}
          <br />
          <b>Years of Experience:</b> {job.yrsXPExpected}
          <br />
          <b>Remote:</b> {job.remote ? 'Yes' : 'No'}
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onClose} color="secondary">
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}