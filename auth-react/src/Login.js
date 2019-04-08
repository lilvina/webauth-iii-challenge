import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input
            name="username"
            onChange={this.handleInputChange}
            value={this.state.username}
          />
        </div>
        <div>
          <label htmlFor="password" />
          <input
            name="password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    )
  }

  handleInputChange = e => {
    e.preventDefault()
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const endpoint = 'http://localhost:5000/api/login'
    axios.post(endpoint, this.state)
      .then(res => {
        console.log(res.data.token)
        localStorage.setItem('token', res.data.token)
      }).catch(err => {
        console.log(err)
      })
  }
}

export default Login
