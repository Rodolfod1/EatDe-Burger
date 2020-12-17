//Script to handle the events 

$( () => { 
    $(".devoured-btn").on("click", (event) => {
        event.preventDefault();
        // var id = $(this).data("id");
        var id = $(this).data("id");

        console.log(id);
        var devouredBurger = {
            devoured: 1
        };
        // using PUT request, for Devoured button
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(() => {
            console.log("Burger Devoured");
            location.reload();
        });
    });

    //Creating request, Add Burger 
    $(".add-burger").on("click", (event) => {
        event.preventDefault();
        const newBurger = {
            //assigns the burger name from html
            burger_name: $("#burger").val().trim()
        };

        //POST request though AJAX
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            () => {
                location.reload();
            }
        );
    });
});