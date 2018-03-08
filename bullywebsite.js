
function startGameFunction() {
  document.getElementById('continue').hidden = false;
  document.getElementById('startGame').hidden = true;
}
function continueFunction() {
  document.getElementById('game-start').hidden = true;
  document.getElementById('continue').hidden = true;
}
function reportonlineFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('reportonline').hidden = false;
}
function ignoreonlineFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('reportonline').hidden = true;
  document.getElementById('ignoreonline').hidden = false;
}
function respondonlineFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('respondonline').hidden = false;
}
function reportagainFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('reportagain').hidden = false;
}



//function to process options clicks, it checks the id name
function clickFunction(id) {
  if (id == 'reportonlineOption') {
  reportonlineFunction();
  } else if (id == 'ignoreonlineOption') {
    ignoreonlineFunction();
  } else if (id == 'respondonlineOption') {
    respondonlineFunction();
  }  
}
function startGame() {
  // document.getElementById('stat').innerHTML = "Once you see the picture, do you want to report it, ignore it, or take it as a joke and laugh?";
  // document.getElementById("continue").value="REPORT";
  document.getElementById('game-start').hidden = true;
  document.getElementById('online').hidden = false;

}



function errorMessage(message) {
  //generic funciton to show modal with error message
  document.getElementById('error-msg').innerHTML = message; //replace innerHTML with message
  $('#error-msg-box').modal('show');
}
