import React, { Component } from 'react'

class Login extends Component {

  state = {
    username: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // this.props.login(this.state.username, this.state.password)
      // .then(res => this.props.history.push('/home'))
      // setTimeout(() => this.props.history.push('/home'), 3000)
      setTimeout(function() {
        alert('Hello World!');
      }, 5000);
  }

  render() {
    return (
      <div>
        <p>Please Log In</p>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label>Password
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Login;
