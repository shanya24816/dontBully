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
  document.body.style.backgroundImage = "url('S1_ignore.jpeg')";
}
function respondonlineFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('respondonline').hidden = false;
  document.body.style.backgroundImage = "url('respondscen1.jpg')";
}
function reportagainFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('reportonline').hidden = true;
  document.getElementById('reportagain').hidden = false;
  document.getElementById('fight').hidden = true;
   document.body.style.backgroundImage = "url('bully1.png')";

}
function gotoignoreFunction(){
  document.getElementById('online').hidden = true;
    document.getElementById('reportagain').hidden = true;
  document.getElementById('reportagain').hidden = true;
  document.getElementById('ignoreonline').hidden = false;
  document.getElementById('gotorespond').hidden = true;
   document.body.style.backgroundImage = "url('bully1.png')";

}
 function fightbackonlineFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('reportagain').hidden = true;
  document.getElementById('fightbackonline').hidden = false;
  document.getElementById('reportonline').hidden = true;
   document.body.style.backgroundImage = "url('bully1.png')";
 }
function askhallwayFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('askhallway').hidden = false;
  document.getElementById('ignoreonline').hidden = true;
  document.getElementById('reportagain').hidden = true;
   document.body.style.backgroundImage = "url('bully1.png')";
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
}
function walkawayhallwayFunction(){
  document.getElementById('online').hidden = true;
  document.getElementById('tellhallway').hidden = true;
  document.getElementById('askhallway').hidden = true;
  document.getElementById('ignoreonline').hidden = true;
  document.getElementById('walkawayhallway').hidden = false;
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
  }
}



function errorMessage(message) {
  document.getElementById('error-msg').innerHTML = message;
  $('#error-msg-box').modal('show');
}
