import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchGameDetails } from "../api/rawgApi";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../redux/bookmarkslice";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks.favorites);
  
  const isBookmarked = bookmarks.some((g) => g.id === Number(id));

  useEffect(() => {
    const loadGameDetails = async () => {
      try {
        const gameData = await fetchGameDetails(id);
        setGame(gameData);
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    };

    loadGameDetails();
  }, [id]);

  if (!game) return <h2>Loading...</h2>;

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={game.background_image} alt={game.name} />
          </Card>
        </Col>

        <Col md={6}>
          <h1>{game.name}</h1>
          <p><strong>Rating:</strong> {game.rating}</p>
          <p><strong>Released:</strong> {game.released}</p>
          <p><strong>Description:</strong> {game.description_raw}</p>

          {/* ✅ Bookmark Button */}
          <Button
            variant={isBookmarked ? "danger" : "primary"}
            onClick={() =>
              isBookmarked
                ? dispatch(removeBookmark(game.id))
                : dispatch(addBookmark(game))
            }
          >
            {isBookmarked ? "Remove Bookmark" : "Add to Library"}
          </Button>
        </Col>
      </Row>
      // <h3 className="mt-4">Screenshots</h3>
      // <Carousel>
      //   {game.screenshots && game.screenshots.map((screenshot) => (
      //     <Carousel.Item key={screenshot.id}>
      //       <img className="d-block w-100" src={screenshot.image} alt="Game Screenshot" />
      //     </Carousel.Item>
      //   ))}
      // </Carousel>
    </Container>
  );
};

export default GameDetails;


