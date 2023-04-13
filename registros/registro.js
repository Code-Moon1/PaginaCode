const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  const usuario = formulario.usuario.value;
  const contrasena = formulario.contrasena.value;
  if (usuario === 'Victor' && contrasena === 'Jorgos123') {
    // Acceso permitido
    alert('Bienvenido ' + usuario);
    formulario.reset();
  } else {
    // Acceso denegado
    alert('Usuario o contraseña incorrectos');
  }
  if (usuarioEncontrado) {
    Swal.fire({
      title: "¡Bienvenidos!",
      icon: "success",
      confirmButtonClass: "custom-confirm-button-class",
      confirmButtonColor: "#e23d82",
      imageUrl: '/img/14.png',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });





    
    // Redireccion en caso exitoso
    setTimeout(() => {
      window.location.href = "/#Diseño";
    }, 2000);
  } else {
    //Mostrar mensaje de error si la validacion falla
    alertError.innerHTML =
      "El correo electrónico o la contraseña son incorrectos.";
    alertError.style.display = "block";
    setTimeout(() => {
      alertError.style.display = "none";
    }, 2000);
  }
  
});

 
