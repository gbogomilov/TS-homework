import React from "react";
import { connect } from "react-redux";
import { typeActions } from "redux/actionTypes";
import { addTodo } from "../redux/actions";

type myProps = {
  addTodo: (content: string) => typeActions;
};

class AddTodo extends React.Component<myProps> {
  state: { input: string };
  constructor(props: myProps) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input: string) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
// export default AddTodo;
