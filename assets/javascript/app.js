
$(function() {

    var correctAnswers = 0
    var questioncounter = 1;
    
    var number = 21;
    var intervalId;

    // --- Timer functions

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

        // --- On question timout

        if (number === 0) {
            stop();
            choiceFunction();
            $("#answer-title").text("Too Slow!");

            $("#gif").attr("src", 'assets/images/simpsons-timeout.gif')
            $("#answer-text").text("Uh oh, looks like you have some time management issues. I get that my quiz is hard, but you should work on that.");

            number = 21;
        }

    };


    // --- Quiz start 

    $(".btn").on("click", function() {

        $("#start-button").addClass("hidden");

        $("#question1").removeClass("hidden");

        run();

    });

    // --- On click answer div manipulation & question/answer counter

    $("option").on("click", choiceFunction);

    
    function choiceFunction() {

        if ($(this).hasClass("correct")) {

            $("#answer-title").text("Correct!");

            // Q1 correct
            if (questioncounter === 1) {

                $("#gif").attr("src", 'assets/images/dean-right.gif');
                $("#answer-text").text("Oh man, well played! Even if it was a complete guess, here you are with a right answer so good job. Starting off strong.");

            }
            // Q2 correct
            else if (questioncounter === 2) {

                $("#gif").attr("src", 'assets/images/carell-right.gif');
                $("#answer-text").text("Nice one! Your netflix cooking show binge finally paid off... hey i'm not judging, how do you think I came up with this question?");

            }
            // Q3 correct
            else if (questioncounter === 3) {

                $("#gif").attr("src", 'assets/images/goldblum-right.gif');
                $("#answer-text").text("You're either lucky or cheating to get this one. I'm not looking for a confession, I just want you to know that I know.");

            }
            // Q4 correct
            else if (questioncounter === 4) {

                $("#gif").attr("src", 'assets/images/futurama-right.gif');
                $("#answer-text").text("Ray proved to them that the action on the keys were still great, and almost as great as your answer. Well done!");

            }
            // Q5 correct
            else if (questioncounter === 5) {

                $("#gif").attr("src", 'assets/images/offerman-right.gif');
                $("#answer-text").text("Either you've read the book or you just figured the answer was the one I had to explain. Anyway, a win's a win. Nice job.");

            }
            // Q6 correct
            else if (questioncounter === 6) {

                $("#gif").attr("src", 'assets/images/sunny-right.gif');
                $("#answer-text").text("I like this question, I like your answer, I like Danny DeVito. We're all winners here.");

            }
            // Q7 correct
            else if (questioncounter === 7) {

                $("#gif").attr("src", 'assets/images/vegeta-right.gif');
                $("#answer-text").text("Like any self-respecting Pokémon Trainer would willingly catch a Zubat, when there so many other cool Pokémon in their world. Solid answer.");

            };

            correctAnswers++;

        }
        else {

            $("#answer-title").text("Wrong!");

            // Q1 Incorrect
            if (questioncounter === 1) {

            $("#gif").attr("src", 'assets/images/snl-wrong.gif')
            $("#answer-text").text("Hah, just as I predicted. I did mention that this was gonna be pretty unfair...");

            }
            // Q2 Incorrect
            else if (questioncounter === 2) {

                $("#gif").attr("src", 'assets/images/crikey-wrong.gif')
                $("#answer-text").text("Wow, no. Maybe if you spent more time learning useless information this whole quiz would've been a cakewalk.");
            }
            // Q3 Incorrect
            else if (questioncounter === 3) {

                $("#gif").attr("src", 'assets/images/prince-wrong.gif')
                $("#answer-text").text("I forgive you for not knowing it, but it's 27. Remember that from now on.");
            }
            // Q4 Incorrect
            else if (questioncounter === 4) {

                $("#gif").attr("src", 'assets/images/shtshow-wrong.gif')
                $("#answer-text").text("Whether you've never watched The Blues Brothers or just couldn't remember the answer, this is a good indicator that you should rewatch this gem.");
            }
            // Q5 Incorrect
            else if (questioncounter === 5) {

                $("#gif").attr("src", 'assets/images/trump-wrong.gif')
                $("#answer-text").text("Shame Kubrick left this out when he made the film. Getting chased by hedge animals that may/may not exist was a creepy part of the book.");
            }
            // Q6 Incorrect
            else if (questioncounter === 6) {

                $("#gif").attr("src", 'assets/images/wrong-carrey.gif')
                $("#answer-text").text("You should know this. Very important info.");
            }
            // Q7 Incorrect
            else if (questioncounter === 7) {

                $("#gif").attr("src", 'assets/images/ramsey-wrong.gif')
                $("#answer-text").text("It's a niche quiz, but you should have guessed no Pokémon Trainer would use a Zubat.");
            };
        };

        stop();

        if (questioncounter === 1) {
            $("#question1").addClass("hidden");
            setTimeout(q2func, 6000);
        }
        else if (questioncounter === 2) {
            $("#question2").addClass("hidden");
            setTimeout(q3func, 6000);
        }
        else if (questioncounter === 3) {
            $("#question3").addClass("hidden");
            setTimeout(q4func, 6000);
        }
        else if (questioncounter === 4) {
            $("#question4").addClass("hidden");
            setTimeout(q5func, 6000);
        }
        else if (questioncounter === 5) {
            $("#question5").addClass("hidden");
            setTimeout(q6func, 6000);
        }
        else if (questioncounter === 6) {
            $("#question6").addClass("hidden");
            setTimeout(q7func, 6000);
        }
        else if (questioncounter === 7) {
            $("#question7").addClass("hidden");
            setTimeout(resultFunc, 6000);
        };

        $("#answer-div").removeClass("hidden");

    };

// Question functions 2-7 (1 is auto on start quiz function)

    // Question 2
function q2func() {
    questioncounter++;
    run();
    $("#answer-div").addClass("hidden");
    $("#question2").removeClass("hidden");
};
    // Question 3
function q3func() {
    questioncounter++;
    run();
    $("#answer-div").addClass("hidden");
    $("#question3").removeClass("hidden");
};
    // Question 4
function q4func() {
    questioncounter++;
    run();
    $("#answer-div").addClass("hidden");
    $("#question4").removeClass("hidden");
};
    // Question 5
function q5func() {
    questioncounter++;
    run();
    $("#answer-div").addClass("hidden");
    $("#question5").removeClass("hidden");
};
    // Question 6
function q6func() {
    questioncounter++;
    run();
    $("#answer-div").addClass("hidden");
    $("#question6").removeClass("hidden");
};
    // Question 7
function q7func() {
    questioncounter++;
    run();
    $("#answer-div").addClass("hidden");
    $("#question7").removeClass("hidden");
};

// --- Final results screen function

function resultFunc() {

    $("#final-score").text(correctAnswers + "/7")

    // All correct
    if (correctAnswers === 7) {
        $("#final-title").text("Too Well");
        $("#gif-final").attr("src", 'assets/images/rogen-win.gif');
        $("#final-text").html("This is either your 4th time doing this quiz, or you're cheating. Big time. You shouln't be here. Go back and do it again with what you would have ACTUALLY chosen. <br> This screen is for me only.");

    }
    // Most correct
    else if (correctAnswers === 4 || correctAnswers === 5 || correctAnswers === 6) {

        $("#final-title").text("Pretty Good!");
        $("#gif-final").attr("src", 'assets/images/not-bad.gif');
        $("#final-text").html("It was Pat Benatar that once said 'Hit me with your best shot', and it looks like you did just that. <br> Your 'best' in ths instance was by no means perfect, but it sure did surprise me. Congrats.");

    }
    // Most wrong
    else if (correctAnswers === 1 || correctAnswers === 2 || correctAnswers === 3) {

        $("#final-title").text("Meh");
        $("#gif-final").attr("src", 'assets/images/super-meh.gif');
        $("#final-text").html("You tried my quiz, and made it through to the end. Some people call that the real victory. <br> I don't. You got like 2 or something right. Stop kidding yourself.");

    }
    // None correct
    else if (correctAnswers === 0) {

        $("#final-title").text("Bad");
        $("#gif-final").attr("src", 'assets/images/ferrell-lose.gif');
        $("#final-text").text("I've made a seperate results area for those that got 0 on my quiz. This is it. It's this one. You got 0. Congrats.");

    };

    $("#answer-div").addClass("hidden");

    $("#results-div").removeClass("hidden");

    };


});