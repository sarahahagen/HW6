/*
    Name: Sarah Hagen
    Class Name: CPSC 332 Web Development
    Assignment Name: Homework 6 - JQuery
    Last Modified Date: 11/14/2022
    Notes: Used the following website to stop the animation: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_stop_params .
*/

$(document).ready(function () {
    var $seconds = 00;
    var $tens = 00;
    var $settingTens = $("#tens")
    var $settingSeconds = $("#seconds")
    var $buttonStart = $("#button-start");
    var $buttonStop = $("#button-stop");
    var $buttonReset = $("#button-reset");
    var $interval;
    var $interval2;
    var $startClicked = false;

    $buttonStart.on("click", function() {
        $startClicked = true;

        clearInterval($interval2);
        $interval2 = setInterval(function() {
                $(".timer-background").animate({
                    opacity: 0.8
                  }, "slow");
        
                $(".timer-background").animate({
                    opacity: 1
                }, "slow");
            }, 10);

        clearInterval($interval);
        $interval = setInterval(function() {
            $tens++;

            if ($tens < 9) {
                $($settingTens).html("0" + $tens);
            }

            if ($tens > 9) {
                $($settingTens).html($tens);

            }

            if ($tens > 99) {
                console.log("seconds");
                $seconds++;
                $($settingSeconds).html("0" + $seconds);
                $tens = 0;
                $($settingTens).html("0" + 0);
            }

            if ($seconds > 9) {
                $($settingSeconds).html($seconds);
            }
        }, 10);

        // css styling
        $(".timer-background").css({
            backgroundColor: "green"
        });
    });

    $buttonStop.on("click", function() {
        clearInterval($interval);
        clearInterval($interval2);
        $(".timer-background").stop(true, true);

        if ($startClicked) {
            // css styling
            $(".timer-background").css({
                backgroundColor: "red",
                opacity: "1"
            });
        }
    });

    $buttonReset.on("click", function() {
        $startClicked = false;
        clearInterval($interval);
        clearInterval($interval2);
        $(".timer-background").stop(true, true);
        $tens = "00";
        $seconds = "00";
        $settingTens.html($tens);
        $settingSeconds.html($seconds);

        // css styling
        $(".timer-background").css({
            backgroundColor: "grey",
            opacity: "1"
        });
    });

    // Additions
    // Step 1 and 2
    $("p").attr("id", "timer");
    $("p").addClass("timer-background");
    // css styling
    $(".timer-background").css({
        padding: "10px",
        width: "350px",
        borderStyle: "dashed",
        borderRadius: "5px",
        textAlign: "center",
        fontSize: "16pt",
        backgroundColor: "grey",
        marginLeft: "8px"
    });

    // Step 6
    $("button").addClass("button-style");
    // css styling
    $(".button-style").css({
        padding: "6px",
        width: "120px",
        borderRadius: "100px",
        backgroundColor: "purple",
        borderColor: "grey",
        color: "white",
        marginLeft: "5px"
    });

    // Step 8
    $("h2").remove();
    $("h1").css({
        padding: "10px",
        fontFamily: "'Times New Roman', Times, serif",
        color: "blue",
        marginLeft: "95px",
        fontSize: "32pt"
    });
    $(".wrapper").css({
        backgroundColor: "orange",
        width: "400px",
        height: "250px",
        borderRadius: "10px",
        borderStyle: "solid",
        marginLeft: "550px",
        marginTop: "200px"
    });
});