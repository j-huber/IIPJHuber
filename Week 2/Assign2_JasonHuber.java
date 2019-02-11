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
var current_position=0, number_vowels = 0, num_A = 0, num_E = 0, num_I = 0, num_O = 0, num_U = 0, num_Y = 0;
while (current_position <= s_length)
{
    switch (sentence.substr(current_position,1))
    {
    case "a": 
    case "A": num_A+=1;
    number_vowels+=1;
        break;
    case "e": 
    case "E": num_E+=1;
    number_vowels+=1;
        break;
    case "i": 
    case "I": num_I+=1;
    number_vowels+=1;
        break;
    case "o": 
    case "O": num_O+=1;
    number_vowels+=1;
        break;
    case "u": 
    case "U": num_U+=1;
    number_vowels+=1;
        break;
    case "y": 
    case "Y": num_Y+=1;
        number_vowels+=1;
        break;
    }
     current_position++;
}
console.log("The sample sentence is : " + sentence);
console.log("Number of A's: " + num_A);
console.log("Number of E's: " + num_E);
console.log("Number of I's: " + num_I);
console.log("Number of O's: " + num_O);
console.log("Number of U's: " + num_U);
console.log("Number of Y's: " + num_Y);
console.log("The total number of vowels is : " + number_vowels);
