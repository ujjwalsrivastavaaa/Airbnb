import react,{createContext} from "react";
import { useContext } from "react";
import { Children } from "react";
import { authDataContext } from "./AuthContext";
import { useState } from "react";
export const userDataContext=createContext()

function userContext({children}){
     
    let {serverUrl}=useContext(authDataContext)
    let [userData,setUserData]=useState()
    const getCurrentUser=async ()=>{
   try{
    let result =await axios.get(serverUrl+"/api/user/currentuser",{withCredentials:true})
    setUserData(result.data);
   }
   catch(error){
   setUserData(null)
   console.log(error)
   }
        
    }
    let value={

    }
    return(
        <div>
         <userDataContext.provider value={value}>
            {Children}
         </userDataContext.provider>
        </div>
    )
}

export default userContext