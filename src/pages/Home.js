import React, { useState, useEffect } from "react";
import { fetchGamesWithPagination } from "../api/rawgApi";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import Filters from "../components/Filters";
import NavigationBar from "../components/Navbar";
import PaginationControls from "../components/Pagination";

const Home = () => {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    loadGames(currentPage, filters);
  }, [currentPage, filters]);

  const loadGames = async (page, filters) => {
    const { games, nextPage } = await fetchGamesWithPagination(page, filters);
    setGames(games);
    setNextPage(nextPage);
  };

  const handleSearch = (query) => {
    setFilters({ ...filters, search: query });
    setCurrentPage(1); 
  };

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); 
  };

  return (
    <>
      <NavigationBar onSearch={handleSearch} />
      <Container className="mt-4">
        <Row>
          <Col md={3}>
            <Filters onApplyFilters={handleApplyFilters} />
          </Col>

          <Col md={9}>
            <h2>Games</h2>
            <Row>
              {games.map((game) => (
                <Col key={game.id} md={6} lg={4} className="mb-4">
                  {
                  <Card className="h-100 shadow-sm rounded">
  <Card.Img
    variant="top"
    src={game.background_image}
    alt={game.name}
    className="object-fit-cover"
    style={{ height: "200px" }}
  />
  <Card.Body className="d-flex flex-column">
    <Card.Title className="text-truncate">{game.name}</Card.Title>
    <Card.Text className="text-muted small">Rating: ⭐ {game.rating}</Card.Text>
    <Link to={`/game/${game.id}`} className="btn btn-primary mt-auto">
      View Details
    </Link>
  </Card.Body>
</Card>

                  }
                </Col>
              ))}
            </Row>

            {/* Pagination Controls */}
            <PaginationControls
              currentPage={currentPage}
              nextPage={nextPage}
              onPageChange={setCurrentPage}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;

