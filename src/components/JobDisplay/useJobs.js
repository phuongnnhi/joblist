import { useState, useEffect } from "react";

const useJobs = (jobsPerPage) => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://joblist-kole.onrender.com/jobs");
        if (!response.ok) throw new Error("Failed to fetch jobs");

        const data = await response.json();
        setJobs(data);
        setFilteredJobs(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const filterJobs = (term) => {
    const results = jobs.filter((job) =>
      job.title.toLowerCase().includes(term.toLowerCase()) ||
      job.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredJobs(results);
    setCurrentPage(1); // Reset to first page
  };

  const displayedJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  const totalPage = Math.ceil(filteredJobs.length / jobsPerPage);

  return {
    displayedJobs,
    totalPage,
    currentPage,
    isLoading,
    setCurrentPage,
    filterJobs,
    searchTerm,
    setSearchTerm,
  };
};

export default useJobs;