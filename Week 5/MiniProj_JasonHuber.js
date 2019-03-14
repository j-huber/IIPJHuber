



function resetBoard()
{
    document.getElementById("0").innerHTML = "";
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
    document.getElementById("5").innerHTML = "";
    document.getElementById("6").innerHTML = "";
    document.getElementById("7").innerHTML = "";
    document.getElementById("8").innerHTML = "";
    document.getElementById("result").innerHTML = ""
}


function PopulateSquare(id)
{
    
    id.innerHTML = "X";
    var gameOver = false;
    if(document.getElementById("0").innerText == "X" && document.getElementById("1").innerText == "X" && document.getElementById("2").innerText == "X")
    {
        var result = document.getElementById("result");
        result.innerHTML = "X wins";
        gameOver = true;
    }
    if(document.getElementById("3").innerText == "X" && document.getElementById("4").innerText == "X" && document.getElementById("5").innerText == "X")
    {
        var result = document.getElementById("result");
        result.innerHTML = "X wins";
        gameOver = true;
    }
    if(document.getElementById("6").innerText == "X" && document.getElementById("7").innerText == "X" && document.getElementById("8").innerText == "X")
    {
        var result = document.getElementById("result");
        result.innerHTML = "X wins";
        gameOver = true;
    }
    if(document.getElementById("0").innerText == "X" && document.getElementById("3").innerText == "X" && document.getElementById("6").innerText == "X")
    {
        var result = document.getElementById("result");
        result.innerHTML = "X wins";
        gameOver = true;
    }
    if(document.getElementById("1").innerText == "X" && document.getElementById("4").innerText == "X" && document.getElementById("7").innerText == "X")
    {
        var result = document.getElementById("result");
        result.innerHTML = "X wins";
        gameOver = true;
    }
    if(document.getElementById("2").innerText == "X" && document.getElementById("5").innerText == "X" && document.getElementById("8").innerText == "X")
    {
        var result = document.getElementById("result");
        result.innerHTML = "X wins";
        gameOver = true;
    }
    if(document.getElementById("0").innerText == "X" && document.getElementById("4").innerText == "X" && document.getElementById("8").innerText == "X")
    {
        var result = document.getElementById("result");
        result.innerHTML = "X wins";
        gameOver = true;
    }
    if(document.getElementById("2").innerText == "X" && document.getElementById("4").innerText == "X" && document.getElementById("6").innerText == "X")
    {
        var result = document.getElementById("result");
        result.innerHTML = "X wins";
        gameOver = true;
    }

   if (gameOver == false)
    {
        var min = 0, max = 8;
        var randomChoice = Math.floor(Math.random() * (max - min + 1) ) + min;

        switch (randomChoice)
        {
            case 0: 
            if(document.getElementById("0").innerText == "")
            {
                document.getElementById("0").innerHTML = "O";
                break;
            } ;
            case 1:
            if(document.getElementById("1").innerText == "")
            {
                document.getElementById("1").innerHTML = "O";
                break;
            } ;
            case 2:
            if(document.getElementById("2").innerText == "")
            {
                document.getElementById("2").innerHTML = "O";
                break;
            } ;
            case 3:
            if(document.getElementById("3").innerText == "")
            {
                document.getElementById("3").innerHTML = "O";
                break;
            } ;
            case 4:
            if(document.getElementById("4").innerText == "")
            {
                document.getElementById("4").innerHTML = "O";
                break;
            } ;
            case 5:
            if(document.getElementById("5").innerText == "")
            {
                document.getElementById("5").innerHTML = "O";
                break;
            } ;
            case 6:
            if(document.getElementById("6").innerText == "")
            {
                document.getElementById("6").innerHTML = "O";
                break;
            } ;
            case 7:
            if(document.getElementById("7").innerText == "")
            {
                document.getElementById("7").innerHTML = "O";
                break;
            } ;
            case 8:
            if(document.getElementById("8").innerText == "")
            {
                document.getElementById("8").innerHTML = "O";
                break;
            } ;

        }

        if(document.getElementById("0").innerText == "O" && document.getElementById("1").innerText == "O" && document.getElementById("2").innerText == "O")
        {
            var result = document.getElementById("result");
            result.innerHTML = "O wins";
            gameOver = true;
        }
        if(document.getElementById("3").innerText == "O" && document.getElementById("4").innerText == "O" && document.getElementById("5").innerText == "O")
        {
            var result = document.getElementById("result");
            result.innerHTML = "O wins";
            gameOver = true;
        }
        if(document.getElementById("6").innerText == "O" && document.getElementById("7").innerText == "O" && document.getElementById("8").innerText == "O")
        {
            var result = document.getElementById("result");
            result.innerHTML = "O wins";
            gameOver = true;
        }
        if(document.getElementById("0").innerText == "O" && document.getElementById("3").innerText == "O" && document.getElementById("6").innerText == "O")
        {
            var result = document.getElementById("result");
            result.innerHTML = "O wins";
            gameOver = true;
        }
        if(document.getElementById("1").innerText == "O" && document.getElementById("4").innerText == "O" && document.getElementById("7").innerText == "O")
        {
            var result = document.getElementById("result");
            result.innerHTML = "O wins";
            gameOver = true;
        }
        if(document.getElementById("2").innerText == "O" && document.getElementById("5").innerText == "O" && document.getElementById("8").innerText == "O")
        {
            var result = document.getElementById("result");
            result.innerHTML = "O wins";
            gameOver = true;
        }
        if(document.getElementById("0").innerText == "O" && document.getElementById("4").innerText == "O" && document.getElementById("8").innerText == "O")
        {
            var result = document.getElementById("result");
            result.innerHTML = "O wins";
            gameOver = true;
        }
        if(document.getElementById("2").innerText == "O" && document.getElementById("4").innerText == "O" && document.getElementById("6").innerText == "O")
        {
            var result = document.getElementById("result");
            result.innerHTML = "O wins";
            gameOver = true;
        } 
        
    }
   
        
}

