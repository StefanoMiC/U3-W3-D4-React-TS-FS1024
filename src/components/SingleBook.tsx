import { Button, Card, Col } from "react-bootstrap";
import { IBook } from "../interfaces/IBook";

// interface IBook {
//   id: number;
//   title: string;
//   price: string | number;
//   imageUrl: string;
//   description: string;
// }

interface SingleBookProps {
  book: IBook;
  buttonText: string;
}

const SingleBook = ({ book, buttonText }: SingleBookProps) => {
  return (
    <Col md={3}>
      <Card>
        <Card.Img variant="top" src={book.imageUrl} />
        <Card.Body>
          <Card.Title>{book.price}</Card.Title>
          <Card.Text>{book.description.substring(0, 100)}...</Card.Text>
          <Card.Text>{book.price}€</Card.Text>
          <Button variant="primary">{buttonText}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SingleBook;
