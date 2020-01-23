$(document).ready(function() {
    console.log("test here");
    $.ajax({
        method: "GET", 
        url: "/api"
    }).then(function(data) {
       for (var i = 0; i < data.length; i++) {
           var id = data[i].id;
           var burger = data[i].burger_name;
           var burgerDiv = $("<div>").attr("class", "burger");
           var burgerToSend = $(burgerDiv).append(`${id}. ${burger}`);
           var devourButton = $("<button>").attr("class", "devour").text("Eat Me!");
           $("#burgerList").append(burgerToSend, devourButton);

       }
    })

    $("#myBurger").on("click", function(event) {
        event.preventDefault();
        var burgerName = $("#burgerpreferences").val().trim();
        console.log(burgerName);
        $.ajax({
            method: "POST",
            url: "/api/new",
            data: {burger: burgerName},
        }).then(function(data) {
            alert("making your burger!");
            location.reload();
        })
    })
})





