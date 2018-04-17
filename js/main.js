/*var userModelSchema = new Schema({
    name : String,
    lastname : String,
    country : String,
    city : String,
    postalCode : Number,
    address : String,
    phone : Number,
    email : String,
    user : String,
    password : String,
    active : Boolean
  })*/

var objUser = {};

function saveUser() {
    var nombre = $('#name').val();
    var apellido = $('#lastname').val();
    var pais = $('#country').val();
    var ciudad = $('#city').val();
    var codigoPostal = $('#postalCode').val();
    var direccion = $('#address').val();
    var telefono = $('#phone').val();
    var correo = $('#email').val();
    var usuario = $('#user').val();
    var password = $('#password').val();
    var activo = $('#active').val();

    codigoPostal = parseInt(codigoPostal);
    telefono = parseInt(telefono);

    console.log(codigoPostal);
    console.log(telefono);

    objUser = {
        name : nombre,
        lastname : apellido,
        country : pais,
        city : ciudad,
        postalCode : codigoPostal ,
        address : direccion,
        phone : telefono,
        email : correo,
        user : usuario,
        password : password,
        active : activo
    } 
    console.log(objUser)
    var sendData = JSON.stringify(objUser)

    $.ajax({
      method: "POST",
      url: "https://geekshubs-b97d3.firebaseio.com/users.json",
      data: sendData,
      success: function(response) {
        alert("Usuario creado" + response.data);
        }
    });
}