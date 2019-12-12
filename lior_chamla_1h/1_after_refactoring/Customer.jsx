import React, {Component} from "react";

const Customer = ({details, onDelete}) => (
  <li>
    {details.name}{" "}
    <button onClick={() => onDelete(details.id)}>
      X
    </button>
  </li>
);

export default Customer;