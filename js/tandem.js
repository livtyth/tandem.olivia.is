$(document).on("scroll", function(){
  var pixelsFromTop = $(document).scrollTop()
  console.log(pixelsFromTop)
  if(pixelsFromTop > 0) {
    $("footer").addClass("fade-in")
  } else {
    $("footer").removeClass("fade-in")
  }
})
