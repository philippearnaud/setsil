
// Création d'une fonction add appelé à la fin du chargement de la page.
	//Déclaration et instantiation d'un tableau pour stocker les valeurs de nos listes.
	var liste = [];

function add_list() { 
	//Déclaration et instantiation d'une variable qui récupère l'élément du DOM sur lequel on va cliquer pour ajouter des éléments à la liste.
	var add = document.getElementById('add');
	//Déclaration et instantiationn d'une variable qui récupère l'élément du DOM dans lequel on va afficher nos listes.
	var liste_appended = document.getElementById('ul-liste');
	//Déclare une fonction qui va se déclencher dès qu'on cliquera sur l'élément du DOM stocké dans la variable add.
	add.onclick = function() {
		//Déclaration et instantiation d'une variable value dans lequel on va stocker la valeur qu'on a écrit dans le formulaire.
		var value = document.forms['liste'].liste_add.value;
		//On ajoute à la fin du tableau la valeur de la variable value.
		liste.push(value);
		//Déclaration et instantation d'une variable remove qui va nous permettre de virer un élément de la liste sur simple click.
		var remove = document.createElement('span');
		remove.className="remover";
  	remove.onclick = function(ev) {
  		this.parentNode.parentNode.removeChild(this.parentNode);
  		console.log(ev);
  	};
		var remove_content = document.createTextNode('remove');
		//Déclaration et instantiation d'une variable newLi dans laquelle on va stocker l'élément li du DOM qu'on vient de créer.
		var newLi = document.createElement('li');	
		// Déclaration et instantiation d'une variable liste_content dans laquelle on va stocker un noeud de texte correspondant à la variable value. 
		var liste_content = document.createTextNode(value);
		//On utilise AppendChild sur la variable newLi pour rajouter le texte à notre variable li. => <li> Texte </li>
		newLi.appendChild(liste_content);
		// On met le contenu remove dans l'élément span du dom
		remove.appendChild(remove_content);
		//On rajoute l'élément span dans la liste.
		newLi.appendChild(remove);
		//On utilise AppendChild sur la variable liste_appended pour rajouter à l'élement du DOM ul notre <li> Texte </li>
		liste_appended.appendChild(newLi);
	}
}


function main() {
	add_list();
}

window.onload = main;
