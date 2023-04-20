const form = document.getElementById('product-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('InputNombre').value;
  const price = document.getElementById('InputPrecio').value;
  const summary = document.getElementById('InputResumen').value;
  const image1 = document.getElementById('InputUrlImg1').value;
  const image2 = document.getElementById('InputUrlImg2').value;
  const image3 = document.getElementById('InputUrlImg3').value;

  sessionStorage.setItem('InputNombre', name);
  sessionStorage.setItem('InputPrecio', price);
  sessionStorage.setItem('InputResumen', summary);
  sessionStorage.setItem('InputUrlImg1', image1);
  sessionStorage.setItem('InputUrlImg2', image2);
  sessionStorage.setItem('InputUrlImg3', image3);

  alert('El formulario se ha llenado correctamente.');

  form.reset(); 
  // Opcional: resetear el formulario
});