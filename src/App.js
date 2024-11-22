import { Container, Pagination } from "@mui/material";
import "./App.css";
import PrimarySearchAppBar from "./components/SearchBar/PrimarySearchAppBar";
import ToggleColorMode from "./components/SearchBar/TogglingColorMode";
import { useAuth } from "./components/LoginControl/AuthContext";
import JobDetailsModal from "./components/JobDisplay/JobDetailModal";
import JobGrid from "./components/JobDisplay/JobGrid";
import LoginModalManager from "./components/LoginControl/LoginModalControl";
import useJobs from "./components/JobDisplay/useJobs";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

const jobsPerPage = 6;

function App() {
  const { user } = useAuth();
  const {
    displayedJobs,
    totalPage,
    currentPage,
    isLoading,
    setCurrentPage,
    filterJobs,
    searchTerm,
    setSearchTerm,
  } = useJobs(jobsPerPage);

  const [isJobDetailsModalOpen, setIsJobDetailsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const handleJobClick = (job) => {
    if (!user) {
      navigate("/login");
    } else {
      setSelectedJob(job);
      setIsJobDetailsModalOpen(true);
    }
  };

  const handleCloseJobDetails = () => {
    setSelectedJob(null);
    setIsJobDetailsModalOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      filterJobs(searchTerm);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ToggleColorMode>
      <Container>
        <PrimarySearchAppBar
          onSearchChange={(value) => setSearchTerm(value)}
          onSearchKeyDown={handleKeyDown}
          onLoginClick={() => navigate("/login")}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {displayedJobs.length === 0 && (
                  <p>No jobs found matching "{searchTerm}"</p>
                )}
                <JobGrid jobs={displayedJobs} onJobClick={handleJobClick} />
                <Pagination
                  count={totalPage}
                  page={currentPage}
                  onChange={(e, value) => setCurrentPage(value)}
                  variant="outlined"
                  color="primary"
                  sx={{
                    justifyContent: "center",
                    display: "flex",
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <LoginModalManager
                isOpen={true}
                onClose={() => navigate("/")}
              />
            }
          />
        </Routes>
        <JobDetailsModal
          open={isJobDetailsModalOpen}
          onClose={handleCloseJobDetails}
          job={selectedJob}
        />
      </Container>
    </ToggleColorMode>
  );
}

export default App;