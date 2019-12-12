import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    customers: [
      {
        id: 1,
        name: "Lenny Bards"
      },
      {
        id: 2,
        name: "Sarah Croche"
      },
      {
        id: 3,
        name: "Jim Nastique"
      }
    ],
    newCustomer: ""
  };

  handleDelete = id => {
    const customers = this.state.customers.slice();
    const index = customers.findIndex((customer) => customer.id === id);
    customers.splice(index, 1);
    this.setState({customers: customers});
  };

  handleChange = event => {
    const value = event.currentTarget.value;
    this.setState({newCustomer: value});
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = new Date().getTime();
    const name = this.state.newCustomer;
    const customer = {
      id: id,
      name: name
    }
    const customers = this.state.customers.slice();
    customers.push(customer);
    this.setState({
      customers: customers,
      newCustomer: ""
    });
  };

  render() {
    const title = "Liste des clients";
    const customerElements = this.state.customers.map(client => {
      return (
        <li>
          {client.name} <button onClick={() => this.handleDelete(client.id)}>X</button>
        </li>
      );
    });

    return (
      <div>
        <h1>{title}</h1>
        <ul>{customerElements}</ul>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.newCustomer}
            onChange={this.handleChange}
            type="text"
            placeholder="Ajouter un client"
          />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
