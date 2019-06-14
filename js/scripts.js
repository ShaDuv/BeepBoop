

$(document).ready(function () {
  $('button').click(function () {
      var userNumber = $('#userNumber').val();
      userNumber = parseInt(userNumber);
      console.log(typeof userNumber);
      var robotArray = [];
      for (i = 0; i <= (userNumber); i++) {
        if (i.toString().includes(3) === true) {
          robotArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
        } else if (i.toString().includes(2) === true) {
          robotArray.push('Boop');
        } else if (i.toString().includes(1) === true) {
          robotArray.push('Beep');
        }else {
          robotArray.push(i);
        };
      }; //closes for
      robotArray = robotArray.toString()
      console.log(robotArray);
      $("#ul").append(robotArray)
    }); //closes button click
});//closes doc ready
