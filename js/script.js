// Mi viene poco spontaneo commentare :P
// Sezione di identificazione per accedere al gioco-----------------------------
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

    //Inizio del gioco----------------------------------------------------------
    var game = prompt('Vuoi giocare a dadi? Digita "Y" per Sì e "N" per No');

    game = game.toUpperCase();

    while (game !== 'N') {
      //validazione prompt game che in caso di errore richiede il prompt--------
      while (game !== 'Y' && game !== 'N') {
        alert('PUOI RISPONDERE SOLO CON "Y" O "N"!')

        var game = prompt('Vuoi giocare a dadi? Digita "Y" per Sì e "N" per No');

        game = game.toUpperCase();
      }

      //Se la risposta è Y il gioco parte, richiede poi se si vuole rigiocare---
      while (game === 'Y') {
        alert('Adesso tiro 2d6, uno per te e uno per me');

        var userDiceRoll = Math.floor(Math.random() * 6 + 1);

        var computerDiceRoll = Math.floor(Math.random() * 6 + 1);

        if (userDiceRoll < computerDiceRoll) {
          alert('Il tuo dado ha fatto: ' + userDiceRoll + '. Il computer ha fatto: ' + computerDiceRoll + '. Mi dispiace hai perso. :( ');
        }else if (computerDiceRoll < userDiceRoll) {
          alert('Il tuo dado ha fatto: ' + userDiceRoll + '. Il computer ha fatto: ' + computerDiceRoll + '. Hai vinto! :D ');
        }else {
          alert('Il tuo dado ha fatto: ' + userDiceRoll + '. Il computer ha fatto: ' + computerDiceRoll + '. Oddio abbiamo fatto uguale! E\' così raro che te la considero una VITTORIA CRITICA! (ﾉ≧∀≦)ﾉ' );
        }

        var game = prompt('Vuoi giocare ancora a dadi? Digita "Y" per Sì e "N" per No');

        game = game.toUpperCase();
      }
    }

    //In caso di risposta N
    if (game === 'N') {
      alert('Grazie per aver giocato! Alla prossima! ( ^_^)／" ');
      var closePage = true;//validazione che evita il messaggio INTRUDER
    }
  }
}

if (closePage !== true) {//validazione che evita che il messaggio INTRUDER si attivi
  for (var i = 0; i < whiteList.length; i++) {//attivazione del messaggio in caso di sbaglio credenziali per la whiteList
    if (whiteList[i] !== email) {
      alert('INTRUDER!');

      var i = whiteList.length;
    }
  }
}

console.log('ok');
