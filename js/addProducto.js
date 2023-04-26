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
  const imageInput = document.getElementById('image');
const previewImg = document.getElementById('preview');

imageInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      previewImg.setAttribute('src', reader.result);
    });
    reader.readAsDataURL(file);
  }
});


  Swal.fire({
    title: '¡Producto agregado!',
    titleColor:'#000000',
    icon: 'success',
    confirmButtonText: "Aceptar",
    confirmButtonColor: '#000000',
    confirmButtonsize: '20px',
    confirmButtonClass: 'custom-confirm-button-class' ,
    imageUrl: '/img/14.png',
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })  

  form.reset(); 
  // Opcional: resetear el formulario
});
//then((message /* alert(message) */) =>
  
      
    