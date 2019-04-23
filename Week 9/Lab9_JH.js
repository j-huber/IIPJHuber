$(function(){
var blinkVar = true;
$("#upBtn").on("click", function()
{
    $("#box").stop();
    $("#box").animate({top: '0px'}, "slow");
});
$("#downBtn").on("click", function()
{
    $("#box").stop();
    $("#box").animate({top: '349px'}, "slow");
});
$("#leftBtn").on("click", function()
{
    $("#box").stop();
    $("#box").animate({left: '0px'}, "slow");
});
$("#rightBtn").on("click", function()
{
    $("#box").stop();
    $("#box").animate({left: '349px'}, "slow");
});
$("#fadeoutBtn").on("click", function()
{
    $("#box").stop();
    $("#box").animate({opacity: '0'}, "slow");
    
});
$("#fadeinBtn").on("click", function()
{
    $("#box").stop();
    $("#box").animate({opacity: '1'}, "slow");
});
$("#blinkBtn").on("click", function()
{
    $("#box").stop();
    function blinkInterval()
    {
        $("#box").animate({opacity: '0'}, "slow");
        $("#box").animate({opacity: '1'}, "slow");
    }
    while (blinkVar == true)
    {
        $("box").setInterval(blinkInterval(), 1000);
    }
});
$("#resetBtn").on("click", function()
{
    $("#box").stop();
    blinkVar = false;
    $("#box").removeAttr("style");
});
});