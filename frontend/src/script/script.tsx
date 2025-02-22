import * as React from "react";
import * as ReactDOM from "react-dom";

interface IProps_Square {
  message: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

class Square extends React.Component<IProps_Square> {
  render() {
    return <button onClick={this.props.onClick}>{this.props.message}</button>;
  }
}

class Game extends React.Component {
  render() {
    return <Square message={"click this"} onClick={() => alert("hello")} />;
  }
}

ReactDOM.render(<Game />, document.getElementById("reactjs-tutorial"));
