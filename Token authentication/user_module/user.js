Userdetails={}

// function text(e){
//         Userdetails[e.name] = e.value
//         console.log(Userdetails)
    
//     }

    

function text(){
    let name = $("#nme").val()
    let email = $("#mail").val()
    let pass = $("#pass").val()
    let aadh = $("#aadhar").val()
    let addr = $("#addre").val()
    let pho = $("#phone").val()
    let city = $("#city").val()
    let area = $("#area").val()
    let pin = $("#pin").val()

    console.log(name)

    // Userdetails[e.name] = e.value
    // console.log(Userdetails)

    $.ajax({
        type : "post",
        url : "http://agaram.academy/api/action.php",
        data : {
            "request" : "create_candidate",
            "name" : name,
            "email" : email ,
            "password" : pass,
            "aadhar" : aadh ,
            "address" : addr,
            "phone": pho,
            "city": city,
            "area": area,
            "pin": pin
        },
        success : function(succ){
            console.log("success :",succ)
        },
        error : function(err){
            console.log(err)
        }
    })
    
}

// function sub(){
    
// }

function get(){

    $.ajax({
        type : "get",
        url : "http://agaram.academy/api/action.php",
        data : {
            "request" : "getAllMembers",
            
        },
        success : function(succ){
            console.log("success :",succ)
        },
        error : function(err){
            console.log(err)
        }
    })
    
}

function log(){
    let email = $("#lmail").val()
    let pass = $("#lpass").val()
    $.ajax({
        type : "post",
        url : "http://agaram.academy/api/action.php",
        data : {
            "request" : "candidate_login",
            "email" : email,
            "password" : pass
        },
        success : function(succ){
            console.log("success",succ)
            window.location ="user.html"
            
        },
        error : function(err){
            console.log(err)
        }
    })
}

function table(){
    $.ajax({
        type : "get",
        url : "http://agaram.academy/api/action.php",
        data : {
            request : "getAllMembers",
        },
        success : function(succ){
            console.log(succ)

            let dat = JSON.parse(succ)
            console.log(dat)
            let val = dat.data
            console.log(val)

            let values = ""
            for(var i=0;i<val.length;i++){
                values = values + `
                <tr>
                <td> ${val[i].id} </td>
                <td> ${val[i].name} </td>
                <td> ${val[i].email} </td>
                <td> ${val[i].aadhar} </td>
                <td> ${val[i].address} </td>
                <td> ${val[i].phone} </td>
                <td> ${val[i].city} </td>
                <td> ${val[i].area} </td>
                <td> ${val[i].pin} </td>
                `
            }
            $("#tbody").html(values)
        },
        error : function(err){
            console.log(err)
        }
    })
}

// var getUrlParameter = function getUrlParameter(sParam) {
//     var sPageURL = window.location.search.substring(1),
//         sURLVariables = sPageURL.split('&'),
//         sParameterName,
//         i;

//     for (i = 0; i < sURLVariables.length; i++) {
//         sParameterName = sURLVariables[i].split('=');

//         if (sParameterName[0] === sParam) {
//             return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
//         }
//     }
//     return false;
// };