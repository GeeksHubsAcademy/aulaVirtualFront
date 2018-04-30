import React, { Component } from 'react';

import './css/Formulario.css';
// import './css/Registro.css';

class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastname: '',
      country:'',
      city:'',
      postalcode: '',
      address:'',
      phone:'',
      email:'',
      user: '',
      password: '',
      passwordconfirm: '',
      isActive:''
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
    e.preventDefault();
    console.log(this.event);
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
              <h3>Alumno:</h3>
              <div class="w50 left"><input id="name" class="name" type="text" value={ this.state.name } onChange={ this.handleInputChange } placeholder="Nombre" /></div>
              <div class="w50 left"><input id="lastname" class="name" type="text" value={ this.state.lastname } onChange={ this.handleInputChange } placeholder="Apellido" /></div>
              <div class="w50 left"><input id="country" class="name" type="text" value={ this.state.country } onChange={ this.handleInputChange } placeholder="Pais" /></div>
              <div class="w50 left"><input id="city" class="name" type="text" value={ this.state.city } onChange={ this.handleInputChange } placeholder="Ciudad" /></div>
              <div class="w50 left"><input id="postalcode" class="name" type="text" value={ this.state.postalcode} onChange={ this.handleInputChange } placeholder="Código Postal" /></div>
              <div class="w50 left"><input id="phone" class="name" type="number" value={ this.state.phone} onChange={ this.handleInputChange } placeholder="Teléfono" /></div>
              <div class="w100"><input id="address" class="address" type="text" value={ this.state.address} onChange={ this.handleInputChange } placeholder="Dirección" /></div>
              <h3>Nueva cuenta:</h3>
              <div class="w50 left"><input required id="email" class="name" type="email" value={ this.state.email } onChange={ this.handleInputChange } placeholder="Email" /></div>
              <div class="w50 left"><input required id="user" class="name" type="text" value={ this.state.user } onChange={ this.handleInputChange } placeholder="Usuario" /></div>
              <div class="w50 left"><input id="password" class="name" type="password" value={ this.state.password } onChange={ this.handleInputChange } placeholder="Contraseña" /></div>
              {/* <div class="w50 left"><input id="password" class="name" type="password" value={ this.state.passwordconfirm } onChange={ this.handleInputChange } placeholder="Confirmar Contraseña" /></div> */}
              <div class="space left"></div>
              <div class="w100 left">Activo: <input id="isActive" type="checkbox" value={ this.state.isActive } onChange={ this.handleInputChange } /></div>
              <div class="space left"></div>
              <div class="w100 left"><input type="submit" class="button" onClick={ this.handleSubmitClick }/></div>
            </form>
          </div>
          <div class="space"></div>
        </div>
      </div>
    );
  };
}

export default Formulario;
