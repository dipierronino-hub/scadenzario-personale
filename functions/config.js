// Unico file che cambia tra Scadenzario Generale (Mirisa) e Scadenzario Personale.
module.exports = {
  intestazione: 'Scadenzario Personale',
  fonti: [
    // Scadenze: divise per utente, personale/{uid}/{id}
    { tipo: 'scadenza', databaseURL: 'https://scadenzario-personale-default-rtdb.europe-west1.firebasedatabase.app', percorso: 'personale', perUtente: true }
  ]
};
