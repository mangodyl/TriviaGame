
$(function() {

    var correctAnswers = 0
    var questioncounter = 1;

    var validateInput = function() {
        var isValid = true;
        var form = $(".form-control");

        if (form.val() === null) {
            isValid = false;
        }
        timeOut();

        console.log(isValid);
    };
    
    var number = 21;
    var intervalId;

    function run() {
        number = 21;
        clearInterval(intervalId);
        intervalId = setInterval(timer, 1000);
    };

    function stop() {
        clearInterval(intervalId);
        $("#timer-div").html(" ");
        number = 21;

    };

    function timer() {
        number--;

        $("#timer-div").html("<h2 class='time-h2'>" + number + "</h2");

        if (number === 0) {
            stop();
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

    $("option").on("click", timeOut);

    
    function timeOut() {


    // if (validateInput() === false) {
    //     return;
    // }
    // else {

        if ($(this).hasClass("correct")) {

            $("#answer-title").text("Correct!");

            // Q1 correct
            if (questioncounter === 1) {

                $("#gif").attr("src", 'assets/images/dean-right.gif');
                $("#answer-text").text("Oh man, well played! Even if it was a complete guess, here you are with a right answer so good job. Starting off strong.");

            };
            // Q2 correct
            if (questioncounter === 2) {

                $("#gif").attr("src", 'assets/images/carell-right.gif');
                $("#answer-text").text("Nice one! Your netflix cooking show binge finally paid off... hey i'm not judging, how do you think I came up with this question?");

            };
            // Q3 correct
            if (questioncounter === 3) {

                $("#gif").attr("src", 'assets/images/goldblum-right.gif');
                $("#answer-text").text("You're either lucky or cheating to get this one. I'm not looking for a confession, I just want you to know that I know.");

            };

            correctAnswers++;

        }
        else {

            $("#answer-title").text("Wrong!");

            if (questioncounter === 1) {

            $("#gif").attr("src", 'assets/images/snl-wrong.gif')
            $("#answer-text").text("Hah, just as I predicted. I did mention that this was gonna be pretty unfair...");

            };

            if (questioncounter === 2) {

                $("#gif").attr("src", 'assets/images/crikey-wrong.gif')
                $("#answer-text").text("Wow, no. Maybe if you spent more time learning useless information this whole quiz would've been a cakewalk.");

            };

            if (questioncounter === 3) {

                $("#gif").attr("src", 'assets/images/prince-wrong.gif')
                $("#answer-text").text("Hah, just as I predicted. I did mention that this was gonna be pretty unfair...");

            };
        };

        stop();

        if (questioncounter === 1) {
            $("#question1").addClass("hidden");
            setInterval(q2func, 5000);
        }
        else if (questioncounter === 2) {
            $("#question2").addClass("hidden");
            setInterval(q3func, 5000);
        }
        else if (questioncounter === 3) {
            $("#question3").addClass("hidden");
            setInterval(resultFunc, 5000);
        };

        $("#answer-div").removeClass("hidden");

    };

    // };

    // Question 2
function q2func() {

    questioncounter++;

    console.log(questioncounter);

    run();

    $("#answer-div").addClass("hidden");

    $("#question2").removeClass("hidden");


};

function q3func() {

    questioncounter++;

    console.log(questioncounter);

    run();

    $("#answer-div").addClass("hidden");

    $("#question3").removeClass("hidden");


};


function resultFunc() {

    $("#final-score").text(correctAnswers + "/3")

    if (correctAnswers === 3) {
        $("#final-title").text("Too Well");
        $("#gif-final").attr("src", 'assets/images/rogen-win.gif');
        $("#final-text").text("This is either your 4th time doing this quiz, or you're cheating. Big time. You shouln't be here. Go back and do it again with what you would have ACTUALLY chosen. This screen is for me only.");

    };
    // Q2 correct
    if (correctAnswers === 2 || correctAnswers === 1) {

        $("#final-title").text("Meh");
        $("#gif-final").attr("src", 'assets/images/not-bad.gif');
        $("#final-text").text("It was Pat Benatar that once said 'Hit me with your best shot', and it looks like you did just that. Your 'best' in ths instance was far from good enough to beat my quiz, but hey, you can't win 'em all.");

    };
    // Q3 correct
    if (correctAnswers === 0) {

        $("#final-title").text("Bad");
        $("#gif-final").attr("src", 'assets/images/ferrell-lose.gif');
        $("#final-text").text("I've made a seperate results area for those that got 0 on my quiz. This is it. It's this one. You got 0. Congrats.");

    };

    $("#answer-div").addClass("hidden");

    $("#results-div").removeClass("hidden");

}



});