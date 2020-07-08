import React from "react";

class ControlledForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { firstName, lastName, email, phone } = this.state;
    const messageTemplate = `
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Phone: ${phone}
    `;
    alert(messageTemplate);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-row">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
          />
        </div>

        <div class="form-row">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
        </div>

        <div class="form-row">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </div>

        <div class="form-row">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
          />
        </div>

        <div class="form-row">
          <button type="submit" class="btn">
            submit
          </button>
        </div>
      </form>
    );
  }
}

export default ControlledForm;
