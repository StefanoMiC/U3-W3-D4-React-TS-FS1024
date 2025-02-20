import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";

interface FormComponentProps {
  title: string;
}

const FormComponent = ({ title }: FormComponentProps) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  //   function handleChange<T>(setState: React.Dispatch<React.SetStateAction<T>>, value: T) {
  //     setState(value);
  //   }

  //   const handleChange: <T>(x: React.Dispatch<React.SetStateAction<T>>, y: T) => void = (setState, value) => {
  //     setState(value);
  //   };

  type HandleChangeType = <T>(x: React.Dispatch<React.SetStateAction<T>>, y: T) => void;

  const handleChange: HandleChangeType = (setState, value) => {
    setState(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(name);
    console.log(surname);
    console.log(checkbox);

    console.table({ name, surname, checkbox });
  };
  return (
    <Container>
      <h2>{title}</h2>
      <Row>
        <Col xs={12} md={8}>
          <Form
            // onSubmit={(e) => {
            //      e.preventDefault();
            //    }

            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo nome"
                value={name}
                //   onChange={(e) => setName(e.target.value)}
                onChange={(e) => handleChange(setName, e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSurname">
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo cognome"
                value={surname}
                //   onChange={(e) => setSurname(e.target.value)}
                onChange={(e) => handleChange(setSurname, e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Check
                label={"check me out"}
                checked={checkbox}
                //   onChange={(e) => setCheckbox(e.target.checked)}
                onChange={(e) => handleChange(setCheckbox, e.target.checked)}
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Invia
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormComponent;
