$(document).ready(function() { 

  $("#slideshow > div:gt(0)").hide();
  
  setInterval(function() { 

    $('#img1').attr('src','https://kritikagarg.github.io/Test/img/1.jpg?khkhkh'+ Math.floor(Date.now() / 1000))+'kjkefbrj';
    $('#img2').attr('src','https://kritikagarg.github.io/Test/img/2.jpg?khkhk'+ Math.floor(Date.now() / 1000))+'jhvfhjbhjb'; 
    $('#img3').attr('src','https://kritikagarg.github.io/Test/img/3.jpg?kghjkghj'+ Math.floor(Date.now() / 1000))+'hgyuyuh'; 
      
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');

  }, 4000);
  
});