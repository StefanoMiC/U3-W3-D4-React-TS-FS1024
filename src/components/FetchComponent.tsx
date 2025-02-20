import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { IBook } from "../interfaces/IBook";

// interface IBook {
//   id: number;
//   title: string;
//   price: string | number;
//   imageUrl: string;
//   description: string;
// }

const FetchComponent = () => {
  // originariamente si sarebbe infuso come valore di tipo per books ==> never[]
  // questa cosa crea problemi succesivamente nel momento in cui vorremmo leggere il paramentro di un map, che sarebbe a quel punto di tipo never
  // e logicamente su never non possiamo aspettarci di trovare proprietà ad esempio never.title

  // per risolvere questo problema, agiremo alla fonte, impedento a TS di inferire il tipo sbaglio nel momento della creazione dello stato
  // ci inseriremo quindi passando il giusto parametro di tipo, che in questo caso è un array di IBook ==> IBook[] || Array<IBook>
  const [books, setBooks] = useState<IBook[]>([]);

  const fetchBooks = async () => {
    const resp = await fetch("https://striveschool-api.herokuapp.com/food-books");
    if (resp.ok) {
      const arrOfBooks: IBook[] = await resp.json();

      setBooks(arrOfBooks);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  console.log(books);
  return (
    <Container>
      <Row>
        {/* books rimane un IBook[] */}
        {books.map((b) => (
          // e b sarà correttamente specificato come tipo IBook
          <SingleBook key={b.id} book={b} buttonText="Scopri di più" />
        ))}
      </Row>
    </Container>
  );
};

export default FetchComponent;
