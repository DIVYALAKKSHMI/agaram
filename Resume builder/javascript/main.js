Details ={}

temp_edu ={}

                // ..........setting data
//  function text(e){
//     Details[e.name] = e.value
//     console.log(Details)
//     display()
// }

// function text(e,p_detail){
//     if(p_detail){
//         Details[p_detail] = {}
//         Details[p_detail][e.name] = e.value
//     }
//     else{
//         Details[e.name] = e.value
//     }
//     display()
// }

function text(e,p_detail){
    if(p_detail){
        if(!Details[p_detail]){ 
            Details[p_detail] = {}
        }
        // else{
        // Details[p_detail] ={...Details[p_detail]}
        
        // }
    Details[p_detail][e.name] =e.value
    }
    else{
        Details[e.name] = e.value
    }
    display()
}



function add(p_key,ele_id,element_id){
    if(!Details[p_key]){
        Details[p_key] = []
        
    }
    let value =document.getElementById(ele_id).value

    
        if(value==""){
            alert("Enter value")
        }
        else{Details[p_key].push(document.getElementById(ele_id).value)}

    // let data = [...Details[p_key]]
    // // console.log(data)

    // let items = ""

    // for(var i=0;i<data.length;i++){
    //     items = items + `<button type="button" class="btn btn-primary close p-2" onclick ="remove('${data[i]}','${p_key}')" >
    //     ${data[i]}
    //     </button>`    
    // }
    // document.getElementById(element_id).innerHTML = items
    document.getElementById(ele_id).value = ""
     multi(p_key,element_id)
    display()    
}

function multi(p_key,element_id){
    let data = [...Details[p_key]]
    // console.log(data)

    let items = ""

    for(var i=0;i<data.length;i++){
        items = items + `<button type="button" class="btn btn-primary close p-2" onclick ="remove('${data[i]}','${p_key}','${element_id}')" >
        ${data[i]}` + " " +
        `&times;</button>`    
    }
    document.getElementById(element_id).innerHTML = items
    // document.getElementById(element_id).value = ""
}

function remove(del,p_key,element_id){

    let list = [...Details[p_key]]

    // console.log(list)

    skilllst =[]

    for(var i=0;i<list.length;i++){
        if(list[i]!=del){
            skilllst.push(list[i])
        }
    }
    Details[p_key]= skilllst
    display()
    multi(p_key,element_id)

}



function multiadd(e){
    temp_edu[e.name] = e.value
    console.log(temp_edu)
    
}

function objdetail(p_key,id){


    if(!Details[p_key]){
        Details[p_key] =[]
    }
    Details[p_key].push(temp_edu)
          
        if(temp_edu){
         temp_edu = {...temp_edu}
        }


    let data = Details[p_key]
    console.log(data)

        let disdata = ""

    for(var i=0;i<data.length;i++){
        console.log(data[i].instnme)

        for(let key in data[i]){
            console.log([data[i][key]])
            disdata = disdata + `
            <tr>
            <td> ${data[i][key]} </td>
            <td> <button type ="button" class ="btn btn-warning" onclick ="removemulti('${[data[i][key]]}','${p_key}')">Delete</button> </td>
            </tr>
            `
        }
    }
    document.getElementById("edushow").innerHTML = disdata


    display()
    
    
    //     let key = Object.keys(temp_edu)

    //     let val = Object.values(temp_edu)
    //     //  console.log(val)

    //     // console.log(key)    

    //     let show ="" 

    //     for(var i =0;i<key.length;i++){
    //         let each = key[i]
    //         document.getElementById(each).value =""
    //         show = show 
    //     }   
    //         for(var i=0;i<val.length ;i++){
    //           show = show + `<button type ="button" onclick="removemulti('${val[i]}')">${val[i]}</button>`
    //         }
    //     document.getElementById(id).innerHTML=show
    //     display()
    }

function removemulti(eduval,idnme){
    let p_key = Details[idnme]
    console.log(p_key)
    let val = Object.values(temp_edu)
    console.log(val)
    let list =[]
    for(var i=0;i<val.length;i++){
        if(eduval!=val[i]){
            list.push(val[i])
            console.log(list)
        }
        // list.push(temp_edu)
    }
    
    // console.log(temp_edu)
    // objdetail(p_key,idnme)
    display()
}

    
// let show = ""
//     for(var i =0;i<temp_edu.length;i++){
//             console.log(temp_edu[i])
//             show = show + `<tr> 
//             <td> ${temp_edu[i].insname}</td>
//             <td> ${temp_edu[i].level}</td>
//             <td> ${temp_edu[i].psyr}</td>
//             <td> ${temp_edu[i].percentage}</td>
//             <td><button>Remove &times;</button></td>
//             </tr>`
//             document.getElementById(id).innerHTML = show
        
//         console.log(temp_edu)       
//     }    
// }
    

function display(){
document.getElementById("display_data").innerHTML = JSON.stringify(Details, undefined ,2)
// console.log(Details)
}


function post(){
    
    $.ajax({
        type : "post",
        url : " http://agaram.academy/api/action.php",
        data : {
            request : "create_resume",
            user : "divya",
            resume :  Details
        },
        success : function(succ){
            console.log(succ)
        },
        error : function(err){
            console.log(err)
        }
    })
}

function list(){
     window.location = "data.html"
    
}

function dis(){
    $.ajax({
        type : "get",
        url : "http://agaram.academy/api/action.php",
        data : {
            request : "get_user_resume",
            user : "divya"
        },
        success : function(succ){
            console.log(succ)

            let va = JSON.parse(succ)

            let items =""

            for(var i=0;i<va.data.length;i++){
                items = items + `
                <tr>
                <td> ${va.data[i].id} </td>
                <td> ${va.data[i].user} </td>
                <td> <button type ="button" class ="btn btn-info" onclick ="tdel('${va.data[i].id}')"> Delete </button> </td>
                <td> <a href ="manage.html?id=${va.data[i].id}">Link</a> </td>
                </tr>
                `

                $("#tbody").html(items)
            }
        },
        error : function(err){
            console.log(err)
        }
    })
}

function tdel(id){
    $.ajax({
        type : "get",
        url : "http://agaram.academy/api/action.php",
        data : {
            request : "delete_user_resume",
            user : "divya",
            id : id
        },
        success : function(succ){
            console.log(succ)
            dis()
        },
        error : function(err){
            console.log(err)
        }
    })
}


function get(){
    $.ajax({
        type : "get",
        url : "http://agaram.academy/api/action.php",
        data : {
            request : "get_user_resume",
            user : "divya"
        },
        success : function(succ){
            console.log(JSON.parse(succ))
        },
        error : function(err){
            console.log(err)
        }
    })
}

function dele(){
    $.ajax({
        type : "get",
        url : "http://agaram.academy/api/action.php",
        data : {
            request : "delete_user_resume",
            user : "divya",
            id : 8511
        },
        success : function(succ){
            console.log(succ)
        },
        error : function(err){
            console.log(err)
        }
    })
}

function resbyid(){
    $.ajax({
        type : "get",
        url : "http://agaram.academy/api/action.php",
        data : {
            request : "get_resume_by_id",
            user : "divya",
            id : 8555
        },
        success : function(succ){
            console.log(succ)
        },
        error : function(err){
            console.log(err)
        }
        })
    }


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

function getid(d){
    $.ajax({
        type : "get",
        url : "http://agaram.academy/api/action.php",
        data : {
            request : "get_resume_by_id",
            user : "divya",
            id : d 
        },
        success : function(succ){
            console.log("id :",d)
            console.log(succ)

            let val = JSON.parse(succ)
            let valdata = JSON.parse(val.data.data)
            let pers = valdata.personaldetails
            // let project = valdata.project
            // console.log(project.proname)

            console.log(valdata)
            console.log(pers)

            // console.log(valdata.personaldetails.DOB)
            // console.log(valdata.skills)

            let list = valdata.skills
            
            let lang_list = valdata.languages_known
            console.log(lang_list)


            // console.log(list[1])
            let educat = valdata.education
            console.log(educat)
            // console.log(valdata.education[0].instnme)

            let skl = ""

            for(var i=0;i<list.length;i++){
                // alert(list[i])
                skl = skl + `
                <li> ${list[i]} </li>
                `
                $("#skill").html(skl)
            }

            let lang = ""
            for(var i=0;i<lang_list.length;i++){
                lang = lang + `
                <li> ${lang_list[i]} </li>
                `
                $("#langu").html(lang)
            }

            //  $("#pronm").html(project.proname)
            //  $("#prod").html(project.prodesc)
             $("#name").html(valdata.name)
             $("#email").html(valdata.email)
             $("#phoneno").html(valdata.phoneno)
             $("#fname").html(pers.father_name)
             $("#dob").html(pers.DOB)
             $("#age").html(pers.age)
             $("#declare").html(valdata.declaration)
             $("#obj").html(valdata.objective)
             $("#marstatus").html(pers.maritalstate)
             $("#address").html(valdata.addre)

             let edu =""
            for(var i=0;i<educat.length;i++){
                edu = edu + `
                <tr>
                <td> ${educat[i].instnme} </td>
                <td> ${educat[i].level} </td>
                <td> ${educat[i].year} </td>
                <td> ${educat[i].per} </td>
                </tr>
                `
                $("#educate").html(edu)
            }  
        },
        error : function(err){
            console.log(err)
        }
    })
}

