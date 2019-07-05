// Check off specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
    $(this)
        .parent()
        .fadeOut(500, function() {
            $(this).remove();
        });
    event.stopPropagation();
});

// Event listner for text box
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        // Grab todo text from input
        var todoText = $(this).val();
        // Clear input text
        $(this).val("");
        // Create a new lia nd add to ul
        $("ul").append(
            '<li><span><i class="fa fa-trash"></i></span> ' + todoText + "</li>"
        );
    }
});

$(".fa-plus").on("click", function() {
    $("input[type='text']").fadeToggle();
});
