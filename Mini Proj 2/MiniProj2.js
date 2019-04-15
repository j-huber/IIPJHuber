$(function(){
    var choice1 = "null1";
    var choice2 = "null2";
    var gameEnd = false;

    $("#newGame").on("click", function()
    {
        $("#container").find().animate({opacity: '1'}, "slow");
    });
    
    
    while (gameEnd == false) // loop to keep going until end condition hit
    {
        $("#1").on("click", function()
        {
            $("#1").animate({opacity: '1'}, "slow");
            if(choice1 == "null1") // if first choice then set image text to choice 1
            {
                choice1 = $("#1").attr("src");
            }
            else  // if second choice then set image text to choice 2
            {
                choice2 = $("#1").attr("src");
                matchingFunction(choice1,choice2); // check to see if first choice matches second choice
            }
            
        });
        $("#2").on("click", function()
        {
            $("#2").animate({opacity: '1'}, "slow");
            if(choice1 == "null1")
            {
                choice1 = $("#2").attr("src");
            }
            else
            {
                choice2 = $("#2").attr("src");
                matchingFunction(choice1,choice2); 
            }
        });    
        $("#3").on("click", function()
        {
            $("#3").animate({opacity: '1'}, "slow");
            if(choice1 == "null1")
            {
                choice1 = $("#3").attr("src");
            }
            else
            {
                choice2 = $("#3").attr("src");
                matchingFunction(choice1,choice2); 
            }
           
        });
        $("#4").on("click", function()
        {
            $("#4").animate({opacity: '1'}, "slow");
        });
        $("#5").on("click", function()
        {
            $("#5").animate({opacity: '1'}, "slow");
        });
        $("#6").on("click", function()
        {
            $("#6").animate({opacity: '1'}, "slow");
        });
        $("#7").on("click", function()
        {
            $("#7").animate({opacity: '1'}, "slow");
        });
        $("#8").on("click", function()
        {
            $("#8").animate({opacity: '1'}, "slow");
        });
        $("#9").on("click", function()
        {
            $("#9").animate({opacity: '1'}, "slow");
        });
        $("#10").on("click", function()
        {
            $("#10").animate({opacity: '1'}, "slow");
        });
        $("#11").on("click", function()
        {
            $("#11").animate({opacity: '1'}, "slow");
        });
        $("#12").on("click", function()
        {
            $("#12").animate({opacity: '1'}, "slow");
        });
   
    
        matchingFunction(choice1, choice2)
        {
            if (choice1 == choice2) //correct match 
            {
                    
                    choice1 = "null1"; // reset variables to "null"
                    choice2 = "null2";
            }
            else //incorrect match
            {
                
                choice1 = "null1";
                choice2 = "null2";
            }
        }
    }




});