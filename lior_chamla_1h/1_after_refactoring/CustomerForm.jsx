import React, {Component} from 'react';

class CustomerForm extends Component {
  state = {
    newCustomer: ''
  }

  handleChange = event => {
    this.setState({newCustomer: event.currentTarget.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    const id = new Date().getTime();
    const name = this.state.newCustomer;
    this.props.onCustomerAdd({id, name});
    this.setState({newCustomer: ''});
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input
        value={this.state.newCustomer}
        onChange={this.handleChange}
        type="text"
        placeholder="Ajouter un client"
      />
      <button>Confirmer</button>
    </form>
  }
}

export default CustomerForm;