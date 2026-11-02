// Conecta con Firestore (proyecto GioStream / giostream11).
// Usa tu firebase-config.js si tiene datos válidos; si no, usa los datos públicos del proyecto.
(function () {
  var DEFAULT = {
    projectId: 'giostream11',
    appId: '1:907303340383:web:bf5787ad23d1bb25f60eea',
    messagingSenderId: '907303340383',
    authDomain: 'giostream11.firebaseapp.com'
  };
  var cfg = null;
  try {
    cfg = window.FIREBASE_CONFIG || window.firebaseConfig ||
          (typeof firebaseConfig !== 'undefined' ? firebaseConfig : null);
  } catch (e) {}
  if (!cfg || !cfg.projectId || cfg.projectId === 'TU_PROYECTO' ||
      String(cfg.apiKey || '').indexOf('PEGA') === 0) cfg = DEFAULT;
  try {
    if (!firebase.apps.length) firebase.initializeApp(cfg);
    window.gioDB = firebase.firestore();
  } catch (e) {
    console.error('Firebase:', e);
    window.gioDB = null;
  }
})();
