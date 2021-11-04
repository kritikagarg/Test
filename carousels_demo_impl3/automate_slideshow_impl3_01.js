$(document).ready(function() { 

  $("#slideshow > div:gt(0)").hide();
  
  setInterval(function() { 

    $('#img1').attr('src','https://www.cs.odu.edu/~cs_hjaya002/img/1.jpg?'+ Math.floor(Date.now() / 100000));
    $('#img2').attr('src','https://www.cs.odu.edu/~cs_hjaya002/img/2.jpg?'+ Math.floor(Date.now() / 100000)); 
    $('#img3').attr('src','https://www.cs.odu.edu/~cs_hjaya002/img/3.jpg?'+ Math.floor(Date.now() / 100000)); 
      
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');

  }, 1000);
  
});
