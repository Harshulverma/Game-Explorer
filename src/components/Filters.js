import React, { useState } from "react";

const Filters = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    category: "",
    tags: "",
    year: "",
    ordering: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    onApplyFilters(filters);
  };

  return (
    <div className="p-3 border rounded bg-light">
      <h4>Filters</h4>

      {/* Category Filter */}
      <label>Category:</label>
      <select name="category" className="form-control mb-2" onChange={handleChange}>
        <option value="">All</option>
        <option value="action">Action</option>
        <option value="adventure">Adventure</option>
        <option value="rpg">RPG</option>
      </select>

      {/* Tags Filter */}
      <label>Tags:</label>
      <input name="tags" type="text" className="form-control mb-2" onChange={handleChange} placeholder="e.g., multiplayer" />

      {/* Release Year Filter */}
      <label>Release Year:</label>
      <input name="year" type="number" className="form-control mb-2" onChange={handleChange} placeholder="e.g., 2023" />

      {/* Popularity Sort */}
      <label>Sort by:</label>
      <select name="ordering" className="form-control mb-3" onChange={handleChange}>
        <option value="">Default</option>
        <option value="-rating">Highest Rated</option>
        <option value="-released">Newest First</option>
      </select>

      <button className="btn btn-primary w-100" onClick={applyFilters}>
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
