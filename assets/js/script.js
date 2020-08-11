$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 250) {
    nav
      .removeClass("bg-white", "text-primary")
      .addClass("bg-primary", "text-white");
  } else {
    nav
      .removeClass("bg-primary", "text-white")
      .addClass("bg-white", "text-primary");
  }
});
