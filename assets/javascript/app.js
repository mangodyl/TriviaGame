
$(function() {

    var correctAnswers = 0
    var questioncounter = 0;
    
    var number = 21;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(timer, 1000);
    };

    function stop() {
        clearInterval(intervalId);
        $("#timer-div").html(" ");

    };

    function timer() {
        number--;

        $("#timer-div").html("<h2 class='time-h2'>" + number + "</h2");

        if (number === 0) {
            stop();
            timeOut();
            number = 21;
        }

    };


    // --- Quiz start 

    $(".btn").on("click", function() {

        $("#start-button").addClass("hidden");

        $("#question1").removeClass("hidden");

        run();

    });

    // Question 1

    $(".option").on("click", timeOut);
    
    function timeOut() {

        if ($(this).hasClass("correct")) {

            $("#answer-title").text("Correct!");

            // Q1 correct
            if (questioncounter === 0) {

                $("#gif").attr("src", 'assets/images/dean-right.gif');
                $("#answer-text").text("Oh man, well played! Even if it was a complete guess, here you are with a right answer so good job. Starting off strong.");

            };
            // Q2 correct
            if (questioncounter === 1) {

                $("#gif").attr("src", 'assets/images/carell-right.gif');
                $("#answer-text").text("Nice one! Your netflix cooking show binge finally paid off... hey i'm not judging, how do you think I came up with this question?");

            };
            // Q3 correct
            if (questioncounter === 2) {

                $("#gif").attr("src", 'assets/images/goldblum-right.gif');
                $("#answer-text").text("You're either lucky or cheating to get this one. I'm not looking for a confession, I just want you to know that I know.");

            };

            correctAnswers++;

            questioncounter++;

            stop();


            if (questioncounter === 1) {
                setInterval(q2func, 5000);
            }
            else if (questioncounter === 2) {
                setInterval(q3func, 5000);
            }
            else if (questioncounter === 4) {
                setInterval(resultFunc, 5000);
            };

        }
        else {

            $("#answer-title").text("Wrong!");

            $("#gif").attr("src", 'assets/images/snl-wrong.gif')

            $("#answer-text").text("Hah, just as I predicted. I did mention that this was gonna be pretty unfair...");

            questioncounter++;

            stop();

            if (questioncounter === 1) {
                setInterval(q2func, 5000);
            }
            else if (questioncounter === 2) {
                setInterval(q3func, 5000);
            }
            else if (questioncounter === 4) {
                setInterval(resultFunc, 5000);
            };
        };

        $("#question1").addClass("hidden");

        $("#answer-div").removeClass("hidden");

    };

    // Question 2
function q2func() {

    $("#answer-div").addClass("hidden");

    $("#question2").removeClass("hidden");

};



});