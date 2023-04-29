const formulario = document.getElementById('formulario');


formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  const usuario = formulario.usuario.value;
  const contrasena = formulario.contrasena.value;
  if (usuario === 'CodeMoon' && contrasena === 'Podcast1') {
   
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
// formulaio para unirlo con el back y que sea seguro
/*// Obtener los elementos HTML
const formulario = document.getElementById('formulario');
const usuarioInput = document.getElementById('InputUsuario');
const contrasenaInput = document.getElementById('InputContraseña');

// Agregar el evento de envío de formulario
formulario.addEventListener('submit', function (event) {
  // Evitar el envío del formulario
  event.preventDefault();

  // Obtener los valores del formulario
  const usuario = usuarioInput.value;
  const contrasena = contrasenaInput.value;

  // Validar los campos del formulario
  if (!usuario || !contrasena) {
    alert('Por favor ingrese su nombre de usuario y contraseña.');
    return;
  }

  // Realizar la petición AJAX para autenticar al usuario
  fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({
      usuario: usuario,
      contrasena: contrasena
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la autenticación');
    }
    return response.json();
  })
  .then(data => {
    // Si la autenticación es exitosa, redirigir al usuario a la página principal
    window.location.href = '/home';
  })
  .catch(error => {
    alert(error.message);
  });
});
*/