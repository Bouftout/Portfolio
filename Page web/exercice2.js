/*Exercice

Nous souhaitons lancer une bataille de clics ! Nous avons un article qui correspond à notre parent (ID  parent  ), et nous avons un lien (balise  a  ) qui correspond à notre enfant (ID  child  ). Le but est de cliquer soit dans le parent, soit dans l'enfant et d'afficher le nombre de clics dans chaque élément directement dans les éléments #parent-count et #child-count.

Commencez par écouter les événements click depuis l'élément #parent. Puis affichez le nombre de clics dans l'élément #parent-count.

Faites la même chose mais avec l'élément #child. Il faudra afficher le nombre de clics sur cet élément dans l'élément #child-count.
 Maintenant, dès que vous cliquez sur le parent ou l'enfant les compteurs se mettent à jour. Mais vous avez sans doute remarqué que 
 lorsque vous cliquez sur l'enfant, le compteur du parent se met aussi à jour ?

Maintenant, faites de sorte à ce que lorsque vous cliquez sur l'enfant, seul le compteur de l'enfant se mette à jour. 
N'oubliez pas que l'élément enfant se trouve à l'intérieur de l'élément parent.
 Ça ne se voit pas ici car nous sommes dans un environnement protégé, mais en réalité, #child est un lien. 
 Et en sa qualité de lien, lorsque l'on clique dessus, le navigateur doit changer de page.

Evitez qu'un clic sur le lien ne vous fasse changer de page: supprimez ce comportement par défaut.

*/
function init() {
  let parentcount = 0;

  const elt = document.getElementById("parent"); // On récupère l'élément sur lequel on veut détecter le clic
  const ellt = document.getElementById("parent-count");
  elt.addEventListener("click", function (event) {
    parentcount++;
    ellt.innerHTML = parentcount;
  });
}

let childcount = 0;

function child() {
  const elt = document.getElementById("child2"); // On récupère l'élément sur lequel on veut détecter le clic
  const ellt = document.getElementById("child-count");

  childcount++;
  ellt.innerHTML = childcount;
}
