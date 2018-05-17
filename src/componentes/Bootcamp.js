import React, { Component } from 'react';

// import './css/bootcamp.css';

class Bootcamp extends Component {
  constructor() {
    super();
    this.state = {
      bootcamp : '',
      codigobootcamp : '',
      year : '',
      country : '',
      city : '',
      address : '',
      contact : '',
      active : false
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
    // this.setState({
    //   name: '',
    //   lastname: '',
    //   postalcode: '',
    //   email: '',
    //   password: ''
    // });

    
    //
    //Aquí se pondrá la modificación al servidor donde deseamos ingresar la información
    //

    fetch('//localhost:3000/bootcamps', {
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
              <div className="w50 left"><input id="bootcamp" class="name" type="text" value={ this.state.bootcamp } onChange={ this.handleInputChange } placeholder="Bootcamp" /></div>
              <div className="w50 left"><input id="codigobootcamp" class="name" type="number" value={ this.state.codigobootcamp } onChange={ this.handleInputChange } placeholder="Código Bootcamp" /></div>
              <div className="w50 left"><input id="year" class="name" type="text" value={ this.state.year } onChange={ this.handleInputChange } placeholder="Año" /></div>
              <div className="w50 left"><input id="country" class="name" type="text" value={ this.state.country } onChange={ this.handleInputChange } placeholder="País" /></div>
              <div className="w50 left"><input id="city" class="name" type="text" value={ this.state.city } onChange={ this.handleInputChange } placeholder="Ciudad" /></div>
              <div className="w50 left"><input id="address" class="name" type="text" value={ this.state.address} onChange={ this.handleInputChange } placeholder="Dirección" /></div>
              <div class="w100"><input id="contact" class="address" type="text" value={ this.state.contact} onChange={ this.handleInputChange } placeholder="Contacto" /></div>
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

export default Bootcamp;
