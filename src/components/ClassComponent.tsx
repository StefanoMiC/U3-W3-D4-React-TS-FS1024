import { Component } from "react";
import { Spinner } from "react-bootstrap";

interface ClassComponentProps {
  title: string;
  color?: string;
}

interface ClassCoponentState {
  isLoading: boolean;
}

class ClassComponent extends Component<ClassComponentProps, ClassCoponentState> {
  //   constructor(props: ClassComponentProps) {
  //     super(props);

  //     this.state = {
  //       isLoading: true
  //     };
  //   }

  state: ClassCoponentState = {
    isLoading: true
  };

  render() {
    return (
      <>
        {this.state.isLoading && <Spinner animation="grow" variant="primary" />}
        <div onClick={() => this.setState({ isLoading: false })}>
          <h2 style={{ color: this.props.color }}>{this.props.title}</h2>
        </div>
      </>
    );
  }
}

export default ClassComponent;
