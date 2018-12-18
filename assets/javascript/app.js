
$(function() {

    var correctAnswers = 0
    var q1 = false;
    var q2 = false;
    var q3 = false;

    var number = 21;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(timer, 1000);
      }

    function timer() {
        number--;

        $("#timer-div").html("<h2>" + number + "</h2");

    };


    // --- Quiz start 

    $(".btn").on("click", function() {

        $("#start-button").addClass("hidden");

        $("#question1").removeClass("hidden");

        run();

    });

    // --- Question 1

    $(".option").on("click", function timeOut() {

        if ($(this).hasClass("correct")) {

            $("#answer-title").text("Correct!");

            $("#gif").attr("src", 'assets/images/dean-right.gif');

            $("#answer-text").text("Oh man, well played! Even if it was a complete guess, here you are with a right answer so good job. Starting off strong.");

            correctAnswers++;
        }
        else {

            $("#answer-title").text("Wrong!");

            $("#gif").attr("src", 'assets/images/snl-wrong.gif')

            $("#answer-text").text("Hah, just as I predicted. I did mention that this was gonna be pretty unfair...");

        };

        $("#question1").addClass("hidden");

        $("#answer-div").removeClass("hidden");

    });

});