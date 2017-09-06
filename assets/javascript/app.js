$(document).ready(function() {
    //  Set our number counter to 46
    var number = 46;

    $("#radioButtons1").hide();
    $("#radioButtons2").hide();
    $("#radioButtons3").hide();
    $("#radioButtons4").hide();

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  Runs the count down
    function run() {
      intervalId = setInterval(decrement, 1000);
      $("button").remove();
    }

    //  Decrement function.
    function decrement() {

      //  Decrease # by one.
      number--;

      //  Show the number in the #show-number tag.
      if (number >-1) {
        $("#show-number").html("Time Remaining:  " + number + " seconds");
      }

      // TRIVIA FUNCTION     
      $("#newTrivia1").html("Question 1:  What is the largest shark?");
      $("#radioButtons1").show();

      $("#newTrivia2").html("Question 2:  Which shark is responsible for more human casualities than any other species?");
      $("#radioButtons2").show();      

      $("#newTrivia3").html("Question 3:  Which shark isn't warm blooded?");
      $("#radioButtons3").show();      

      $("#newTrivia4").html("Question 4:  Which shark is inaccurately blamed for the deaths of hundreds from the sinkning of the USS Indianapolis in WW2?");
      $("#radioButtons4").show();      

      //  If number hits 0, then executes stop function
      if (number === -1) {

        //  stops the function
        stop();
      }
    }

    //  FUNCTION TO STOP COUNTDOWN AT ZERO
    function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
      var answerOne = $('input[name=radioA]:checked').val();
      var answerTwo = $('input[name=radioB]:checked').val();
      var answerThree = $('input[name=radioC]:checked').val();
      var answerFour = $('input[name=radioD]:checked').val();

      if (answerOne === undefined) {
        answerOne = 0;
      }

      if (answerTwo === undefined) {
        answerTwo = 0;
      }

      if (answerThree === undefined) {
        answerThree = 0;
      }

      if (answerFour === undefined) {
        answerFour = 0;
      }

      var answerOne = parseInt (answerOne);
      var answerTwo = parseInt (answerTwo);
      var answerThree = parseInt (answerThree);
      var answerFour = parseInt (answerFour);
      var answerTotal = answerOne + answerTwo + answerThree + answerFour;

      if (answerTotal === 0) {
        $("#show-number").html("Time's Up!  Too bad.  You didn't answer any questions correctly. Watch Shark Week at least.");
      }

      if (answerTotal === 1) {
        $("#show-number").html("Time's Up!  You answered one question correctly.  Learn more about sharks and shark conservation.");
      }

      if (answerTotal === 2) {
        $("#show-number").html("Time's Up!  You answered two questions correctly.  Learn more about sharks and shark conservation.");
      }

      if (answerTotal === 3) {
        $("#show-number").html("Time's Up!  You answered three questions correctly.  You know a decent amount about sharks!");
      }

      if (answerTotal === 4) {
        $("#show-number").html("Time's Up!  You answered all four questions correctly.  Megaladon would spare you from being eaten.");
      }   
    }

    //  Waits for click to start
    $(document).on("click", "button", function() {
        run();
    });

});