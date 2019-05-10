$(function () {
    /* There are 4 functions in the TasksController that you have to bind using jQuery ajax
     *
     * Name="ExpiredTasks"
     * URL="/Tasks/ExpiredTasks"
     * Type = "GET"
     * Input parameter = None
     * Returns JSON
     * Goal: This method will return tasks that are in the past => earlier than today's date
     * To do: Call this method when the "ExpiredTasks" button is clicked.
     * Display expired tasks in the div with id="results"*/
    $("#ExpiredTasks").on("click", function () {
        //we need url, data and a callback function

        
        var url = "/Tasks/ExpiredTasks";

        $.get(url, function (data) {
            console.log(data);

            if (data.length == 0) {
                $("#results").text("<p>No results found for the search string</p>")
            }
            else {
                $.each(data, function (i, item) {
                    var para = $("<p></p>").text(item.ID + " " + item.Title);
                    $("#results").append(para);
                });
            }

        });

    });
     
     /* Name="DeleteExpiredTasks"
     * URL="/Tasks/DeleteExpiredTasks"
     * Type= "POST"
     * Input parameter = None
     * Returns JSON
     * Goal: This method will delete tasks older than today
     * To do: Call this method when the "DeleteExpiredTasks" button is clicked.
     * Display "count" and "status" in the div with id="results"*/
    $("#DeleteExpiredTasks").on("click", function () {
        //we need url, data and a callback function

        
        var url = "/Tasks/DeleteExpiredTasks";

        $.post(url, function (data) {
            console.log(data);

            if (data.length == 0) {
                $("#results").text("<p>No results found for the search string</p>")
            }
            else {
                $.each(data, function (i, item) {
                    var para = $("<p></p>").text(item.ID + " " + item.Title);
                    $("#results").append(para);
                });
            }

        });

    });
     
     
     /* Name="UrgentTasks"
     * URL="/Tasks/UrgentTasks"
     * Type = "GET"
     * Input parameter called as "nbr" will be an integer that indicates number of days
     * Returns JSON
     * Goal: This method will return tasks that are due in the next "nbr" days from today
     * To do: Call this method when the "UrgentTasks" button is clicked.
     * Display urgent tasks in the div with id="results2"*/
    $("#UrgentTasks").on("click", function () {
        //we need url, data and a callback function

        var nbr = $("#NbrOfDays").val();//input data
        var url = "/Tasks/UrgentTasks";

        $.get(url, { "s": nbr }, function (data) {
            console.log(data);

            if (data.length == 0) {
                $("#results2").text("<p>No results found for the search string</p>")
            }
            else {
                $.each(data, function (i, item) {
                    var para = $("<p></p>").text(item.ID + " " + item.Title);
                    $("#results2").append(para);
                });
            }

        });

    });
     /* Name="SearchByCategory"
     * URL="/Tasks/SearchByCategory"
     * Type = "GET"
     * Input parameter called as "searchstring" will be a string that indicates number of days
     * Returns JSON
     * Goal: This method will return tasks that are due in the next "nbr" days from today
     * To do: Call this method when the "SearchByCategory" button is clicked.
     * Display tasks that match the category in the div with id="results3"*/
    $("#SearchByCategory").on("click", function () {
        //we need url, data and a callback function

        var searchstring = $("#SearchByCategory").val();//input data
        var url = "/Tasks/SearchByCategory";

        $.get(url, { "s": searchstring }, function (data) {
            console.log(data);

            if (data.length == 0) {
                $("#results3").text("<p>No results found for the search string</p>")
            }
            else {
                $.each(data, function (i, item) {
                    var para = $("<p></p>").text(item.ID + " " + item.Title);
                    $("#results3").append(para);
                });
            }

        });

    });
});     