$(document).ready(function(){
    $("#btn1").on("click",function(){
        $(".wrapperDiv").toggle();
    });
    $("#btn2").click(function(){
        $("#1").html("one")
        .css({"background-color": "black","color":"white"});
        $("#2").html("two")
        .css({"background-color":"white","color":"black" });
        $("#3").html("three")
        .css({"background-color": "black","color":"white"});
        $("#4").html("four")
        .css({"background-color":"white","color":"black" });
    });
    $(".wrapperDiv").mouseenter(function(){
        $(this).removeAttr("style");
        $(this).addClass("active");
        
    });
    $(".wrapperDiv").on("mouseout",function(){
        $(this).removeClass("active");
        $(this).addClass("wrapperDiv");
    });

});


