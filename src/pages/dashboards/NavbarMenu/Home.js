import React,{useState,useEffect} from "react";
import Menyu from '../pages/Menyu'
import Bosh from '../pages/Bosh';

export default function Home() {
    const [isContact, setIsContact]=useState(true)
    useEffect(() =>{ 
        setTimeout(()=>{
        setIsContact(false);
      }, 2500);
      })


    return (
        <div>     {
            isContact==true?
            <Bosh/>:
            <Menyu/>
                  }
            
        </div>
    )
}
