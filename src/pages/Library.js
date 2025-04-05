
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBookmark } from "../redux/bookmarkslice";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const Library = () => {
  const bookmarks = useSelector((state) => state.bookmarks.favorites);
  const dispatch = useDispatch();

  return (
    <Container className="mt-4">
      <SignedIn>
        <h2>Your Library</h2>
        {bookmarks.length === 0 ? (
          <p>No games bookmarked yet.</p>
        ) : (
          <Row>
            {bookmarks.map((game) => (
              <Col key={game.id} md={6} lg={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={game.background_image} alt={game.name} />
                  <Card.Body>
                    <Card.Title>{game.name}</Card.Title>
                    <Link to={`/game/${game.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                    <Button
                      variant="danger"
                      className="ms-2"
                      onClick={() => dispatch(removeBookmark(game.id))}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </Container>
  );
};

export default Library;

