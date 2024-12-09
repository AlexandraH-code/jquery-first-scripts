$(document).ready(function() {
    $("#stream1_btn").on(function() {
        // show effect. can use hide the same way
        /**$(".stream1").show();
        $(".stream1").show('slow');
        $(".stream1").show('medium');
        $(".stream1").show('fast');
        $(".stream1").show(1000);**/
        
        // toggle
        /*$(".stream1").toggle();
        $(".stream1").toggle(1000);*/
        
        // slideDown, can use slideUp and slideToggle, fadeIn, fadeOut, fadeToggle the same way 
        /*$(".stream1").slideDown();
        $(".stream1").slideDown(1000);*/
        
        // fadeTo
        /*$(".stream1").fadeTo(1000, 0.5); //first parameter time in milliseconds, second parameter opacity */
        
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 