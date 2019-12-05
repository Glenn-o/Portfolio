window.parent.document.title = 'Portfolio'

var allowedKeys = {
    69: 'e',
    65: 'a',
    83: 's',
    84: 't',
    82: 'r',
    71: 'g'
  };
  var eggCode = ['e', 'a', 's', 't', 'e', 'r', 'e', 'g', 'g'];
  var eggCodePosition = 0;
  var egg = document.querySelector('.egg');
  
  document.addEventListener('keydown', function(e) {

    var key = allowedKeys[e.keyCode];

    var requiredKey = eggCode[eggCodePosition];
  
    if (key == requiredKey) {
  
      eggCodePosition++;
  
      if (eggCodePosition == eggCode.length) {
        activate();
        eggCodePosition = 0;
      }
    } else {
      eggCodePosition = 0;
    }
  });

function activate() {
    egg.style.display = "flex"
}