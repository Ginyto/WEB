var newUserForm = document.forms.newUser; 
         
       function addElem () {
       
        if (
          !document.newUser.firstname.checkValidity() ||
          !document.newUser.lastname.checkValidity() ||
          !document.newUser.email.checkValidity()
        ) {
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
          
       }


         
         function removeAll () {
        const tbody = document.querySelector('.datatable tbody')
        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
        }
      }