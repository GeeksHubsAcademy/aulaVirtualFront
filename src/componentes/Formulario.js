import React, { Component } from 'react';

import './css/Formulario.css';
// import './css/Registro.css';

class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      "name": '',
      "lastname": '',
      "country":'',
      "city":'',
      "postalcode": '',
      "address":'',
      "phone":'',
      "email":'',
      "user": '',
      "password": '',
      "active": false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleInputCheck = this.handleInputCheck.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;
    const id = e.target.id;
    this.setState({
      [id]: value
    });
  }

  handleInputCheck(e) {
    const valueCheck = e.target.value;
    console.log(valueCheck);
    this.setState({
      active: !this.state.active
    });

  }

  handleSubmitClick(e) {
    e.preventDefault();
    console.log(this.state);
  

    //Aquí se pondrá la modificación al servidor donde deseamos ingresar la información

    fetch('//localhost:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
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
      <div className="w100">
        <div className="w80 center">
          <div className="space"></div>
          <div className="formulario center">
            <form>
              <h3>Alumno:</h3>
              <div className="w50 left"><input id="name" class="name" type="text" value={ this.state.name } onChange={ this.handleInputChange } placeholder="Nombre" /></div>
              <div className="w50 left"><input id="lastname" class="name" type="text" value={ this.state.lastname } onChange={ this.handleInputChange } placeholder="Apellido" /></div>
              <div className="w50 left"><input id="country" class="name" type="text" value={ this.state.country } onChange={ this.handleInputChange } placeholder="Pais" /></div>
              <div className="w50 left"><input id="city" class="name" type="text" value={ this.state.city } onChange={ this.handleInputChange } placeholder="Ciudad" /></div>
              <div className="w50 left"><input id="postalcode" class="name" type="text" value={ this.state.postalcode} onChange={ this.handleInputChange } placeholder="Código Postal" /></div>
              <div className="w50 left"><input id="phone" class="name" type="number" value={ this.state.phone} onChange={ this.handleInputChange } placeholder="Teléfono" /></div>
              <div class="w100"><input id="address" class="address" type="text" value={ this.state.address} onChange={ this.handleInputChange } placeholder="Dirección" /></div>
              <h3>Nueva cuenta:</h3>
              <div className="w50 left"><input required id="email" class="name" type="email" value={ this.state.email } onChange={ this.handleInputChange } placeholder="Email" /></div>
              <div className="w50 left"><input required id="user" class="name" type="text" value={ this.state.user } onChange={ this.handleInputChange } placeholder="Usuario" /></div>
              <div className="w50 left"><input id="password" class="name" type="password" value={ this.state.password } onChange={ this.handleInputChange } placeholder="Contraseña" /></div>
              {/* <div className="w50 left"><input id="password" class="name" type="password" value={ this.state.passwordconfirm } onChange={ this.handleInputChange } placeholder="Confirmar Contraseña" /></div> */}
              <div className="space left"></div>
              <div className="w100 left">Activo: <input id="active" type="checkbox" value={ this.state.active} onChange={ this.handleInputCheck } /></div>
              <div className="space left"></div>
              <div className="w100 left"><input type="submit" class="button" onClick={ this.handleSubmitClick }/></div>
            </form>
          </div>
          <div className="space"></div>
        </div>
      </div>
    );
  };
}

export default Formulario;
