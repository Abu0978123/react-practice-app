import React, { useState, useEffect } from "react";

const CustomPagination = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const APIURL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setTotalPages(Math.ceil(data.length / 5));
      });
  }, []);
  // current pages function
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const preDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;

  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsDisplay = userData.slice(startIndex, endIndex);
  return (
    <>
      {itemsDisplay && itemsDisplay.length > 0
        ? itemsDisplay.map((item) => {
            return (
              <h3 key={item.id}>
                {item.id} {item.title}
              </h3>
            );
          })
        : "no data"}
      <button
        style={{ padding: "15px", background: "blue", marginRight: "10px", borderRadius:"10px" }}
        onClick={handlePrevClick}
        disabled={preDisabled}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, i) => {
        return (
          <button
            style={{
              padding: "15px",
              background: "wheat",
              marginRight: "10px",
              borderRadius:"10px"
            }}
            onClick={() => handlePageChange(i + 1)}
            key={i}
            disabled={i + 1 === currentPage}
          >
            {i + 1}
          </button>
        );
      })}

      <button
        style={{ padding: "15px", background: "green",borderRadius:"10px" }}
        onClick={handleNextClick}
        disabled={nextDisabled}
      >
        Next
      </button>
    </>
  );
};

export default CustomPagination;
