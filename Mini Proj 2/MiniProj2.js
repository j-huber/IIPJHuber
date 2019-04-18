$(function(){
    var choice1 = "null1";
    var choice2 = "null2";
    
    

    $("#newGame").on("click", function()
    {
        $("#container").find("img").animate({opacity: '0'}, "slow");
        $("#messages").html("");
        choice1 = "null1";
        choice2 = "null2";
    });
    
    
        $("#1").on("click", function()
        {
            
            $("#1 img").animate({opacity: '1'}, "slow");
            if(choice1 == "null1") // if first choice then set image text to choice 1
            {
                choice1 = $("#1 img").attr("src");
               
            }
            else  if (choice1 != "null1" && choice2 == "null2") // if second choice then set image text to choice 2
            {
                choice2 = $("#1 img").attr("src");
                
                matchingFunction(choice1,choice2); // check to see if first choice matches second choice
                choice1 = "null1";
                choice2 = "null2";
            }

            console.log(choice1 +" = c1" + "    " + choice2 +" = c2 ");
            
        });
        $("#2").on("click", function()
        {
            $("#2 img").animate({opacity: '1'}, "slow");
            if(choice1 == "null1")
            {
                choice1 = $("#2 img").attr("src");
            }
            else if (choice1 != "null1" && choice2 == "null2")
            {
                choice2 = $("#2 img").attr("src");
                matchingFunction(choice1,choice2);
                choice1 = "null1";
                choice2 = "null2"; 
            }
            console.log(choice1 +" = c1" + "    " + choice2 +" = c2 ");
        });    
        $("#3").on("click", function()
        {
            $("#3 img").animate({opacity: '1'}, "slow");
            if(choice1 == "null1")
            {
                choice1 = $("#3 img").attr("src");
            }
            else if (choice1 != "null1" && choice2 == "null2")
            {
                choice2 = $("#3 img").attr("src");
                matchingFunction(choice1,choice2);
                choice1 = "null1";
                choice2 = "null2"; 
            }
            console.log(choice1 +" = c1" + "    " + choice2 +" = c2 ");
           
        });
        $("#4").on("click", function()
        {
            $("#4 img").animate({opacity: '1'}, "slow");
            if(choice1 == "null1")
            {
                choice1 = $("#4 img").attr("src");
            }
            else if (choice1 != "null1" && choice2 == "null2")
            {
                choice2 = $("#4 img").attr("src");
                matchingFunction(choice1,choice2);
                choice1 = "null1";
                choice2 = "null2"; 
            }
            console.log(choice1 +" = c1" + "    " + choice2 +" = c2 ");
        });
        $("#5").on("click", function()
        {
            $("#5 img").animate({opacity: '1'}, "slow");
            if(choice1 == "null1")
            {
                choice1 = $("#5 img").attr("src");
            }
            else if (choice1 != "null1" && choice2 == "null2")
            {
                choice2 = $("#5 img").attr("src");
                matchingFunction(choice1,choice2);
                choice1 = "null1";
                choice2 = "null2"; 
            }
            console.log(choice1 +" = c1" + "    " + choice2 +" = c2 ");
        });
        $("#6").on("click", function()
        {
            $("#6 img").animate({opacity: '1'}, "slow");
            if(choice1 == "null1")
            {
                choice1 = $("#6 img").attr("src");
            }
            else if (choice1 != "null1" && choice2 == "null2")
            {
                choice2 = $("#6 img").attr("src");
                matchingFunction(choice1,choice2);
                choice1 = "null1";
                choice2 = "null2"; 
            }
            console.log(choice1 +" = c1" + "    " + choice2 +" = c2 ");
        });
        $("#7").on("click", function()
        {
            $("#7 img").animate({opacity: '1'}, "slow");
            if(choice1 == "null1")
            {
                choice1 = $("#7 img").attr("src");
            }
            else if (choice1 != "null1" && choice2 == "null2")
            {
                choice2 = $("#7 img").attr("src");
                matchingFunction(choice1,choice2);
                choice1 = "null1";
                choice2 = "null2"; 
            }
            console.log(choice1 +" = c1" + "    " + choice2 +" = c2 ");
        });
        $("#8").on("click", function()
        {
            $("#8 img").animate({opacity: '1'}, "slow");
            if(choice1 == "null1")
            {
                choice1 = $("#8 img").attr("src");
            }
            else if (choice1 != "null1" && choice2 == "null2")
            {
                choice2 = $("#8 img").attr("src");
                matchingFunction(choice1,choice2);
                choice1 = "null1";
                choice2 = "null2"; 
            }
            console.log(choice1 +" = c1" + "    " + choice2 +" = c2 ");
        });
        $("#9").on("click", function()
        {
            $("#9 img").animate({opacity: '1'}, "slow");
            if(choice1 == "null1")
            {
                choice1 = $("#9 img").attr("src");
            }
            else if (choice1 != "null1" && choice2 == "null2")
            {
                choice2 = $("#9 img").attr("src");
                matchingFunction(choice1,choice2);
                choice1 = "null1";
                choice2 = "null2"; 
            }
            console.log(choice1 +" = c1" + "    " + choice2 +" = c2 ");
        });
        $("#10").on("click", function()
        {
            $("#10 img").animate({opacity: '1'}, "slow");
            if(choice1 == "null1")
            {
                choice1 = $("#10 img").attr("src");
            }
            else if (choice1 != "null1" && choice2 == "null2")
            {
                choice2 = $("#10 img").attr("src");
                matchingFunction(choice1,choice2);
                choice1 = "null1";
                choice2 = "null2"; 
            }
            console.log(choice1 +" = c1" + "    " + choice2 +" = c2 ");
        });
        $("#11").on("click", function()
        {
            $("#11 img").animate({opacity: '1'}, "slow");
            if(choice1 == "null1")
            {
                choice1 = $("#11 img").attr("src");
            }
            else if (choice1 != "null1" && choice2 == "null2")
            {
                choice2 = $("#11 img").attr("src");
                matchingFunction(choice1,choice2);
                choice1 = "null1";
                choice2 = "null2"; 
            }
            console.log(choice1 +" = c1" + "    " + choice2 +" = c2 ");
        });
        $("#12").on("click", function()
        {
            $("#12 img").animate({opacity: '1'}, "slow");
            if(choice1 == "null1")
            {
                choice1 = $("#12 img").attr("src");
            }
            else if (choice1 != "null1" && choice2 == "null2")
            {
                choice2 = $("#12 img").attr("src");
                matchingFunction(choice1,choice2); 
                choice1 = "null1";
                choice2 = "null2";
            }
            console.log(choice1 +" = c1" + "    " + choice2 +" = c2 ");
        });
   
    
       function matchingFunction(choice1, choice2)
        {
            if (choice1 != "null1" && choice2 != "null2" && choice1 == choice2) //correct match 
            {
                $("#messages").html("");
                console.log("correct match");
                console.log(choice1 + "  " + choice2);
                choice1 = "null1"; // reset variables to "null"
                choice2 = "null2";
                $("#messages").append("Correct Match!");
                   
                    
            }
            else //incorrect match
            {
                $("#messages").html("");
                console.log("incorrect match");
                console.log(choice1 + "  " + choice2);
                $("#container").find("img[src$='"+choice1+"']").animate({opacity: '0'}, "slow");
                $("#container").find("img[src$='"+choice2+"']").animate({opacity: '0'}, "slow");
                $("#messages").append("Incorrect Match! Please try again!");
               
                
            }
           
            
        }
    




});