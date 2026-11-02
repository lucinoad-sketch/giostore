// Configuración de EmailJS (https://www.emailjs.com) — plan gratis: 200 correos al mes.
// Mientras publicKey diga "PEGA", la web NO envía correos (pero la solicitud sí se guarda en Firestore).
window.EMAILJS_CONFIG = {
  publicKey: "3-qJhwiJbFkCJCG-Y",      // EmailJS > Account > General > Public Key
  serviceId: "service_8r1qw4n",
  templateAdmin: "template_q1w78be",    // el correo que te llega a ti cuando alguien se postula
  templateUser: ""                      // (opcional) confirmación al desarrollador; vacío = no se envía
};