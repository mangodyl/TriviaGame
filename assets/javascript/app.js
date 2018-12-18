
$(function() {

    var correctAnswers = 0
    var q1 = false;
    var q2 = false;
    var q3 = false;

    var number = 20;
    var intervalID;

    function timer() {

    };


    // --- Quiz start 

    $(".btn").on("click", function() {

        $("#start-button").addClass("hidden");

        $("#question1").removeClass("hidden");

    });

    // --- Question 1

    $(".option").on("click", function() {

        if ($(this).hasClass("correct")) {

            $("#answer-title").text("Correct!");

            console.log(this, "ok");
        }
        else {

            $("#answer-title").text("Wrong!");

            $("#answer-text").text("Correct!");

        };

        $("#question1").addClass("hidden");

        $("#answer-div").removeClass("hidden");

    });

});