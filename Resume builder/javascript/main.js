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
        if(Details[p_detail]){ 
            Details[p_detail] = {
            ...Details[p_detail]}
        }
        else{
        Details[p_detail] ={}
        
        }
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
    Details[p_key].push(document.getElementById(ele_id).value)

    // let data = [...Details[p_key]]
    // // console.log(data)

    // let items = ""

    // for(var i=0;i<data.length;i++){
    //     items = items + `<button type="button" class="btn btn-primary close p-2" onclick ="remove('${data[i]}','${p_key}')" >
    //     ${data[i]}
    //     </button>`    
    // }
    // document.getElementById(dssp).innerHTML = items
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

        let key = Object.keys(temp_edu)

        let val = Object.values(temp_edu)
        //  console.log(val)

        // console.log(key)    

        let show ="" 

        for(var i =0;i<key.length;i++){
            let each = key[i]
            document.getElementById(each).value =""
        }   
            for(var i=0;i<val.length ;i++){
              show = show + `${val[i]}`
            }
        document.getElementById(id).innerHTML=show
        display()
    }

// function removemulti(eduval){
//     let val = Object.values(temp_edu)
//     console.log(val)
    // for(var i=0;i<val.length;i++){
    //     if(eduval!=val[i]){
    //         val.push(val[i])
    //     }
    // }
    



        // let show = ""
        // for(var i =0;i<temp_edu.length;i++){
        //     console.log(temp_edu[i])
        //     show = show + `<tr> 
        //     <td> ${temp_edu[i].insname}</td>
        //     <td> ${temp_edu[i].level}</td>
        //     <td> ${temp_edu[i].psyr}</td>
        //     <td> ${temp_edu[i].percentage}</td>
        //     <td><button>Remove &times;</button></td>
        //     </tr>`
        //     document.getElementById(id).innerHTML = show
        
        // console.log(temp_edu)
        
    
    

function display(){
document.getElementById("display_data").innerHTML = JSON.stringify(Details, undefined ,2)
// console.log(Details)
}


