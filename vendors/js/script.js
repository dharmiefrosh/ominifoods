$(document).ready(function(){

  $('.sticky').hide();

  $(function () {
    $(window).scroll(function(){

        if($(this).scrollTop()>200){
          $('.sticky').slideDown();
        }else{
          $('.sticky').slideUp();
        }
    });
  });


  
})
