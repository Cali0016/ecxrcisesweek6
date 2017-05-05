$(document).ready(function(){
  $(".button1").click(function(){
    $("img").fadeToggle();

  })
  $(".button2").click(function(){
    $("img").slideToggle("slow");
  })
  $("h1").dblclick(function(){
    $(this).toggleClass("change");
  })
  $(".button3").click(function(){
    $("ul").prepend("<li>Draganball</li>");
  })
 $(".hover").hover(function(){
   $(".hover").animate({left: '100px'})
 })
 $(".text").mouseleave(function(){
   $(".text").css("background-color", "Gold");
 })
  $(".red").click(function(){
    $(".red").fadeOut("slow")
  })
  $(".button4").hover(function(){
    $(".button4").hide("fast")
  })
})
