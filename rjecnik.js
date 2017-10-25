(function(global) {
  var Rjecnik = function() {
    return new Rjecnik.init();
  }

  Rjecnik.init = function() {
    this.bazaRijeci = [];
  }

  Rjecnik.prototype = {};

  Rjecnik.prototype.dodajRijec = function(rijec) {
    postojecaRijec = this.nadjiRijec(rijec.jednina.nominativ, 'nominativ', 'jednina');
    if (postojecaRijec) {
      postojecaRijec = rijec;
    } else {
      this.bazaRijeci.push(rijec);
    }
  }

  Rjecnik.prototype.dodajRijecStringovi = function(j_nominativ, j_genitiv, j_dativ, j_akuzativ, j_vokativ, j_instrumental, j_lokativ, m_nominativ, m_genitiv, m_dativ, m_akuzativ, m_vokativ, m_instrumental, m_lokativ) {
    jed = new Padezi(j_nominativ, j_genitiv, j_dativ, j_akuzativ, j_vokativ, j_instrumental, j_lokativ);
    mn = new Padezi(m_nominativ, m_genitiv, m_dativ, m_akuzativ, m_vokativ, m_instrumental, m_lokativ);
    rijec = new Rijec(jed, mn);

    postojecaRijec = this.nadjiRijec(rijec.jednina.nominativ, 'nominativ', 'jednina');
    if (postojecaRijec) {
      postojecaRijec = rijec;
    } else {
      this.bazaRijeci.push(rijec);
    }
  }

  Rjecnik.prototype.promijeniRijec = function(ulRijec, ulPadez, ulBroj, izlPadez, izlBroj) {
    nadjenaRijec = this.nadjiRijec(ulRijec, ulPadez, ulBroj);
    if (nadjenaRijec) {
      return nadjenaRijec[izlBroj][izlPadez];
    } else {
      throw 'Rijec ne postoji u bazi.';
    }
  }

  Rjecnik.prototype.nadjiRijec = function(rijec, padez, broj) {
    padez = padez || 'nominativ';
    broj = broj || 'jednina';
    rijec = rijec.toLowerCase();
    for (var i = 0; i < this.bazaRijeci.length; i++) {
      var trenRijec = this.bazaRijeci[i];
      if (trenRijec[broj][padez] === rijec) {
        return trenRijec;
      }
    }
    return undefined;
  }

  var Padezi = function(nominativ, genitiv, dativ, akuzativ, vokativ, instrumental, lokativ) {
    var self = this;
    self.nominativ = nominativ;
    self.genitiv = genitiv;
    self.dativ = dativ;
    self.akuzativ = akuzativ;
    self.vokativ = vokativ;
    self.instrumental = instrumental;
    self.lokativ = lokativ;
  }

  var Rijec = function(jednina, mnozina) {
    var self = this;
    self.jednina = jednina;
    self.mnozina = mnozina;
  }

  Rjecnik.init.prototype = Rjecnik.prototype;

  global.Rjecnik = Rjecnik;

}(window));
