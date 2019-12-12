import React from "react";
import ReactDOM from "react-dom";
import Customer from "./Customer.jsx";
import CustomerForm from "./CustomerForm";

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
    ]
  };

  handleDelete = id => {
    const customers = [...this.state.customers];
    const index = customers.findIndex((customer) => customer.id === id);
    customers.splice(index, 1);
    this.setState({customers});
  };

  handleAdd = customer => {
    const customers = [...this.state.customers];
    customers.push(customer);
    this.setState({customers});
  }

  render() {
    const title = "Liste des clients";

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.customers.map(customer => (
            <Customer 
              details={customer} 
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <CustomerForm onCustomerAdd={this.handleAdd} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
