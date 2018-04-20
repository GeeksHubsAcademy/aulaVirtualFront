
var objUser = {};



$(document).ready(function(){
    $(".SecondPart").hide();
    $("#primera").click(function(){
        $(".FirstPart").hide(400);
        $(".SecondPart").show(400);
        $("li.is-active").removeClass("is-active").next().addClass("is-active");
    });

    $("li").click(function(){
        var paso = $(this);
        var indexPaso= paso.index();
        if (indexPaso === 0) {
            $("li").eq(0).addClass("is-active");
            $("li").eq(1).removeClass("is-active");
            $(".SecondPart").hide(400);
            $(".FirstPart").show(400);
        } else {
            $("li").eq(1).addClass("is-active");
            $("li").eq(0).removeClass("is-active");
            $(".FirstPart").hide(400);
            $(".SecondPart").show(400);
        };

    });
});


function checkUser(){

    var user = $("#user-mail").val();
    var passwd = $('#user-password').val();
    
objUserChecked ={

    usuario: user,
    password: passwd
}
console.log(objUserChecked);
}


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
        $(".FirstPart .SecondPart").addClass("hidden");
        $(".mensajeCorrecto").removeClass("hidden");
        }
    });
}