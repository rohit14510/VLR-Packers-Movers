document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.img-container');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        // Show/hide projects based on filter
        projects.forEach(project => {
          if (filter === 'all' || project.getAttribute('data-category') === filter) {
            project.classList.add('active');
          } else {
            project.classList.remove('active');
          }
        });
      });
    });
  });




  document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});
// Splide Slider
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
    }).mount();
});

//Slider
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#Testimonials_splide', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
    }).mount();
});

const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('mainImage');

// Har thumbnail pe click event listener lagao
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    // Main image ka src update karo
    mainImage.src = thumbnail.src;
  });
});