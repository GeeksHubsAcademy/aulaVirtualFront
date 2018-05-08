
import React, { Component } from 'react';
import './css/Login.css';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email:'',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  
  handleInputChange(e) {
    const value = e.target.value;
    const id = e.target.id;
    this.setState({
      [id]: value
    });
  }


  handleSubmitClick(e) {
    console.log(this.state);
    e.preventDefault();
    // this.setState({
    //   name: '',
    //   lastname: '',
    //   postalcode: '',
    //   email: '',
    //   password: ''
    // });
    fetch('https://geekshubs-b97d3.firebaseio.com/perros.json', {
      method: 'POST',
      body: JSON.stringify(this.state)
    }).then(function(response) {
      console.log(response);
      return response.json();
    }).then(function(data) {
      console.log(data);
    });
  }
  render() {
    console.log(this.state);
      return (
        <div class="w100">
          <div class="w80 center">
            <div class="space"></div>
            <div class="formulario center">
            <form>
              <div class="space"></div>
              <div class="w50 left"><input required id="email" class="name" type="email" value={ this.state.email } onChange={ this.handleInputChange } placeholder="Email" /></div>
              <div class="w50 left"><input id="password" class="name" type="password" value={ this.state.password } onChange={ this.handleInputChange } placeholder="Contraseña" /></div>
              <div class="space"></div>
              <div class="w100 left"><input type="submit" class="button" onClick={ this.handleSubmitClick }/></div>
            </form>
            </div>
          </div>
        </div>
      );
    }
  }
export default Login;
