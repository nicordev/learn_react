import React, {Component} from "react";

class Customer extends Component {
  render() {
    // const details = this.props.details;
    // const onDelete = this.props.onDelete;
    const {details, onDelete} = this.props;

    return (
      <li>
        {details.name}{" "}
        <button onClick={() => onDelete(details.id)}>
          X
        </button>
      </li>
    );
  }
}

export default Customer;