const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  const usuario = formulario.usuario.value;
  const contrasena = formulario.contrasena.value;
  if (usuario === 'CodeMoon' && contrasena === 'Jorgos123') {
    // Acceso permitido
    window.location.href = 'productos.html'; // Cambiar esto por la página a la que quieres redirigir
    formulario.reset();
  } else {
    // Acceso denegado
    alert('Usuario o contraseña incorrectos');
  }
});