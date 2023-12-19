import axios from "axios"
import { useEffect } from "react"


function User(){

    useEffect(()=>{
        const userlist = ()=> {
            let data = axios.get('https://jsonplaceholder.typicode.com/posts').then(function(response){
                console.log(response)
                
            })
        }
    },[])

        

    return(
        <>
            {/* {JSON.stringify(data)} */}
            <h2>Welcome to userpage</h2>
        </>
    )
}
export default User