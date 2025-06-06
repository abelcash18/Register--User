let arrayOfUser =[]

if (localStorage.getItem("fbUser")){
    arrayOfUser = JSON.parse(localStorage.getItem("fbUser"))
}
else{
    arrayOfUser =[]
}
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


        let userObject ={  firstName, lastName, dob, email, password,gender, date: new Date().toLocaleDateString()}
          arrayOfUser.push(userObject)

        let stringifyUser = JSON.stringify(arrayOfUser)

        localStorage.setItem("fbUser", stringifyUser)
                displayUser(arrayOfUser)
             }

function displayUser(parseUser){
    let show ="";
    
    for(let index in parseUser){
         let user = parseUser[index];       
        show += `
        <tr>
        <td>${parseInt(index) + 1}</td>

         <td>${user.firstName}
         ${user.lastName}</td>
         <td>${user.email} </td>
         <td>${user.password}</td>
         <td>${user.gender}</td>
         <td>${user.dob}</td>
          <td> <button onclick= "event.stopPropagation(); showUserDetails(${index})" type="button" class="btn btn-primary btn-sm" >View</button></td>              
         <td> <button onclick= "editUser(${index})" type="button" class="btn btn-warning btn-sm" >Edit</button></td>
           <td> <button onclick= "deleteUser(${index})" type="button" class="btn btn-danger" >Delete</button></td>               
      </tr>
       `
    }

    document.getElementById("display").innerHTML
= show
}

function showUserDetails(index){
    const user = arrayOfUser[index];

    const detailsHTML =`
    <p><strong>Full Name: </strong> ${user.firstName} ${user.lastName}</p>
    <p><strong>email: </strong> ${user.email}</p>
    <p><strong>Date of birth </strong> ${user.dob}</p>
    <p><strong>Gender: </strong> ${user.gender} </p>
    <p><strong>Registration Date: </strong> ${user.date}</p>
    `;

    document.getElementById("modalBody").innerHTML
 = detailsHTML;

 const myModal = new
 bootstrap.Modal(document.getElementById('userModal'));
 myModal.show();
}

function deleteUser(index){
    let confirmDelete= confirm(`Are you sure you want to delete
        ${arrayOfUser[index].firstName}?`)

        if(confirmDelete){
            arrayOfUser.splice(index, 1)
            displayUser(arrayOfUser)
            console.log(arrayOfUser)
        }
         let stringifyUser = JSON.stringify(arrayOfUser)

        localStorage.setItem("fbUser", stringifyUser)
        displayUser(arrayOfUser)
    
}


let updateIndex = null;
function editUser(index){
    document.getElementById("btn1").style.display ="none"
     document.getElementById("btn2").style.display ="block"

     document.getElementById("firstName").value =
     arrayOfUser[index].firstName
     document.getElementById("lastName").value =
     arrayOfUser[index].lastName
     document.getElementById("email").value =
     arrayOfUser[index].email
     document.getElementById("dob").value =
     arrayOfUser[index].dob
     document.getElementById("password").value =
     arrayOfUser[index].password
     document.getElementById("gender").value =
     arrayOfUser[index].gender

     updateIndex = index

      let stringifyUser = JSON.stringify(arrayOfUser)

        localStorage.setItem("fbUser", stringifyUser)
        displayUser(arrayOfUser)
    
}

function updateUser(){
    document.getElementById("btn1").style.display = "block"
    document.getElementById("btn2").style.display = "none"

    arrayOfUser[updateIndex].firstName =
    document.getElementById("firstName").value
    arrayOfUser[updateIndex].lastName =
    document.getElementById("lastName").value
    arrayOfUser[updateIndex].email =
    document.getElementById("email").value
    arrayOfUser[updateIndex].dob =
    document.getElementById("dob").value
    arrayOfUser[updateIndex].password =
    document.getElementById("password").value
    arrayOfUser[updateIndex].gender =
    document.getElementById("gender").value
    console.log(arrayOfUser)

     let stringifyUser = JSON.stringify(arrayOfUser)

        localStorage.setItem("fbUser", stringifyUser)
    displayUser(arrayOfUser)
}

function getAllUser(){
    let getUser = localStorage.getItem("fbUser")
    let parseUser = JSON.parse(getUser)

    displayUser(parseUser)
    console.log()
}
