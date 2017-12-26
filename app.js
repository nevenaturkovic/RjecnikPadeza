(function() {
  'use strict';
  var R = Dictionary();
  R.addWordStrings('medved', 'medveda', 'medvedu', 'medveda', 'medvede', 'medvedom', 'medvedu', 'medvedi', 'medveda', 'medvedima', 'medvede', 'medvedi', 'medvedima', 'medvedima');
  R.addWordStrings('nered', 'nereda', 'neredu', 'nered', 'neredu', 'neredom', 'neredu', 'neredi', 'nereda', 'neredima', 'nerede', 'neredi', 'neredima', 'neredima');

  var wordEl = document.getElementById('testWord');
  wordEl.innerHTML = R.modifyWord(wordEl.innerHTML, 'lokativ', 'plural', 'instrumental', 'singular');



}());
