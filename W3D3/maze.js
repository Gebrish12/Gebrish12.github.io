"use strict";
$(document).ready(function () {
    var start = $("#start");
    var end = $("#end");
    var maze = $("#maze");
    var boundary = $(".boundary");
    var gameStart = false;
    maze.mouseleave(function () { loss(); });

    start.click(function () {
        $("#status").text('Move mouse to End in order to win the game');
        gameStart = true;
        if (boundary.hasClass('lose')) {
            boundary.removeClass('lose');
        }
        boundary.mousemove(function () { loss(); });
    });

    end.mousemove(function () {
        if (gameStart == true) won();
    });

    function won() {
        gameStart = false;
        $("#status").text("You win! :)");
        //  alert("You win! :)");
    }

    function loss() {
        if (gameStart) {
            gameStart = false;
            boundary.addClass('lose');
            $("#status").text('Sorry, you lost. :(');
            //alert('Sorry, you lost. :(');
        }
    }
});