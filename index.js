$(document).ready(function () {
  // Navbar
  $(".open-btn").click(function () {
    $(".navbar").toggleClass("close-nav");
  });
  // Navbar

  // Modal
  $(".modal-btn").click(function () {
    $(".modal").toggleClass("close-modal");
  });

  $(".close-modal-btn").click(function () {
    var name = $("#nameInput").val();
    var message = $("#messageTextarea").val();

    if (name === "") {
      return false;
    }

    if (message === "") {
      return false;
    }

    $(".modal").toggleClass("close-modal");
  });

  $(".btn-send").click(function () {
    var name = $("#nameInput").val();
    var message = $("#messageTextarea").val();

    if (name === "") {
      return false;
    }

    if (message === "") {
      return false;
    }

    $(".modal-success").toggleClass("close-success-modal");

    setTimeout(function () {
      $(".modal-success").toggleClass("close-success-modal");
    }, 1000);
  });
  // Modal

  // Dropdown FAQ
  $(".dropdown-faq").click(function () {
    $(this).find(".icon-rotate").toggleClass("rotate-90");
    $(this).next(".dropdown-hidden").slideToggle();
  });
  // Dropdown FAQ

  // Scroll on Top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scrollToTop").fadeIn();
    } else {
      $("#scrollToTop").fadeOut();
    }
  });

  $("#scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  // Animate On Scroll Screen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(entry.target).addClass("show-in");
      }
    });
  });

  $(".hidden-down-top").each(function (index, el) {
    observer.observe(el);
  });
  $(".hidden-top-down").each(function (index, el) {
    observer.observe(el);
  });
  $(".hidden-right-left").each(function (index, el) {
    observer.observe(el);
  });
  $(".hidden-left-right").each(function (index, el) {
    observer.observe(el);
  });
  // Animate On Scroll Screen

  // filter project
  $(".filter-buttons div").click(function () {
    $(".filter-buttons div").removeClass("underline !text-blue-500");

    $(this).addClass("underline !text-blue-500");

    var filter = $(this).data("filter");
    $(".filter-item").hide();
    if (filter === "all") {
      $(".filter-item").show();
    } else {
      $(".filter-item." + filter).show();
    }
  });
});
