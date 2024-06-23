document.getElementById('toggle-button').addEventListener('click', function () {
    var navbarLinks = document.getElementById('navbar-links');
    navbarLinks.classList.add('active');
  });

  document.getElementById('close-button').addEventListener('click', function () {
    var navbarLinks = document.getElementById('navbar-links');
    navbarLinks.classList.remove('active');
  });

  var carouselIndex = 0;
  var carouselImages = document.querySelectorAll('#carousel img');
  var totalImages = carouselImages.length;

  function showNextImage() {
    carouselImages[carouselIndex].style.display = 'none';
    carouselIndex = (carouselIndex + 1) % totalImages;
    carouselImages[carouselIndex].style.display = 'block';
  }

  // Initialize carousel
  for (var i = 1; i < totalImages; i++) {
    carouselImages[i].style.display = 'none';
  }

  // Automatically slide images every 3 seconds
  setInterval(showNextImage, 10000);