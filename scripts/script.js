/** Fonctions d'ouverture d'un modals - 
 * 
 * @param {*} modalId [Affiche le modal]
 */
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

/** Fonction de fermeture d'un modal
 * 
 * @param {*} modalId [Masque le modal]
 */
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

window.onclick = function(event) {
  var modals = document.getElementsByClassName('modal');
  for (var i = 0; i < modals.length; i++) {
      var modal = modals[i];
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
};