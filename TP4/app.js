var newUserForm = document.forms.newUser;
var utilitab = document.getElementById("utilitab");
var tachtab = document.getElementById("tachtab");
var boutton_add = document.getElementById("submit");



class Xelor {
    rolex = 0;
    aiguille = true;
}

var chrono = new Xelor();





function addElem () {

    if (chrono.aiguille) {
        if(
        !document.newUser.firstname.checkValidity() ||
        !document.newUser.lastname.checkValidity() ||
        !document.newUser.email.checkValidity()
        ){
            return;
        }

        console.log(newUserForm.elements.firstname.value)
                
        const newItem = document.createElement('tr')
        const firstnameTd = document.createElement('td')
        const lastnameTd = document.createElement('td')
        const emailTd = document.createElement('td')
        const roleTd = document.createElement('td')
        firstnameTd.textContent = document.newUser.firstname.value
        lastnameTd.textContent = document.newUser.lastname.value
        emailTd.textContent = document.newUser.email.value
        roleTd.textContent = document.newUser.role.value

                
        newItem.append(firstnameTd, lastnameTd, emailTd, roleTd)
        /* le premier élément dans le document qui contient la classe "datatable" est retourné*/
        const table = document.querySelector('#tabutili tbody')
                
        table.appendChild(newItem)

        chrono.rolex = 0;
        chrono.aiguille = false
    }
    else{
        alert("Veuillez patienter")
    }

}    

       
function removeAll (){

    if (utilitab.hidden == false) {
       const tbody = document.querySelector('#tabutili tbody')
           
        while (tbody.firstChild){
            tbody.removeChild(tbody.firstChild)
        } 
    }
   else{
        const tbody = document.querySelector('#tabtache tbody')
        console.log("heho")
        while (tbody.firstChild){
            tbody.removeChild(tbody.firstChild)
        } 
    }
    
}

function ShowUsers(){
    utilitab.hidden = false;
    tachtab.hidden = true;
}

function ShowTasks(){
    utilitab.hidden = true;
    tachtab.hidden = false;
}

function getTasks(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(function (data) {
    console.log('data', data)})
}

function createTask(userID, id, titre, completed){

                
    const newItem = document.createElement('tr')
    const useridTd = document.createElement('td')
    const idTd = document.createElement('td')
    const titreTd = document.createElement('td')
    const doneTd = document.createElement('td')
    useridTd.textContent = userID
    idTd.textContent = id
    titreTd.textContent = titre
    doneTd.textContent = completed
                
    newItem.append(useridTd, idTd, titreTd, doneTd)
    /* le premier élément dans le document qui contient la classe "datatable" est retourné*/
    const table = document.querySelector('#tabtache tbody')
                
    table.appendChild(newItem)
}

getTasks();//le nombre de tache


ShowTasks();
createTask("faire", "de", "la", "rando")

function tempo(){
    chrono.rolex += 1;
    console.log("seconde : "+chrono.rolex);

    if (chrono.rolex < 10) {
        chrono.aiguille = false;
        boutton_add.setAttribute("style", "background-color:#951D1D");
        boutton_add.innerHTML = 10-chrono.rolex + " sec";
    }
    else{
        chrono.aiguille = true;
        boutton_add.setAttribute("style", "background-color:#f5f5f5");
        boutton_add.innerHTML = "Ajouter";
    }
    
}

setInterval(tempo,1000);

