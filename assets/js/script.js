// EFEECTO SMOOTH SCROLLING
$("a[href^='#']").click(function (event) {
  event.preventDefault();

  var location = $(this.hash);
  var offset = 0;
  var speed = 1000;

  $('html,body').animate(
    {
      scrollTop: location.offset().top - offset,
    },
    speed
  );
  return false;
});

// EFECTO TOOLTIP EN FONT AWESOME
$('[data-toggle="tooltip"]').mouseover(function () {
  $(this).tooltip();
});

// EFECTO DESAPARCE Y APARECE TEXTO DE CARDS
$('.card-title').click(function () {
  $('.card-text').toggle(280);
});
// EFECTO CAMBIAR  COLOR EN FOOTER "VIAJES CHILE"

$('[id="leftfooter"]').on('dblclick', function () {
  $(this).css('color', 'red');
});

// EFECTO ALERT EN TITULO DE SECCIONES

$('[id="sec01"]').click(function () {
  alert('SOMOS EL VIAJE A TUS SUEÑOS...');
});

$('[id="sec02"]').click(function () {
  alert('LUGARES DE ENSUEÑO...');
});
