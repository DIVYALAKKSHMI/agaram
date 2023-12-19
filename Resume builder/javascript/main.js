Details ={}

temp_edu ={}

temp_pro ={}

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

                // .........single value,personaldetails

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

                    // .....array

function add(p_key,ele_id){
    console.log(ele_id)
    console.log(p_key)
    if(!Details[p_key]){
        Details[p_key] = []
        
    }
        if(ele_id){
            let value =document.getElementById(ele_id).value
            if(value==""){ 
                alert("Enter value")
            }
            else{
                Details[p_key].push(document.getElementById(ele_id).value)
                let data=Details[p_key]
                multi(data,p_key)
                document.getElementById(ele_id).value = ""
               display()    
            }
        }
    else{
        Details[p_key].push(temp_edu)
        console.log(Details[p_key])

        let value=Details[p_key]

        objdetail(value,p_key)

        let keys = Object.keys(temp_edu)
       for(var i=0;i<keys.length;i++){
       let vall = keys[i]
            console.log(keys[i])
       document.getElementById(vall).value =""
       }
        temp_edu ={}
    //    ...if not empty then it replace with the first one and adds another one object with the same value
        }

    
        

    // let data = [...Details[p_key]]
    // // console.log(data)

    // let items = ""

    // for(var i=0;i<data.length;i++){
    //     items = items + `<button type="button" class="btn btn-primary close p-2" onclick ="remove('${data[i]}','${p_key}')" >
    //     ${data[i]}
    //     </button>`    
    // }
    // document.getElementById(element_id).innerHTML = items
   
}

function multi(data,p_key){
    console.log(p_key)
    // console.log(ele_id)
    // let data = [...Details[p_key]]
    // console.log(data)

    let items = ""

    for(var i=0;i<data.length;i++){
        items = items + `<button type="button" class="btn btn-primary close p-2" onclick ="remove('${data[i]}','${p_key}')" >
        ${data[i]}` + " " +
        `&times;</button>`    
    }
    document.getElementById(p_key).innerHTML = items
    // document.getElementById(element_id).value = ""
}

function remove(del,p_key){

    let list = Details[p_key]

    // console.log(list)

    skilllst =[]

    for(var i=0;i<list.length;i++){
        if(list[i]!=del){
            skilllst.push(list[i])
        }
    }
    Details[p_key]= skilllst
    display()
    multi(Details[p_key],p_key)

}

function proadd(e){
    temp_pro[e.name] = e.value
    console.log(temp_pro)
}

function proj(pkey){

    if(!Details[pkey]){
        Details[pkey] =[]
    }
    Details[pkey].push(temp_pro)

        if(temp_pro){
            temp_pro = {...temp_pro}
        }
    // document.getElementById()
    display()

}


function multiadd(e){
    temp_edu[e.name] = e.value
    console.log(temp_edu)
    
}


function objdetail(data,p_key){
    // console.log(p_key)
    //  console.log(id)
    // if(!Details[p_key]){
    //     Details[p_key] =[]
    // }
    // else{
        
    // let data =  Details[p_key]
    
    //     // if(temp_edu){
    //     //  temp_edu = {...temp_edu}
    //     // }


    // // let data = Details[p_key]
    // // console.log(data)

        let disdata = ""

    for(var i=0;i<data.length;i++){
        console.log(data[i].instnme)

        let str =""

        for(let key in data[i]){
            console.log(key)
            console.log(data[i][key])
            // console.log([data[i][key]])  ...[convent]
            str = str + `
            
            <td> ${data[i][key]} </td>
            
            `
        }
        disdata = disdata + `<tr>` + str + ` <td> <button type ="button" class ="btn btn-warning" onclick ="deledu('${i}','${p_key}')">  Remove </button> </td>` + `</tr>`
        console.log(i)
    }
    document.getElementById(p_key).innerHTML = disdata
    display()
}
 

 

function deledu(data,p_key){
    let edu = Details[p_key]
    let array =[]
    for(var i=0;i<edu.length;i++){
        console.log(i)
        if(i!=data){
           array.push(edu[i])
           console.log(edu[i])
        }
        


    }
    Details[p_key] = array
    console.log(array)
    objdetail(Details[p_key],p_key)

}

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
     window.location="data.html"
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
                <td> <a href ="manage.html?id=${va.data[i].id}">link1</a> </td>
                <td> <a href ="resu2.html?id=${va.data[i].id}">Link2</a> </td>
                <td> <a href ="resu3.html?id=${va.data[i].id}">Link3</a> </td>
                <td> <a href ="resu4.html?id=${va.data[i].id}">Link4</a> </td>
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
            let proje = valdata.project
            console.log(proje)
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
             $("#nation").html(pers.nationality)
             $("#title").html(valdata.title)

             let edu =""
            for(var i=0;i<educat.length;i++){
                edu = edu + `
                <tr >
                <td> ${educat[i].instnme} </td>
                <td> ${educat[i].level} </td>
                <td> ${educat[i].year} </td>
                <td> ${educat[i].per} </td>
                </tr>
                `
                $("#educate").html(edu)
            }  

            let pr = ""
             for(var i=0;i<proje.length;i++){
                pr = pr + `
                <tr>
                <td> ${proje[i].proname} </td>
                <td> ${proje[i].prodesc} </td>
                </tr>
                `
                $("#prooject").html(pr)
             }
        },
        error : function(err){
            console.log(err)
        }
    })
}

function generatePDF(){
    //  alert(1)
    const page = document.getElementById('resum');
    var opt = {
        margin : 1,
        filename : 'Demopdf.pdf',
        image : {type : 'jpeg',quality : 0.98},
        html2canvas : {scale : 2},
        jsPDF : {unit : 'in',format : 'letter',orientation : 'portrait'}
    };
    html2pdf().set(opt).from(page).save();
}