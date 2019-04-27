$(function(){
    
    //Cross Origin Resource Sharing
    //Uses script tag instead of XMLHTTPRequest Object to override the same origin policy
    //JSONP => JSON with padding

    /**************************************************************************************************
     * #1 flikr feed url 
     * //https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=?&tags=cats
     * 
     * ***********************************************************************************************/
    
    $("#btn1").on("click", function()
    {
        var tag = $("#photosearch").val();
        var url = "https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=?&tags=" + tag;
        $.ajax({
            url: url,
            type: "GET",
            dataType: "jsonp",
            contentType: "application/json; charset-utf-8",
            crossDomain: true,
            success: function(data){
                console.log(data);
                $("img").remove();
                $.each(data.items, function(i, item)
                {
                    var source = item.media.m;
                    var img = $("<img src='"+source+"'>");
                    $("#flikrresults").append(img);


                });
            }


        });

        
    });

    /***************************************************************************** 
    #2 Go to https://www.petfinder.com/developers/api-key to get an api key
    Add the API key to the URL
    Sample URL:
    http://api.petfinder.com/breed.list?format=json&key=key&callback=?&animal=cat
    
    *******************************************************************************/
   $("#btn2").on("click", function()
    {
        var animaltag = $("#animalsearch").val();
        var breedtag = $("#breedsearch").val();
        var sizetag = $("#sizesearch").val();
        var sextag = $("#sexsearch").val();
        var locationtag = $("#locationsearch").val();
        var url = "http://api.petfinder.com/pet.find?&callback=?&format=json&key=551b527add03634ac3a95a7a967367e6&location=" + locationtag + "&animal=" + animaltag + "&breed=" + breedtag + "&size=" + sizetag + "&sex=" + sextag;
        $.ajax({
            url: url,
            type: "GET",
            dataType: "jsonp",
            contentType: "application/json; charset-utf-8",
            crossDomain: true,
            success: function(data){
                console.log(data);
                
                $.each(data.items, function(i, item)
                {
                    var petName = petfinder.pets.pet.i.name;
                    var petID = petfinder.pets.pet.i.id;
                    var petDescription = petfinder.pets.pet.i.description;
                    var petContact = petfinder.pets.pet.i.contact;
                    var list = $("<p"+petName+"'p><br>"+"<p"+petID+"'p><br>"+"<p"+petDescription+"'p><br>"+"<p"+petContact+"'p><br>");
                    $("#petresults").append(list);


                });
            }


        });

        
    });
    
});