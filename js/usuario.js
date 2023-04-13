const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  const usuario = formulario.usuario.value;
  const contrasena = formulario.contrasena.value;
  if (usuario === 'CodeMoon' && contrasena === 'Podcast1') {
    Swal.fire({
      title: "¡Bienvenidos!",
      titlecolor:"#000000",
    
      confirmButtonClass: "custom-confirm-button-class",
      confirmButtonColor: "#000000",
        imageUrl: '/img/16.png',
    });
    // Acceso permitido
    setTimeout(() => {
    window.location.href = 'productos.html'; // Cambiar esto por la página a la que quieres redirigir
    formulario.reset();
    }, 2000);
  } else {
    // Acceso denegado
    Swal.fire({
      title: "Usuario o contraseña incorrectos",
      icon: "error",
      confirmButtonClass: "custom-confirm-button-class",
      confirmButtonColor: "#000000",
        imageUrl: '/img/16.png',
       
    });
  }
});
/*if (codemoon) {
  Swal.fire({
    title: "¡Bienvenidxs!",
    icon: "success",
    confirmButtonClass: "custom-confirm-button-class",
    confirmButtonColor: "#e23d82",
      imageUrl: '/fotos/logo22.png',
  });
  
  // Redireccion en caso exitoso
  setTimeout(() => {
    window.location.href = "/index.html";
  }, 2000);

  //Mostrar mensaje de error si la validacion falla
    alertError.innerHTML =
      "El correo electrónico o la contraseña son incorrectos.";
    alertError.style.display = "block";
    setTimeout(() => {
      alertError.style.display = "none";
    }, 2000);
  }
});
}*/