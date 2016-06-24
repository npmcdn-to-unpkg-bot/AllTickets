


var name; //variable donde tu guardas el usuario, está fuera para que sea global.
$('.button').on('click', function(event){
    event.preventDefault();
    name = $('#email').val(); //del input
    var password = $('#password').val();//del input
    var user = "";// es de json
    var userPassword = ""; //es el de json, dos porque tengo dos, una en el input otra en el jason, y tienen que coincidir
    $.ajax({
        type: 'GET',
        url: "usuarios.jsonp",
        dataType: "jsonp",
        jsonpCallback: 'callback',
        contentType:"application/json",
        crossDomain: true,
        // success: function (response) {
//             while(name == user && password == userPassword){
//     window.location="index.html";
//     if(name != user && password != userPassword){
//         alert('POST failed.');
//     }
// };
        success: function(json) {
            var found = false;
           for (i = 0; i < json.users.length; i++) {
               if (name === json.users[i].name && password === json.users[i].password) {
                   window.location.href = "inicio.html";
                   found = true;
               }
           };
           if (found === true){
           } else {
            $('#mal').text('E-mail o contraseña incorrectos');
           }
       },
            // for (var i = response.length - 1; i >= 0; i--) {
            //     user = response[i].name; //Name con mayúscula porque lo cojo del json
            //     userPassword = response[i].password;
            //     if(name == user && password == userPassword){
            //         window.location="index.html";
            //     } else {
            //         alert('POST failed.');
            //         console.error("error!");
            //     };
            // };
            // console.log("in");
        error: function (error) {
            
        }
    });
});

//para sessionStorage//
$('#boton').on('click', function(){
  var nombre = $('#email').val();
  var contraseña = $('#password').val();
  window.sessionStorage.setItem("user", JSON.stringify(nombre)); //para convertirlo en un string
});
//sesion storage

// Empieza Masonry:


    // var container = document.querySelector('.contenido');
    // var msnry = new Masonry( container, {
    //   // options
    //   itemSelector: '.card'
    // });

//Acaba Masonry


//texto desplegable

$('dl dd').hide();
       $('dl dt').click(function(){
          if ($(this).hasClass('activo')) {
               $(this).removeClass('activo');
               $(this).next().slideUp();
          } else {
               $('dl dt').removeClass('activo');
               $(this).addClass('activo');
               $('dl dd').slideUp();
               $(this).next().slideDown();
          }
       });

//acaba texto desplegable











