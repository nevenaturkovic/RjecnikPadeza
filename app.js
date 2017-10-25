(function() {
  'use strict';
  var R = Rjecnik();
  R.dodajRijecStringovi('medved', 'medveda', 'medvedu', 'medveda', 'medvede', 'medvedom', 'medvedu', 'medvedi', 'medveda', 'medvedima', 'medvede', 'medvedi', 'medvedima', 'medvedima');
  R.dodajRijecStringovi('nered', 'nereda', 'neredu', 'nered', 'neredu', 'neredom', 'neredu', 'neredi', 'nereda', 'neredima', 'nerede', 'neredi', 'neredima', 'neredima');

  var rijecEl = document.getElementById('testRijec');
  rijecEl.innerHTML = R.promijeniRijec(rijecEl.innerHTML, 'lokativ', 'mnozina', 'instrumental', 'jednina');



}());
