import { Container, Grid, Pagination} from '@mui/material';
import './App.css';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import JobCard from './components/JobCard';
import jobs from './jobs.json'
import { useState } from 'react';
import ToggleColorMode from './components/TogglingColorMode';


const jobsPerPage = 6;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(jobs.length/jobsPerPage);

  const displayedJobs = jobs.slice(
    (currentPage-1) * jobsPerPage,
    currentPage * jobsPerPage
  )

  const handlePageChange = (e, value) => {
    setCurrentPage(value);
  }

  return (
    <ToggleColorMode>
    <Container>
      <PrimarySearchAppBar/>
      <Grid container spacing={2} sx={{ alignItems: 'stretch' }}>
      {displayedJobs.map((job) => (
        <Grid item xs={12} md={4}>
        <JobCard job={job}/>
        </Grid>
      ))}
      </Grid>
      <Pagination count={totalPage} page={currentPage} onChange={handlePageChange} variant="outlined" color="primary" sx={{ justifyContent: 'center', display: 'flex', marginTop: 5, marginBottom: 5 }} />
    </Container>
    </ToggleColorMode>
  );
}

export default App;
