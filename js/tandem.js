// Tap into the scroll event on page
// Find out how far we are from the top of the page
// Fade in footer at pre-determined point

// This will scroll in when you scroll past 100% of the screen

// $(document).on("scroll", function(){
//   // console.log("we have scrolled")
//   var pixelsFromTop = $(document).scrollTop()
//   // console.log(pixelsFromTop)
//   if(pixelsFromTop > $(window).height ()
// ){;
//     $("footer").fadeIn()
//   } else {
//     $("footer").fadeOut()
//   }
// });

$(document).on("scroll", function(){
  // console.log("we have scrolled")
  var pixelsFromTop = $(document).scrollTop()
  console.log(pixelsFromTop)
  if(pixelsFromTop > 20) {
    $("footer").addClass("fade-in")
  } else {
    $("footer").removeClass("fade-in")
  }
})
