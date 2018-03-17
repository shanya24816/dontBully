function startGame() {
  document.getElementById('game-start').hidden = true;
  document.getElementById('online').hidden = false;
 document.body.style.backgroundImage = "url('scen1.png')";
}
function continueFunction() {
  document.getElementById('game-start').hidden = false;
  document.getElementById('continue').hidden = true;
}
function reportonlineFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('reportonline').hidden = false;
  document.body.style.backgroundImage = "url('reporting.png')";
}

function ignoreonlineFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('reportonline').hidden = true;
  document.getElementById('ignoreonline').hidden = false;
  document.body.style.backgroundImage = "url('S1_ignore.png')";
}
function respondonlineFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('respondonline').hidden = false;
  document.body.style.backgroundImage = "url('respondscen1.png')";
}
function reportagainFunction() {
  document.getElementById('online').hidden = true;
  document.getElementById('reportonline').hidden = true;
  document.getElementById('reportagain').hidden = false;
 document.body.style.backgroundImage = "url('newschool.png')";
}
function gotoignoreFunction(){
  document.getElementById('online').hidden = true;
    document.getElementById('reportagain').hidden = true;
  document.getElementById('reportagain').hidden = true;
  document.getElementById('ignoreonline').hidden = false;
  document.getElementById('gotorespond').hidden = true;
   document.body.style.backgroundImage = "url('S1_ignore.png')";

}
 function fightbackonlineFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('reportagain').hidden = true;
  document.getElementById('fightbackonline').hidden = false;
  document.getElementById('reportonline').hidden = true;
   document.body.style.backgroundImage = "url('fightcartoon.png')";
 }
function askhallwayFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('askhallway').hidden = false;
  document.getElementById('ignoreonline').hidden = true;
  document.getElementById('reportagain').hidden = true;
   document.body.style.backgroundImage = "url('questions.png')";
}
function gotorespondonlineFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('respondonline').hidden = false;
  document.getElementById('ignoreonline').hidden = true;
  document.getElementById('reportagain').hidden = true;
}
function tellhallwayFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('tellhallway').hidden = false;
  document.getElementById('askhallway').hidden = true;
  document.getElementById('ignoreonline').hidden = true;
  document.body.style.backgroundImage = "url('pricipaloffice.png')";
}
function walkawayhallwayFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('tellhallway').hidden = true;
  document.getElementById('askhallway').hidden = true;
  document.getElementById('ignoreonline').hidden = true;
  document.getElementById('walkawayhallway').hidden = false;
  document.body.style.backgroundImage = "url('walkaway.png')";
}
function referencepageFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('askhallway').hidden = true;
  document.getElementById('walkawayhallway').hidden = true;
  document.getElementById('respondonline').hidden = true;
  document.getElementById('reportagain').hidden = true;
  document.getElementById('tellhallway').hidden = true;
  document.getElementById('fightbackonline').hidden = true;
  document.getElementById('referencepage').hidden = false;
  document.body.style.backgroundImage = "url('nobullying.png')";
}


function clickFunction(id) {
  if (id == 'reportonlineOption') {
  reportonlineFunction();
  } else if (id == 'ignoreonlineOption') {
    ignoreonlineFunction();
  } else if (id == 'respondonlineOption') {
    respondonlineFunction();
  } else if (id == 'reportagainOption') {
    reportagainFunction();
  } else if (id == 'gotoignoreOption') {
    ignoreonlineFunction();
   } else if (id == 'fightbackonlineOption') {
    fightbackonlineFunction();
  } else if (id == 'askhallwayOption') {
    askhallwayFunction();
  } else if (id == 'gotorespondonlineOption') {
    gotorespondonlineFunction();
  } else if (id == 'tellhallwayOption') {
  	tellhallwayFunction();
  } else if (id == 'walkawayhallwayOption') {
  	walkawayhallwayFunction();
  } else if (id == 'referencepageOption') {
    referencepageFunction();
  }
}



function errorMessage(message) {
  document.getElementById('error-msg').innerHTML = message;
  $('#error-msg-box').modal('show');
}
