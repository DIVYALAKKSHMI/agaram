function data(){

    $.ajax({
        type : "get",
        url : "https://jsonplaceholder.typicode.com/posts",
        data : {},
        success : function(succ){
            console.log(succ)
        },
        error : function(err){
            console.log(err)
        }
    })

}

function display(){
    $.ajax({
        type : "get",
        url : "https://jsonplaceholder.typicode.com/posts",
        data : {},
        success : function(succ){
            console.log(succ)
        
        let items =""
        for(var i=0;i<succ.length;i++){
            items = items + 
            `
            <tr>
            <td> ${succ[i].id} </td>
            <td> ${succ[i].userId} </td>
            <td><button type ="button" class ="btn btn-primary" onclick ="comment('${succ[i].id}')"> ${succ[i].title} </button></td>
            <td> ${succ[i].body} </td>
            </tr>
            `
        }
        $("#t_body").html(items)
        },
        error : function(err){
            console.log(err)
        }

    })
}

function comment(id){
    $.ajax({
        type : "get",
        url : `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        data : {},
        success : function(succ){
            console.log(succ)
        
        },
        error : function(err){
            console.log(err)
        }
    })
}
// url:`https://jsonplaceholder.typicode.com/posts/${id}/comments`,

function post(){
    $.ajax({
        type : 'post',
        url : 'https://jsonplaceholder.typicode.com/posts',
        data : {
            userId : 20,
            title : "agaram",
            body : "Welcome to agaram software academy"
        },
        success : function(succ){
            console.log(succ)
        },
        error : function(err){
            console.log(err)
        }
    })
}