(function ($) {

  "use strict";

      // Función para detectar el tema del sistema
      function detectSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark'; // Si el tema oscuro es preferido por el sistema
        } else {
            return 'light'; // Si el tema claro es preferido por el sistema (o no hay preferencia)
        }
      }

      // Aplicar el tema por defecto al cargar la página
      function applyDefaultTheme() {
          var systemTheme = detectSystemTheme();
          if (systemTheme === 'dark') {
              $('body').addClass('dark-mode');
              $('.color-mode-icon').addClass('active');
          } else {
              $('body').removeClass('dark-mode');
              $('.color-mode-icon').removeClass('active');
          }
      }

      // Ejecutar al cargar la página
      $(document).ready(function() {
          //applyDefaultTheme(); // Aplicar tema por defecto
      });

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
