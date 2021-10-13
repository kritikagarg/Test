$(document).ready(function() { 

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#img1').attr('src','https://kritikagarg.github.io/Test/img/1.jpg')
  $('#img2').attr('src','https://kritikagarg.github.io/Test/img/2.jpg') 
  $('#img3').attr('src','https://kritikagarg.github.io/Test/img/3.jpg') 

  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 4000);

// var images=["1.jpg","2.jpg","3.jpg"];

// var cur_img=0;

// function get_img() {
//     if (cur_img < images.length) {
//         document.getElementById("img").src= "https://kritikagarg.github.io/Test/img/" + images[cur_img];
//         cur_img = cur_img + 1;
//     }
// }

// $("#slideshow > div:gt(0)").hide();

// setInterval(function() { 
//     // get_img()
//   $('#slideshow > div:first')
//     .fadeOut(1000)
//   .next()
//   .fadeIn(1000)  
//   .next()
//   .fadeIn(1000)
//   .end()
//   .appendTo('#slideshow');
// }, 3000);




 });


