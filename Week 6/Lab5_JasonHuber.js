window.onload = function()
{
    var book = {
        "title": "Dungeons & Dragons Monster Manual",
        "author":"Wizards RPG team", 
        "total_pages": 352 , 
        "publisher": "Wizards of the Coast", 
        "ISBN": "0786965614"
    };

    var strBook = JSON.stringify(book);
    var objBook = JSON.parse(strBook);

    console.log(strBook);
    console.log(objBook);

}
