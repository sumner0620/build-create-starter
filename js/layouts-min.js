function adjustHeight(){var e=$(".site-header"),s=e.height();$(".fs-full-screen").css("min-height","calc(100vh - "+s+"px)")}var $=jQuery;$(document).ready(function(){$(".owl-carousel").owlCarousel({loop:!0,margin:50,autoplay:!0,autoplayTimeout:1500,autoplayHoverPause:!0,center:!0,responsiveClass:!0,responsive:{0:{items:1},600:{items:3},1e3:{items:5}}}),$(".fs-full-screen").length&&adjustHeight()}),jQuery(document).ready(function($){$(".checklist li").prepend('<i class="fa fa-check"></i>')});