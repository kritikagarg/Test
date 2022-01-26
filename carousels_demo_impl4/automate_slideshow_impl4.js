$(document).ready(function() { 

  $("#slideshow > div:gt(0)").hide();
  var count1 = 0;
  var count2 = 0;

  // function myCount() {
  //     // your original if-else wasn't allowing count to increment past 1
  //     // if (count > 10) {
  //     //     count = 0;
  //     // }
  //     //$('.count').text(count);
  //     // increment count regardless of its current value
  //     count++;
  // }

  setInterval(function() { 

    $('#img1').attr('src','./img/cat_'+ count1++ +'.jpg');
    $('#img2').attr('src','./img/dog_'+ count2++ +'.jpg'); 
      
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');

  }, 4000);
  
});