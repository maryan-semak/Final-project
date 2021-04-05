$(document).ready(function() {
    $(window).scroll(function(event) {
       var s =$(this).scrollTop();
       var v =$(this).outerWidth();
       var h =$('.content').outerHeight();
       var h_b =$('.parallax').outerHeight();
       var p = s/h*100;
       var p_b = s/h_b*100;
       var o = 1-1/100*p_b ;
      
       var z_1 =1+(v/10000*p_b); 
       $('.parallax__fog').css('transform', 'scale('+z_1+')');
       $('.parallax__fog').css('opacity', o);

       var z_2 =1+(v/5000000*p);
       $('.parallax__mountain_1').css('transform', 'scale('+z_2+')');

       var hr=v/2000*p_b;
       var z_3=1+(v*0.000005*p_b);
       $('.parallax__mountain_2').css('transform', 'translate3d('+hr+'px,0,0)  scale('+z_3+')');

      var hr_1=v/1500*p_b;
       var z_4=1+(v*0.00001*p_b)
      $('.parallax__mountain_3').css('transform', 'translate3d('+hr_1+'px,0,0)  scale('+z_4+')');
    });
});