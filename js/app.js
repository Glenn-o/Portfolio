var allowedKeys = {
    69: 'e',
    65: 'a',
    83: 's',
    84: 't',
    82: 'r',
    71: 'g',
    32: 'space'
  };
var eggCode = ['e', 'a', 's', 't', 'e', 'r', 'space', 'e', 'g', 'g'];
var eggCodePosition = 0;
var egg = document.querySelector('.egg');
  
document.addEventListener('keydown', function(e) {

  var key = allowedKeys[e.keyCode];

  var requiredKey = eggCode[eggCodePosition];

  if (key == requiredKey) {

    eggCodePosition++;

    if (eggCodePosition == eggCode.length) {
      activate();
      window.scroll(0, 0);
      eggCodePosition = 0;
    }
  } else {
    eggCodePosition = 0;
  }
});

function activate() {
  egg.style.display = "flex"
}