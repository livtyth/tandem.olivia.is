// Fade desktop navigation in and out

$(document).on("scroll", function(){
  var pixelsFromTop = $(document).scrollTop()
  console.log(pixelsFromTop)
  if(pixelsFromTop > 0) {
    $("footer").addClass("fade-in")
  } else {
    $("footer").removeClass("fade-in")
  }
})

$(document).on("scroll", function(){
  var pixelsFromTop = $(document).scrollTop()
  console.log(pixelsFromTop)
  if(pixelsFromTop > 0) {
    $("logo-bar").addClass("fade-out")
  } else {
    $("logo-bar").removeClass("fade-out")
  }
})


// Trigger mobile navigation toggle

$(".nav-trigger").on("click", function() {
  $("#mobile-nav").slideToggle(600)
})
