var newUserForm = document.forms.newUser;

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
        const table = document.querySelector('.datatable tbody')
                
        table.appendChild(newItem)

        chrono.rolex = 0;
    }
    else{
        alert("Veuillez patienter")
    }

}    

       
function removeAll (){
    const tbody = document.querySelector('.datatable tbody')
           
    while (tbody.firstChild){
        tbody.removeChild(tbody.firstChild)
    }
}

function off(){
    
    
}



function main(){
    var boutton_add = document.getElementById("submit");

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


setInterval(main,1000);














