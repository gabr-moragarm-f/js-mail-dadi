var whiteList = ['gabriel@example.it', 'jose@example.it', 'alessandra@example.it', 'serena@example.it', 'marco@example.it', 'david@example.it', 'michele@example.it', 'ciao@mambo.it', 'example@gmail.com'];

console.log(whiteList);

var email = prompt('Ciao, inserisci quì il tuo indirizzo email per vedere se sei nella whitelist.');

while (email.includes('@') === false) {
  alert('NON STAI INSERENDO UN INDIRIZZO EMAIL');

  var email = prompt('Ciao, inserisci quì il tuo indirizzo email per vedere se sei nella whitelist.');
}

for (var i = 0; i < whiteList.length; i++) {
  if (whiteList[i] === email) {
    alert('Benvenuto/a');

    var i = whiteList.length;

    var game = prompt('Vuoi giocare a dadi? Digita "Y" per Sì e "N" per No');

    game = game.toUpperCase();

    while (game === 'Y') {
      alert('Adesso tiro 2d6, uno per te e uno per me');

      var userDiceRoll = Math.floor(Math.random() * 6 + 1);

      var computerDiceRoll = Math.floor(Math.random() * 6 + 1);

      if (userDiceRoll < computerDiceRoll) {
        
      }

      var game = prompt('Vuoi giocare a dadi? Digita "Y" per Sì e "N" per No');

      game = game.toUpperCase();
    }
  }
}

for (var i = 0; i < whiteList.length; i++) {
  if (whiteList[i] !== email) {
    alert('INTRUDER!')

    var i = whiteList.length
  }
}

console.log('ok');
