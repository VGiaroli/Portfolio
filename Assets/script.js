function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  // ARROW UP------------
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('a.scroll-top').fadeIn('slow');
        } else {
            $('a.scroll-top').fadeOut('slow');
        }
    });

    $('a.scroll-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
    });
});



