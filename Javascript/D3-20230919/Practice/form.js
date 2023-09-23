// let usrdtls = [{email : "divya@gmail.com",
//                     password : 2345,
//                     name : "divya"},
//                     {email : "abisha@gmail.com",
//                      password : 123 ,
//                      name : "abisha"}]

// localStorage.setItem("userdetails",JSON.stringify(usrdtls)) 

// function logincheck(){
//     let login_email = document.getElementById("email").value 
//     let login_password = document.getElementById("password").value
//     alert(login_email)
//     alert(login_password)
// } 




function login(){
    document.getElementById("txt").style.display ="none"
    document.getElementById("wrapper").style.display = "block"
    document.getElementById("reg").style.display = "none"
    document.getElementById("home").style.display = "none"
}


function register(){
    document.getElementById("txt").style.display ="none"
    document.getElementById("wrapper").style.display = "none"
    document.getElementById("reg").style.display = "block"
    document.getElementById("home").style.display = "none"
}


 function logincheck(){
     let login_email = document.getElementById("email").value 
     let login_password = document.getElementById("password").value

    let usr = localStorage.getItem("userdetails")
     // console.log(usr) 
    let usr_array = JSON.parse(usr) 
     // console.log(usr_array)

    for (var i = 0; i<usr_array.length; i++){
     // console.log(usr_array[i].email)
     // console.log(usr_array[i].password)
        let eml_chk = usr_array[i].email
         let pwd_chk = usr_array[i].password
         let username = usr_array[i].name
                  if ( eml_chk== login_email && pwd_chk == login_password ){
                document.getElementById("wrapper").style.display = "none"
               document.getElementById("txt").style.display = "block"
                document.getElementById("Weltxt").innerHTML = `<h2>
                     Welcome,
                    ${username}</h2>`   
                 localStorage.setItem("loggedin",true)
                 localStorage.setItem("Username",username)}}
        document.getElementById("rlist").style.display = "block"
        reguser()
 }       

 function homepg(){
    
     document.getElementById("wrapper").style.display = "block"
    document.getElementById("txt").style.display = "none"
    document.getElementById("rlist").style.display = "none"}
        

 function load(){
    if(localStorage.getItem("loggedin")){
        document.getElementById("wrapper").style.display = "none"
       document.getElementById("txt").style.display = "block"  
         user = localStorage.getItem("Username")
         document.getElementById("Weltxt").innerHTML = `
         <h2>Welcome,
       ${user}</h2>`
 }}

// function reg(){  
//     let reg_mail = document.getElementById("rmail").value;
//     let reg_pass = document.getElementById("rpass").value;
//     let reg_name = document.getElementById("rname").value;

//     let localdata = localStorage.getItem("userdetails");
//     let array = JSON.parse(localdata);
//     array.push({email : reg_mail,
//                    password : reg_pass,
//                    name : reg_name});
//     localStorage.setItem("userdetails",JSON.stringify(array)); 

// }

function reg(){
    let reg_mail = document.getElementById("rmail").value;
    let reg_pass = document.getElementById("rpass").value;
    let reg_name = document.getElementById("rname").value;

    if (localStorage.getItem("userdetails")){
        localdata = JSON.parse(localStorage.getItem("userdetails"))
            localdata.push({email : reg_mail,
                            password : reg_pass,
                            name : reg_name}) 
            localStorage.setItem("userdetails",JSON.stringify(localdata))}
    else{
        let localdata = []
        localdata.push({email : reg_mail,
            password : reg_pass,
            name : reg_name}) 
        localStorage.setItem("userdetails",JSON.stringify(localdata))
    }
}

// function reguser(){
//     list = JSON.parse(localStorage.getItem("userdetails"))
//     for (i=0;i<list.length;i++){
//         let li_name = list[i].name
//         let li_email = list[i].email
//         document.getElementById("lname").innerHTML =`Name :
//         ${li_name} 
//         Email : ${li_email}`
//     }
// } 

 function reguser(){
    document.getElementById("wrapper").style.display ="none"
     list = JSON.parse(localStorage.getItem("userdetails"))
     data = ""
      for (i=0;i<list.length;i++){
          data = data + `
          <tr>
          <td>${list[i].name}</td>
          <td>${list[i].email}</td>
          <td><button type ="button" onclick = "update('${list[i].email}')">&#9998</button></td>
          <td> <button type ="button" onclick ="delte('${list[i].email}')">&#128465</button></td>
          </tr>`}
    document.getElementById("row_list").innerHTML =data
      }

// dynamic table
//     document.getElementById("wrapper").style.display ="none"
//     let list =["a","b","c"]
//     let htmldata = "" 
//     for (i=0; i<list.length; i++){
//         htmldata = htmldata+`
//         <tr>
//         <td>${list[i]}</td>
//         <td>${list[i]}</td>
//         <td>${list[i]}</td>
//         </tr>`
//     }
//     document.getElementById("row_list").innerHTML = htmldata
// 


function delte(d_email){
    // alert(5)
    // alert(index)
    
    let del = JSON.parse(localStorage.getItem("userdetails"))
    let newdata =[]
    for (let i=0;i<del.length;i++){
        if (d_email != del[i].email){
            newdata.push(del[i])
        }
    }
    localStorage.setItem("userdetails",JSON.stringify(newdata))
    reguser()
}

function update(e_mail){
    let arrayobj = JSON.parse(localStorage.getItem("userdetails"))
    for (var i =0; i<arrayobj.length;i++){
        if (arrayobj[i].email== e_mail){

            let namecell = arrayobj[i].name
            let mailcell = arrayobj[i].email
            let passcell = arrayobj[i].password

            let nme = prompt("Enter the updated name : ", namecell.innerHTML)
            let mal = prompt("Enter the updated email : ", mailcell.innerHTML)
            let passwd = prompt("Enter the updated password : ", passcell.innerHTML)

            namecell.innerHTML = nme
            mailcell.innerHTML = mal
            passcell.innerHTML = passwd
            
         let updated_data = []
        if (localStorage.getItem("userdetails")){
            updated_data= JSON.parse(localStorage.getItem("userdetails"))
            //updated_data.push(locldata)
        }
        
        
            updated_data.push({name : nme,
                                email : mal,
                                password : passwd})
            localStorage.setItem("userdetails",JSON.stringify(updated_data))
            delte(e_mail)
        } 
    }    
} 