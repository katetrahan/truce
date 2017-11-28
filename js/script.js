$(document).ready(function() {
  $("img#cat").click(function(){
    $("ul#meow").prepend("<li>meow</li>");
    $("ul#bark").prepend("<li>WOOOF!</li>");
    $("li").addClass("border");
    $("ul#meow").children("li").first().click(function() {
      $(this).remove();
    })
    $("ul#bark").children("li").first().click(function() {
      $(this).remove();
    })
  })
  $("img#dog").click(function(){
    $("ul#meow").prepend("<li>grrRRRRR</li>");
    $("ul#bark").prepend("<li>WOOF!</li>");
    $("li").addClass("border");
    $("ul#meow").children("li").first().click(function() {
      $(this).remove();
    })
    $("ul#bark").children("li").first().click(function() {
      $(this).remove();
    })
  })
  $("button#truce").click(function(){
    $(".combat").toggle();
    $(".peace").toggle();
  })
});
