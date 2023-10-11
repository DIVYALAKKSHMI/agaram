const firebaseConfig = {

    apiKey: "AIzaSyDhdnnnMAf9iOWz8pklUwXFgHDlcq2IDHs",

    authDomain: "registerform-2e722.firebaseapp.com",

    databaseURL: "https://registerform-2e722-default-rtdb.firebaseio.com/",

    projectId: "registerform-2e722",

    storageBucket: "registerform-2e722.appspot.com",

    messagingSenderId: "192019250248",

    appId: "1:192019250248:web:e5748176b906ffb34bac7d"

  };

firebase.initializeApp(firebaseConfig)

var db = firebase.database()

var dataref = db.ref("registeredUsers")

function register(){
    console.log("Register function called")
    let name = document.getElementById("regname").value
    let email = document.getElementById("regmail").value
    let pswrd = document.getElementById("regpass").value

    let reg_data = {
        name : name,
        email : email,
        password : pswrd,
}

dataref.once('value')
    .then(function(snapshot) {
        let data = snapshot.val();
        console.log(data);
        if(data){
            data.push(reg_data);
            db.ref(`registeredUsers`).set(data);
        }
        else{
            db.ref(`registeredUsers/${0}`).set(reg_data);
        }
    })
    alert("Data saved")
}

function login(){
  var mail = document.getElementById("logmail").value
  var pass = document.getElementById("logpass").value

  let dbvalue = firebase.database().ref("registeredUsers")

  dbvalue.once("value").then(function(snapshot){
      let values = snapshot.val()
      let user = false
      for (i=0;i<values.length;i++){
          if(values[i].email == mail && values[i].password == pass){
            alert("Login Success")
            user = true
            localStorage.setItem("loggedin" , true)
            localStorage.setItem("username",values[i].name)
            window.location="homepg.html"
          }
          if (user == false){
            alert("Sorry! Register first")
            window.location="regpg.html"
          }
      }
  })
}

function tableadd() {
    dataref.once("value").then(function(snapshot){
        var data=snapshot.val();
        // console.log(datain)
        let htmldata = "";
        for (i = 0; i < data.length; i++) {
            console.log(data[i])
            htmldata = htmldata + `<tr>
                                <td> ${data[i].Name} </td>
                                <td> ${data[i].Email} </td>
                                <td><button onclick="update('${data[i].Email}')">&#9998</button></td>
                                <td><button onclick="del('${data[i].Email}')">&#128465</button></td>
                                </tr>`
        }
        // console.log(datain[i].Name)
        document.getElementById("table_body").innerHTML = htmldata
    })
    }

    function oldlogin() {
        dataref.once("value").then(function(snapshot){
          var data=snapshot.val();
        if (localStorage.getItem("loggedin")) {
            
            document.getElementById("weltxt").innerHTML = localStorage.getItem("logged_name")
            // document.getElementById("wel").innerHTML = localStorage.getItem(welcome ${logged_name})
            tableadd()
        }})
      }

      function update(up_mail) {
        // alert(up_mail)
        dataref.once("value").then(function(snapshot){
          var data=snapshot.val();
        for (i = 0; i < data.length; i++) {
            if (up_mail == data[i].Email) {
                console.log(i)
                let up_mail1 = data[i].Email
                let up_password1 = data[i].Password
                let up_name1 = data[i].Name
                console.log(up_mail1)
                console.log(up_password1)
                console.log(up_name1)
                let up_mail2 = prompt("enter the updated mail id", up_mail1.innerHTML)
                let up_password2 = prompt("enter the updated password", up_password1.innerHTML)
                let up_name2 = prompt("enter the updated name", up_name1.innerHTML)
                up_mail1.innerHTML = up_mail2
                up_password1.innerHTML = up_password2
                up_name1.innerHTML = up_name2
  
                let lists1 = {
                  Email: up_mail2,
                  Password: up_password2,
                  Name: up_name2
                }
                  dataref.once("value").then(function(snapshot){
                    var data=snapshot.val();
                if (data) {
                      data.push(lists1);
                      dataref.set(data);
                  
    
                }
                else{
                  db.ref(registeredUsers/'${0}').set(data);
  
                }
               
                del(up_mail)
              })
            }
        }
      
      })
    }


    function del(del_email) {
        // alert(del_email)
        dataref.once("value").then(function(snapshot){
        var data=snapshot.val();
        let newlist = []
        for (let i = 0; i < data.length; i++) {
            if (del_email != data[i].Email) {
                newlist.push(data[i])
    
            }
        }
        dataref.set(newlist)
        tableadd()
      })
    }

    function logout() {
        localStorage.removeItem("loggedin")
        window.location="loginpg.html"
      }
      
    //   function secure(){
              
    //     if (!localStorage.getItem("loggedin")) {
            
    //             window.location="loginpg.html"
                
    //     }      
    //   } 