// Acordion Footer
$('.accordion__header').click(function (e) {
  e.preventDefault();
  var currentIsActive = $(this).hasClass('is-active');
  $(this).parent('.accordion').find('> *').removeClass('is-active');
  if (currentIsActive != 1) {
    $(this).addClass('is-active');
    $(this).next('.accordion__body').addClass('is-active');
  }
});

// Mobile Menu
function mobileMenuOpen() {
  let x = document.getElementById('mobileLinks');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
  } else {
    x.style.display = 'flex';
  }
}
console.log(mobileMenuOpen);
