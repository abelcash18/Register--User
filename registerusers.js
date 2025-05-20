let arrayOfUser =[]
     function registerUser(){
        let firstName=
        document.getElementById("firstName").value
        let lastName=
        document.getElementById("lastName").value
        let dob =
        document.getElementById("dob").value
        let email =
        document.getElementById("email").value
        let password =
        document.getElementById("password").value
        let gender =
        document.getElementById("gender").value

        let userObject ={  firstName, lastName, dob, email, password,gender, date: new Date().toLocaleDateString}

       arrayOfUser.push(userObject)
       displayUser()
             }

function displayUser(){
    let show ="";
    for(let index = 0; index <
         arrayOfUser.length; index++ ){
        console.log(arrayOfUser[index])

        show += `
        <tr>
        <td>${index + 1}</td>

         <td>${arrayOfUser[index].firstName}
         ${arrayOfUser[index].lastName}</td>
         <td>${arrayOfUser[index].email} </td>
         <td>${arrayOfUser[index].password}</td>
         <td>${arrayOfUser[index].gender}</td>
         <td>${arrayOfUser[index].dob}</td>
                
      </tr>
       `
    }

    document.getElementById("display").innerHTML
= show
}

function resetButton(){
    document.getElementById("firstName").value ='';
     document.getElementById("lastName").value ='';
      document.getElementById("email").value ='';
       document.getElementById("password").value ='';
        document.getElementById("gender").value ='';
         document.getElementById("dob").value ='';
    
}
     