//JQ DOM Traversal

   
    //HomeWork
    //next
   //prev
   //closest
   //first
   //last
   //filter
   //not   
   //slice


   $(function(){  //$(document).ready(function(){})
    
   console.log("hello");
   $("#button1").on("click",function(){
      $("#grandpa").next().css("color","purple");      
   });

   $("#button2").on("click",function(){
      $("#parent").prev().css("color","red");
   });

   $("#button3").on("click",function(){
      $("div").closest("#grandpa").css("color","green");
   });

   $("#button4").on("click",function(){
      $("p").first().css("color","pink");
   });

   $("#button5").on("click",function(){
      $("p").last().css("color","blue");
   });

   $("#button6").on("click",function(){
      $("a").filter("#tric").css("color", "orange");
   });

   $("#button7").on("click",function()
   {
        $("p").not("#p2").css("color","yellow");
    });

    $("#button8").on("click",function()
    {
        $("p").slice(1,2).css("font-size","1.5em");
    });
   
})