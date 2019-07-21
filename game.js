$( document ).ready(function(){

    // Generating a random number

    var Random = Math.floor(Math.random() * 101 + 19)

    // Updating the text in the section with the id
    // randomNumber, each time the page refreshes.

    $('#randomNumber').text(Random);

    // Setting random values for my crystals.

    let crystal1 = Math.floor(Math.random() * 12 + 1)
    let crystal2 = Math.floor(Math.random() * 12 + 1)
    let crystal3 = Math.floor(Math.random() * 12 + 1)
    let crystal4 = Math.floor(Math.random() * 12 + 1)

    // Defining my variables

    let userScore= 0;
    let wins= 0;
    let losses = 0;

// Game Reset

  function reset(){
        Random = Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        userScore= 0;
        $('#finalTotal').text(userScore);
        }

// Win/Lost Function that alerts the user that they won
// or lost and adjust their win total.

  function won(){
  alert("You won!");
    wins++;
    $('#numberWins').text(wins);
    reset();
  }

  function lost(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }

//   Setting up my on click events for each crystal,
//   and adding that score to the total userScore each time.

    $('#crystal-1').on ('click', function(){
      userScore = userScore + crystal1;
      console.log("New userScore= " + userScore);
      $('#finalTotal').text(userScore);

          if (userScore == Random){
            won();
          }
          else if ( userScore > Random){
            lost();
          }
    })
    $('#crystal-2').on ('click', function(){
      userScore = userScore + crystal2;
      console.log("New userScore= " + userScore);
      $('#finalTotal').text(userScore);
          if (userScore == Random){
            won();
          }
          else if ( userScore > Random){
            lost();
          }
    })
    $('#crystal-3').on ('click', function(){
      userScore = userScore + crystal3;
      console.log("New userScore= " + userScore);
      $('#finalTotal').text(userScore);

            if (userScore == Random){
            won();
          }
          else if ( userScore > Random){
            lost();
          }
    })
    $('#crystal-4').on ('click', function(){
      userScore = userScore + crystal4;
      console.log("New userScore= " + userScore);
      $('#finalTotal').text(userScore);

            if (userScore == Random){
            won();
          }
          else if ( userScore > Random){
            lost();
          }
    });
  });
