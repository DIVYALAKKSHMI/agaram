Details ={}

function singleval(e,p_key){
    if(p_key){
        if(!Details[p_key]){
        Details[p_key] = {}
        }
        // else {
        //     Details[p_key] ={...Details[p_key]}
        // }

    Details[p_key][e.name] = e.value

    }
    else {
        Details[e.name] =e.value
    }
    display()

    console.log(Details)
}

function multival(key_nme,val,show){
    if(!Details[key_nme]){
        Details[key_nme] =[]
    }
    
    let valu = document.getElementById(val).value
    // console.log(valu)

        if(valu ==""){
            alert("enter value")
        }
        else{
            Details[key_nme].push(document.getElementById(val).value)
        }
    document.getElementById(val).value =""

    let data = [...Details[key_nme]]
    // console.log(data)

    let items = ""

    for(var i=0;i<data.length;i++){
        items = items + `
        <button type ="button" class ="btn btn-primary" onclick="remove('${data[i]}','${key_nme}','show')">
        ${data[i]}  &times;
        </button>`
    }
    document.getElementById(show).innerHTML =items
    display()
    // console.log(Details)
}


function remove(data,key,show){
    let values = [...Details[key]]
    // console.log(values)
    let list =[]
    for(var i=0;i<values.length;i++){
        if(values[i]!=data){
            list.push(values[i])
        }
    }
    Details[key] = list
    // console.log(list)
    console.log(Details)
    display()
    
}


function display(){
    document.getElementById("display").innerHTML = JSON.stringify(Details,undefined,2)
}

 