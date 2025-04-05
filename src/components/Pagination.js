import React from "react";
import { Button } from "react-bootstrap";

const PaginationControls = ({ currentPage, nextPage, onPageChange }) => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <Button
        variant="primary"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="me-2"
      >
        Previous
      </Button>

      <span className="align-self-center">Page {currentPage}</span>

      <Button
        variant="primary"
        disabled={!nextPage}
        onClick={() => onPageChange(currentPage + 1)}
        className="ms-2"
      >
        Next
      </Button>
    </div>
  );
};

export default PaginationControls;
