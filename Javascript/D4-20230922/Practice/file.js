// function login() {
//     // localStorage.removeItem("loggedin")
//     window.location = "login.html"
// }

// function register() {
//     window.location = "reg.html"
// }

function logincheck() {
    let login_email = document.getElementById("logmail").value
    let login_password = document.getElementById("logpass").value

    let usr = localStorage.getItem("details")
    // console.log(usr) 
    let usr_array = JSON.parse(usr)
    // console.log(usr_array)

    for (var i = 0; i < usr_array.length; i++) {
        // console.log(usr_array[i].email)
        // console.log(usr_array[i].password)
        let eml_chk = usr_array[i].email
        let pwd_chk = usr_array[i].password
        let username = usr_array[i].name

        if (eml_chk == login_email && pwd_chk == login_password) {
            localStorage.setItem("loggedin", true)
            localStorage.setItem("Username", username)
        }

    }
    window.location = "home.html"

    console.log(Username)
}

// function reg() {
//     let r_mail = document.getElementById("regmail").value;
//     let r_pass = document.getElementById("regpass").value;
//     let r_name = document.getElementById("regname").value;

//     if (localStorage.getItem("details")) {
//         localdata = JSON.parse(localStorage.getItem("details"))
//         localdata.push({
//             email: r_mail,
//             password: r_pass,
//             name: r_name
//         })
//         localStorage.setItem("details", JSON.stringify(localdata))
//     }
//     else {
//         let localdata = []
//         localdata.push({
//             email: r_mail,
//             password: r_pass,
//             name: r_name
//         })
//         localStorage.setItem("details", JSON.stringify(localdata))
//     }
// }

// function logbck() {
//     localStorage.removeItem("loggedin")
//     window.location = "login.html"
// }

// function reguser() {
//     list = JSON.parse(localStorage.getItem("details"))
//     data = ""
//     for (i = 0; i < list.length; i++) {
//         data = data + `
//           <tr>
//           <td>${list[i].name}</td>
//           <td>${list[i].email}</td>
//           <td><button type ="button">&#9998</button></td>
//           <td> <button type ="button" onclick ="delte('${list[i].email}')">&#128465</button></td>
//           </tr>`}
//     document.getElementById("reglst").innerHTML = data
// }

// function delte(d_email) {
//     let del = JSON.parse(localStorage.getItem("details"))
//     let newdata = []
//     for (let i = 0; i < del.length; i++) {
//         if (d_email != del[i].email) {
//             newdata.push(del[i])
//         }
//     }
//     localStorage.setItem("details", JSON.stringify(newdata))
//     reguser()
// }

// function load() {
//     if (localStorage.getItem("loggedin")) {

//         user = localStorage.getItem("Username")
//         document.getElementById("weltxt").innerHTML = `
//          <h2>Welcome,
//        ${user}</h2>`
//     }
// }

// function secure() {
//     if (!localStorage.getItem("loggedin")) {
//         window.location = "login.html"
//     }
// } 