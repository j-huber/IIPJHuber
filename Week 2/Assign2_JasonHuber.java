// problem 1
var x = 1 , i = 0;
while (i<20)
{
    console.log(x);
    x+=5;
    i+=1;
}


// problem 2
var x = 1, i = 0;
while (i<10)
{
    console.log(x);
    x=x*3;
    i+=1;
}



// problem 3
var sentence = "I am creating this sentence to make use of all the silly vowels multiple times.";
var s_length = sentence.length;
var current_position=0, number_vowels = 0;
while (current_position <= s_length)
{
    switch (sentence.substr(current_position,1))
    {
    case "a": 
    case "A": 
    case "e": 
    case "E": 
    case "i": 
    case "I":
    case "o": 
    case "O": 
    case "u": 
    case "U": 
    case "y": 
    case "Y": 
        number_vowels+=1;
        break;
    }
     current_position++;
}
console.log(number_vowels);

