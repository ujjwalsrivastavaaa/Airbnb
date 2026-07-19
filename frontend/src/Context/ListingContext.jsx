import React, { createContext, useState } from "react";

export const listingDataContext=createContext()
function ListingContext( {children} ){
  

 let [title,setTitle]=useState("")
 let[description,setDescription]=useState("")
 let[frontEndImage1,setFrontEndImage1]=useState(null)
 let[frontEndImage2,setFrontEndImage2]=useState(null)
 let[frontEndImage3,setFrontEndImage3]=useState(null)
 let[backEndImage1,setbackEndImage1]=useState(null)
 let[backEndImage2,setbackEndImage2]=useState(null)
 let[backEndImage3,setbackEndImage3]=useState(null)
 let [city,setCity]=useState("")
 let[landmark,setLandmark]=useState("")
 let[category,setCategory]=useState("")

    let value={

  }
    return(
    <div>
     <listingDataContext.Provider value={value}>
      {children}  
     </listingDataContext.Provider>
    </div>
    )
}

export default ListingContext