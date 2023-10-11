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

var auth = firebase.auth()

function register(){
    const name = document.getElementById("regname").value
    const email = document.getElementById("regmail").value
    const password = document.getElementById("regpass").value

    console.log(email , password)

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
        alert("You have registered successfully!")
        console.log(result)
    
  })
  .catch((error) => {
    console.log(error.code)
    console.log(error.message)
  });
}

function login(){
    const nme = document.getElementById("logname").value
    const mail = document.getElementById("logmail").value
    const password = document.getElementById("logpass").value

    firebase.auth().signInWithEmailAndPassword(mail, password)
  .then((result) => {
        alert("You have logged in successfully!")
        const user = firebase.auth().currentUser
        console.log(user)

        let uid = user.uid
        // console.log(user_uid)
        

        let details ={name:nme,
                      email :mail,
                      loggedin : true}

        db.ref("registeredUsers/"+uid).set(details)
        window.location = "homepg.html";


  })
      .catch((error) => {
        alert("Register first!")
      console.log(error.code)
      console.log(error.message)
    });
}

function logout(){
  firebase.auth().onAuthStateChanged((user) =>{
      if(user){
        var uid = user.uid;
        db.ref(`registeredUsers/${uid}`).once("value")
        .then(function(snapshot){
          var data = snapshot.val()
          if(data.loggedin == true){
            let log ={
              loggedin : false
            }
          db.ref("registeredUsers/"+uid).set(log)
          window.location="loginpg.html"
          }
        })
      }
  })
    
}


function logged(){
  firebase.auth().onAuthStateChanged((user) => {
     if(user) {
       console.log(user)
           var uid = user.uid;
           console.log(uid)
           db.ref(`registeredUsers/${uid}`).once("value")
           .then(function(snapshot){
             var data = snapshot.val()
             // console.log(data)

     if (data.loggedin==true){
         document.getElementById("weltxt").innerHTML=`
          <h2>Welcome, ${data.name} </h2>`;
         display()
             }
           })
     }
   })
}


function display(){
    firebase.auth().onAuthStateChanged((user)=> {
        if(user){
            var uid =user.uid
              let list = firebase.database().ref(`registeredUsers/${uid}`)

              list.once('value').then(function(snapshot){
                  
                let data = snapshot.val()
                let htmldata = ""

                  htmldata = htmldata + `<tr>
                  <td> ${data.name} </td>
                  <td> ${data.email} </td>
                  <td> <button onclick = "update('${data.email}')"> &#9998 </button> </td>
                  <td> <button onclick = "delete('${data.email}')"> &#128465 </button> </td>
                  </tr>`
                
        document.getElementById("table_body").innerHTML = htmldata
        })
      }
    })
  }

function secure(){
  firebase.auth().onAuthStateChanged((user) =>{
    if(user){
      var uid = user.uid
      db.ref(`registeredUsers/${uid}`).once("value")
      .then(function(snapshot){
        var data = snapshot.val()
        console.log(data)
      if(data.loggedin==false){
        window.location = "loginpg.html"
      }
      })
    }
  })
}
