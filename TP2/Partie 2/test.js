
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let email = document.getElementById("email");
let role = document.getElementById("role");
let tableau = document.getElementById("tab");
//let tbody = document.getElementById("tbody");
//let ensemble = document.getElementById("ensemble");

let saisie = document.getElementById("saisie");

/**
 * Fonction de creation d'éléments
 * @param {*} loques type de balise crée
 * @param {*} datos  contenue de la cellule
 * @param {*} donde  emplacement (parent/enfants)
 */
function Creation(loques, datos, donde){

    //Creation nouvelle cellule
    let cellule = document.createElement(loques);
    cellule.id = "cellule";

    if (datos != null) {
        let contenu = document.createTextNode(datos);
        cellule.appendChild(contenu);
        
    }


    //reference
    let ref = document.getElementById(donde);
    let papa_ref = ref.parentNode;
    
    papa_ref.insertBefore(cellule, ref);
    //donde.appendChild(cellule);

    
}
/**
 * Cree une ligne dans le tableau
 */
function addline(){

    Creation("tr", null, "end");
    
    Creation("td", nom.value, "end");

    Creation("td", prenom.value, "end");
   
    Creation("td", email.value, "end");
    
    Creation("td", role.value, "end");

}

/**
 * Fonction qui test si l'input est vide
 * @param {*} value champs remplit
 * @returns true si remplit false si non
 */
function isempty(value){
    if (value.value == "") {
       return false;
    }

    return true
}


/**
 * Fonction ajouter
 */
function ajouter(){
    if (isempty(nom) == true) {
        if (isempty(prenom) == true) {
            if (isempty(email) == true) {
                addline();
                saisie.style.animationDirection;

            }
            else{
                alert("Veuillez remplir le mail !")
            }
        }
        else{
            alert("Veuillez remplir le prenom !")
        }
    }
    else{
        alert("Veuillez remplir tout les champs !")
    }

}

function delete_all(){
    let list_line = document.querySelectorAll("#cellule");

    for (let index = 0; index < list_line.length; index++) {
        const element = list_line[index];
        element.remove();
    }
    
}



