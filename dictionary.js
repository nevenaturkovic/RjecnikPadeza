(function(global) {
  var Dictionary = function() {
    return new Dictionary.init();
  }

  Dictionary.init = function() {
    this.wordDatebase = [];
  }

  Dictionary.prototype = {};

  Dictionary.prototype.addWord = function(word) {
    existingWord = this.findWord(word.singular.nominativ, 'nominativ', 'singular');
    if (existingWord) {
      existingWord = word;
    } else {
      this.wordDatebase.push(word);
    }
  }

  Dictionary.prototype.addWordStrings = function(j_nominativ, j_genitiv, j_dativ, j_akuzativ, j_vokativ, j_instrumental, j_lokativ, m_nominativ, m_genitiv, m_dativ, m_akuzativ, m_vokativ, m_instrumental, m_lokativ) {
    singular = new Cases(j_nominativ, j_genitiv, j_dativ, j_akuzativ, j_vokativ, j_instrumental, j_lokativ);
    plural = new Cases(m_nominativ, m_genitiv, m_dativ, m_akuzativ, m_vokativ, m_instrumental, m_lokativ);
    word = new Word(singular, plural);

    existingWord = this.findWord(word.singular.nominativ, 'nominativ', 'singular');
    if (existingWord) {
      existingWord = word;
    } else {
      this.wordDatebase.push(word);
    }
  }

  Dictionary.prototype.modifyWord = function(inWord, inCase, inNumber, outCase, outNumber) {
    foundWord = this.findWord(inWord, inCase, inNumber);
    if (foundWord) {
      return foundWord[outNumber][outCase];
    } else {
      throw 'rijec ne postoji u bazi.';
    }
  }

  Dictionary.prototype.findWord = function(word, grammarCase, number) {
    grammarCase = grammarCase ||'nominativ';
    number = number || 'singular';
    word = word.toLowerCase();
    for (var i = 0; i < this.wordDatebase.length; i++) {
      var currWord = this.wordDatebase[i];
      if (currWord[number][
          grammarCase
        ] === word) {
        return currWord;
      }
    }
    return undefined;
  }

  var Cases = function(nominativ, genitiv, dativ, akuzativ, vokativ, instrumental, lokativ) {
    var self = this;
    self.nominativ = nominativ;
    self.genitiv = genitiv;
    self.dativ = dativ;
    self.akuzativ = akuzativ;
    self.vokativ = vokativ;
    self.instrumental = instrumental;
    self.lokativ = lokativ;
  }

  var Word = function(singular, plural) {
    var self = this;
    self.singular = singular;
    self.plural = plural;
  }

  Dictionary.init.prototype = Dictionary.prototype;

  global.Dictionary = Dictionary;

}(window));
